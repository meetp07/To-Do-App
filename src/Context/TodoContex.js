import {createContext, useContext} from 'react';

export const TodoContext = createContext({
     todos: [
        {
            id: 1,
            title: 'Learn React',
            completed: false,
        }
     ],
     addTodo: (title) => {}, // Method is define in the main file or in other file, In this file only function is passed
     removeTodo: (id) => {},
     updateTodo: (id, title) => {},
     toggleTodo: (id) => {},
});


export const useTodo = () => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider;