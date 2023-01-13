import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link, useParams,useNavigate } from 'react-router-dom'


const Edit = () => {
         const { id } = useParams();
         const navigate = useNavigate();
         const [note, setNote] = useState({});
         console.log(id);
         const getSingleNote = async () => {
           const { data } = await axios.get(
             `http://localhost:3000/notes/${id}`
           );
           setNote(data);
         };
         useEffect(() => {
           getSingleNote();
         }, []);
         const handleChange = (e)=>{
                const {name,value}=e.target
                setNote({...note,[name]:value})
         }
         const updateDataApi = async(n)=>{
                const {data} = await axios.patch(`http://localhost:3000/notes/${id}`,n)
                console.log(data)
                navigate('/')
         }
         const handleSubmit= (e)=>{
                e.preventDefault();
                let newNote = {
                                id:note.id,
                                title:note.title,
                                description:note.description,
                                date:new Date().toLocaleDateString()
                }
                updateDataApi(newNote)
         }
  return (
                <div className="min-w-max min-h-screen">
                <h1 className="text-xl text-stone-800 dark:text-slate-50 px-5">Edit Notes</h1>
                <form onSubmit={handleSubmit} autoComplete='off'>
                  <div className="mb-3 p-5">
                    <input
                      type="text"
                      id="base-input"
                      name='title'
                      defaultValue={note.title}
                      onChange={handleChange}
                      placeholder="Type your Title"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-basem rounded-tl-lg rounded-tr-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <textarea
                      id="message"
                      rows="4"
                      name='description'
                      defaultValue={note.description}
                      onChange={handleChange}
                      className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-br-lg rounded-bl-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Leave a comment..."
                    ></textarea>
                  </div>
                  <div className="px-5">
                    <button
                      type="submit"
                      className="px-2 py-2 rounded-lg outline-none bg-green-500"
                    >
                      Update
                    </button>
                    <Link to="/">
                      <button
                        type="submit"
                        className="px-2 py-2 rounded-lg outline-none ml-3 bg-red-500"
                      >
                        Cancle
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
  )
}

export default Edit