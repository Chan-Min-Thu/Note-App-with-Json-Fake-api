import { useState,useEffect } from 'react';
import { Routes,Route } from 'react-router-dom';
import {MdDarkMode} from "react-icons/md"
import {HiSun} from 'react-icons/hi'
import Main from './components/main/Main';
import Create from './components/create/Create';
import Edit from './components/edit/Edit';
import View from './components/view/View';

function App() {
  const [theme,setTheme] = useState('light')
   useEffect(()=>{
    if(theme === "dark"){
      document.documentElement.classList.add('dark')
    }else{
      document.documentElement.classList.remove('dark')
    }
   },[theme])
   const handlechange=()=>{
    theme === "light" ? setTheme("dark"): setTheme('light')
   }
  return (
    <div className="h-auto min-w-fit bg-white dark:bg-slate-700">
      <div className="bg-white dark:bg-slate-700 flex flex-row justify-between p-5">
        <h2 className="text-2xl text-slate-900 dark:text-slate-50">NOTE-APP</h2>
        <button
          className="bg-slate-100 dark:bg-slate-100 p-2 rounded-3xl"
          onClick={handlechange}
        >
          {theme === "light" ? (
            <MdDarkMode className="text-4xl text-blue-500" />
          ) : (
            <HiSun className="text-4xl text-blue-500" />
          )}
        </button>
      </div>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/edit/:id' element={<Edit/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
 