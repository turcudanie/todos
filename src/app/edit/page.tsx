"use client"
import React, { useState } from 'react'
import Updateinput from '../components/updateinput'
import EditInputProps from "../types/todos"





const page = () => {





  function editTodo(): void {
    throw new Error('Function not implemented.')
  }

  return (
    <>

      <Updateinput  edit={editTodo}  />
    </>
  )
}
export default page;