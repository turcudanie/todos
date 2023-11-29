'use client'
import { Suspense, useEffect, useState } from 'react'
import Modalinput from './components/modalinput'
import { TodosArray } from './types/todos';
import Todo from './components/todo';
import Updateinput from './components/updateinput';







export default function Home() {
  const [todos, setTodos] = useState<TodosArray[]>([]);
  const [isEditing, setIsEditing] = useState(-1);


  const URL="http://localhost:3000"

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


  const deleteTodo = async (id: number) => {
    // Send a DELETE request to the server
    const res = await fetch(`${URL}/api/todos/`, {
      method: 'DELETE',
      body: JSON.stringify({ id }),
    });
    console.log(res);
    // Check if the request was successful
    if (res.ok) {
      setTodos(todos.filter((todo) => todo.id !== id));
      console.log(`Todo item with id ${id} deleted successfully.`);
    } else if (res.status === 404) {
      console.error(`Todo item with id ${id} does not exist.`);
    } else {
      console.error(`Failed to delete todo item with id ${id}.`);
    }
  };
  
  
  

    


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

  const editTodo = async (id: number )=>
  {
    setIsEditing(id)
    // if (isEditing) {
    //   // Replace with your actual save logic
    //   const response = await fetch('${URL}/api/todos', {
    //     method: 'PUT',
    //     body: JSON.stringify({
    //       id, 
    //     })
    //   });

    //   if (!response.ok) {
    //     console.error('Failed to save data');
    //   }
    // }

    // setIsEditing(!isEditing);
  };








  return (
    <>
      <Modalinput create={createTodo} />
      <div>
        <Suspense fallback={<div>Loading...</div>}>

          {todos.map((todo, index) => (  
            <Todo key={index} {...todo} todo={todo} deleteTodoItem={deleteTodo} update={updateTodo} editTodoItem={editTodo} />
          ))}
        </Suspense >
      </div>
    

    </>
  )
}
