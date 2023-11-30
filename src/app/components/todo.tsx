'use client'
import { useState } from "react";
import { TodoProps } from "../types/todos";
import Link from "next/link";


const Todo = ({todo, deleteTodoItem, update}: TodoProps) => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
        update(todo?.id);
    }

    return (
        <div className='justify-center'>
        <div className="shadow-lg rounded-lg m-8 p-5 w-50 bg-white">
            <div className="flex justify-between items-center">
                <input 
                onChange={handleCheckboxChange} 
                type="checkbox"  
                name="" 
                className="h-6 w-6 text-blue-600 rounded mr-4"/>
                <div className={`text-xl font-bold text-left overflow-hidden overflow-ellipsis ${isChecked ? 'line-through' : ''}`} style={{wordWrap: 'break-word'}}>{todo?.todo}</div>
            </div>
            <button onClick={()=>deleteTodoItem(todo?.id)} className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            <Link href='/edit'><button  className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Edit</button></Link>
        </div>
        </div>
    );
}

export default Todo;




