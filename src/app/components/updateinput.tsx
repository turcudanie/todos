import React, { useState } from 'react'

import Link from 'next/link'
import { EditInputProps } from '../types/todos'


const updateinput = ({edit} : EditInputProps) => {

    const [todoUpdate, setUpdate] = useState<string>("")

    const Update=(e: React.ChangeEvent<HTMLInputElement>) => {
            setUpdate(e.target.value)
        }

        const handleUpdate = (e: React.MouseEvent<HTMLButtonElement>) => {
            
           if(todoUpdate){ 
            e.preventDefault();
            edit({
                id: Math.round(Math.random() * 10),
                todo: todoUpdate.trim(),
                checked: false
            }),
            <Link href="/" />
        }else {
            console.log("error")
        }
        }
    

    return (
        <>
            <div className="flex items-center justify-center h-screen bg-gray-200">
                <div className="w-full max-w-xl">
                    <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md" >
                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-bold text-gray-700" >
                                Edit Text
                            </label>
                            <input 
                            onChange={Update}
                            className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Enter text" />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                              onClick={handleUpdate}
                              className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="button">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </>

    )

    }


export default updateinput