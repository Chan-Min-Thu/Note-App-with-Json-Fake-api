import axios from 'axios';
import React,{useState} from 'react'
import { MdNorthWest } from 'react-icons/md';
// import { AiOutlineConsoleSql } from 'react-icons/ai';
import { Link,useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();
  const [form,setForm] = useState({
                title:'',
                description:''
  })
  const handleChange =(e)=>{
                const {name,value} = e.target;
                setForm({...form,[name]:value})
                console.log(form)
  }
  const addSingleData =async(d)=>{
     const {data} = await axios.post('http://localhost:3000/notes',d)

  }
  const handleSubmit =(e)=>{
                e.preventDefault();
                let newForm = {
                                id:Date.now(),
                                title:form.title,
                                description:form.description,
                                date:new Date().toLocaleDateString()               
                }
                addSingleData(newForm)
                navigate(-1)

  }
  return (
    <div className="min-w-max min-h-screen">
      <h1 className="text-xl px-5 text-stone-800 dark:text-slate-50">Create Notes</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 p-5">
          <input
            type="text"
            id="base-input"
            placeholder="Type your Title"
            name='title'
            value={form.title}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-basem rounded-tl-lg rounded-tr-lg outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <textarea
            id="message"
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            rows="4"
            className="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-br-lg rounded-bl-lg outline-none border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="px-5">
          <button
            type="submit"
            className="px-2 py-2 rounded-lg outline-none bg-green-500"
          >
            Create
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
  );
}

export default Create