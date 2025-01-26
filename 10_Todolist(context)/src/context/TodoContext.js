import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    todos:[
        {
            id:1,
            todo: "ToDo Msg",
            complete: false,
        }
    ],
    addTodo: () => {},
    updateToDo: (id,todo) => {},
    deleteToDo: (id) =>{},
    toggleComplete: (id)=>{}
})

export const UseToDo = ()=>{
    return useContext(ToDoContext)
}

export const ToDoProvider = ToDoContext.Provider