import React from "react";
import { AiFillEye,AiFillDelete,AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

function NoteList({ note,deleteSingelData }) {

  return (
    <div className="w-80 bg-slate-200 flex flex-col justify-between dark:bg-slate-600 shadow-md h-80 m-7 shadow-neutral-400 p-5 rounded-lg">
      <div>
        <div className="flex justify-between">
          <h1 className="text-stone-900 dark:text-white text-xl mb-4">
            {note.title}
          </h1>
          <Link to={`/view/${note.id}`}>
          <AiFillEye className="text-stone-600 text-xl dark:text-slate-50" />
          </Link>
        </div>
        <p className="text-stone-800 overflow-hidden h-48 dark:text-slate-200 text-base">
          {note.description}
        </p>
      </div>
      <div className="flex flex-row justify-between">
           <p className="text-lg text-stone-800 dark:text-slate-200 ">{note.date}</p> 
           <div className="flex flex-row">
                <Link to={`/edit/${note.id}`}>
                <AiFillEdit className="text-blue-600 text-xl mr-3"/>
                </Link>
                <AiFillDelete onClick={()=>deleteSingelData(note.id)} className="text-red-600 text-xl"/>
           </div>
      </div>
    </div>
  );
}

export default NoteList;
