import React, { useState } from 'react'
import { ModalInputProps } from '../types/todos';
const Modalinput = ({ create }: ModalInputProps) => {

    const [todoItem, setTodoItem] = useState<string>("")

    const handleAddTodoItem = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTodoItem(e.target.value)
    }

    const handleAddTodo = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        create({
            id: Math.round(Math.random() * 10),
            todo: todoItem.trim(),
            checked: false
        })
    }

    return (
        <>
            <div className='flex justify-center  mt-20'>
                <form action="" className='w-full md:w-4/5 lg:w-3/5 xl:w-2/5 flex flex-col items-center justify-center bg-zinc-300 p-6 rounded-lg shadow-md'>
                    <label htmlFor="todo_input" className="text-4xl md:text-3xl font-bold text-black mb-4">
                        Todo Input
                    </label>
                    <input
                        onChange={handleAddTodoItem}
                        type="text"
                        id="todo_input"
                        className='w-full h-12 px-3 py-2 border border-gray-300 rounded-md text-lg mb-4' />
                    <div className="flex items-center justify-start pt-10">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded-sm w-96"
                        onClick={handleAddTodo}>
                            Add +
                        </button>
                    </div>
                </form>
            </div>
        </>

    )
}

export default Modalinput;