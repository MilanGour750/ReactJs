import { useState } from 'react'
import Form from './components/Form'
import { ToDoProvider } from './context/TodoContext'

function App() {
  const [todos, SetTodos] = useState([])
  const addTodo = (todo) => {
    SetTodos((prev)=> [{id: Date.now(), ...todo}, ...prev])
  }

  const updateToDo = (id, todo) => {
    SetTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteToDo = (id) => {
    SetTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = () =>{
    SetTodos((prev) => prev.map((prevtodo)=> prevtodo === id ? {...prevtodo, completed: !prevtodo.completed} : prevtodo))
  }

  return (
    <ToDoProvider value={{todos, addTodo, updateToDo, deleteToDo, toggleComplete}}>
      <div className='bg-[#172842] min-h-screen py-8'>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
          <h1 className='text-2xl font-bold text-center mb-8 mt-2'>Manage Your TO Do's</h1>
          <div className='mb-4'>
            <Form/>
          </div>
          <div className='flex flex-wrap gap-y-3'>
            {/* Loop & To DO */}
          </div>
        </div>
      </div>

    </ToDoProvider>
  )
}


export default App


