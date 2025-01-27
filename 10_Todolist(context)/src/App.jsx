import { useEffect, useState } from 'react';
import Form from './components/Form';
import Items from './components/Items';
import { ToDoProvider } from './context/TodoContext';

function App() {
  const [todos, SetTodos] = useState([]);

  const addTodo = (todo) => {
    SetTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updateToDo = (id, updatedTodo) => {
    SetTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? updatedTodo : prevTodo))
    );
  };

  const deleteToDo = (id) => {
    SetTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    SetTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    if (savedTodos && savedTodos.length > 0) {
      SetTodos(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <ToDoProvider
      value={{ todos, addTodo, updateToDo, deleteToDo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your To-Do's
          </h1>
          <div className="mb-4">
            <Form />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className="w-full">
                <Items todo={todo} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  );
}

export default App;
