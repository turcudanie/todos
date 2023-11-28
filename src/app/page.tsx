"use client"
import { useEffect, useState } from 'react'
import Modalinput from './components/modalinput'
import Todo from './components/todo';





export default function Home() {
  const [todos, setTodos] = useState<TodosArray[]>([]);

  //create a new todo 
  const createTodo = (todo: TodosArray) => {
    const checkTodos = todos.find((item) => item.todo === todo.todo);
    if (checkTodos) return;
    setTodos([...todos, todo]);
  }


  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));

  }


  const updateTodo = (id: number) => {
    setTodos(todos.map((todo) => todo.id === id ? { ...todo, checked: !todo.checked } : todo))
  }


  useEffect(() => {
    const SaveTodos = async () =>{
      const res = await fetch('/api/todos', {
        method: 'POST',
        body: JSON.stringify({todos}),
      })
      res.ok ? console.log('Todos saved') : console.log('error');
    }
    SaveTodos
  }, [todos])

  return (
    <>
      <Modalinput create={createTodo} />
      <div>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodoItem={deleteTodo} update={updateTodo} />
        ))}

      </div>

    </>
  )
}
