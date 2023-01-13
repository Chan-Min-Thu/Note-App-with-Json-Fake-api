import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import { AiFillEdit } from 'react-icons/ai';
import { useParams,Link } from 'react-router-dom'

const View = () => {
  const {id} = useParams();
  const [note,setNote] = useState({})
  console.log(id)
  const getSingleNote =async ()=>{
    const {data} = await axios.get(`http://localhost:3000/notes/${id}`)
    setNote(data)
  }
  useEffect(()=>{
    getSingleNote()
  },[])
  return (
    <div className="flex flex-col min-h-screen max-h-auto justify-start m-5 ">
      <div className='relative mt-10 flex flex-row justify-between'>
        <h1 className="text-stone-900 dark:text-slate-50 text-2xl">{note.title}</h1>
        <Link to='/'>
          <div className='hover:bg-slate-300 px-2 py-2 rounded-3xl '>
            <BiArrowBack className='text-blue-600 text-3xl' />
          </div>
        </Link>
      </div>
      <p className='text-stone-900 dark:text-slate-50 text-lg mt-10'>{note.description}</p>
      <div className='text-stone-900 dark:text-slate-50 text-lg my-10 flex flex-row justify-end'>
        <span className=''>{note.date}</span>
        <Link to={`/edit/${id}`}>
                <AiFillEdit className="text-blue-600 text-xl ml-3"/>
        </Link>
      </div>
    </div>
  );
}

export default View