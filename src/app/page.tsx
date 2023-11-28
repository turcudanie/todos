"use client"
import { Suspense, useEffect, useState } from 'react'
import Modalinput from './components/modalinput'
import Todo from './components/todo';





export default function Home() {
  const [todos, setTodos] = useState<TodosArray[]>([]);

  //create a new todo 
  const createTodo = (todo: TodosArray) => {

    const checkTodos = todos.find((item) => item.todo === todo.todo);
    if (checkTodos) return;

    setTodos([...todos, todo]);

    const SaveTodos = async () => {
      const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({ todos: todo }),
      })
      res.ok ? console.log('Todos saved') : console.log('error');
    }
    SaveTodos()
  }


  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));

  }


  const updateTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }

  useEffect(() => {
    const getTodos = async () => {
      const res = await fetch('/api/todos');
      const todos = await res.json();
      setTodos(todos);
    }
    getTodos();
    // console.log(getTodos);
  }, [])




  return (
    <>
      <Modalinput create={createTodo} />
      <div>
        <Suspense fallback={<div>Loading...</div>}>

          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} deleteTodoItem={deleteTodo} update={updateTodo} />
          ))}
        </Suspense >
      </div>
   

    </>
  )
}
