import React,{useState,useEffect} from 'react'
import {BsPlusLg} from "react-icons/bs"
import { Link } from 'react-router-dom';
import NoteList from './NoteList';
import axios from 'axios'

const Main = () => {
  const [notes,setNotes] = useState([])
  const [loading,setLoading] = useState("false")
  const getData = async()=>{
    const {data} = await axios.get('http://localhost:3000/notes')
    setNotes(data)
    console.log(data)
  }
  const deleteSingelData = async(id) =>{
    const {data} = await axios.delete(`http://localhost:3000/notes/${id}`)
    getData()
  }
  useEffect(()=> {
   getData();
  },[])
  const handleChange =(e)=>{
    let searchText = e.target.value.toLowerCase();
    console.log(searchText)
    if(searchText=== ''){
      getData();
    }else if(searchText.length >0){
    let filteredNotes = notes.filter(n=>n.title.toLowerCase().includes(searchText.toLowerCase()))
    return setNotes(filteredNotes)
    }
  }
  return (
    <div className="min-w-min min-h-screen relative">
      <div className='w-10/12 m-auto'>
        <label
          htmlFor="default-search"
          className="text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="default-search"
            onChange={handleChange}
            className="block w-full outline-none m-auto p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search your notes."
            required
          />
         
        </div>
      </div>
      <div className='flex justify-start w-11/12 m-auto px-5 flex-wrap'>
         {notes.map((note,index)=> <NoteList key={index} note={note} deleteSingelData={deleteSingelData}/>)}
      </div>
      <Link to='/create'>
                <div className='fixed right-10 bottom-10 bg-slate-100 px-2 py-2 rounded-2xl' >
                                <BsPlusLg className='text-xl text-blue-500'/>
                </div>
      </Link>
      
    </div>
  );
}

export default Main