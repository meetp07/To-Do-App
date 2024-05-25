// import { useEffect, useState } from "react";
// import { TodoProvider } from "./Context";
// import "./App.css";
// import TodoForm from "./components/TodoForm";
// import TodoItem from "./components/TodoItem";

// function App() {
//   const [todos, setTodos] = useState([]);

//   const addTodo = (title) => {
//     setTodos((prev) => [{ id: Date.now(), ...title }, ...prev]);
//   };

//   const updateTodo = (id, title) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) => (prevTodo.id === id ? title : prevTodo))
//     ); // prev will return whole array, prev.map will go for every ele in arr where prevTodo is ele of every arr. If prevTodo (each ele of arr) id is matched then title will change otherwise old title will be remains
//   };

//   const removeTodo = (id) => {
//     setTodos((prev) => prev.filter((todo) => todo.id !== id)); // filter work on true statement, means all val will be take except which todo id is same. Here filter will pass on whole arr and take every ele except which todo id is same
//   };

//   const toggleTodo = (id) => {
//     setTodos((prev) =>
//       prev.map((prevTodo) =>
//         prevTodo.id === id
//           ? { ...prevTodo, completed: !prevTodo.completed }
//           : prevTodo
//       )
//     ); // map will check for whole arr, if id is matched then whole todo will be same and only completed property will be overwritten
//   };

//   // Local Storage Concept

//   useEffect(() => {
//     const todos = JSON.parse(localStorage.getItem("todos"));

//     if (todos && todos.length > 0) {
//       setTodos(todos);
//     }
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   }, [todos]);

//   // Local Storage Completed

//   return (
//     <TodoProvider
//       value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}
//     >
//       <div className="bg-[#172842] min-h-screen py-8">
//         <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//           <h1 className="text-2xl font-bold text-center mb-8 mt-2">
//             Manage Your Todos
//           </h1>
//           <div className="mb-4">
//             {/* Todo form goes here */}
//             <TodoForm />
//           </div>
//           <div className="flex flex-wrap gap-y-3">
//             {/*Loop and Add TodoItem here */}
//             {todos.map((todo) => (
//               <div key={todo.id} className="w-full">
//                 <TodoItem todo={todo} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </TodoProvider>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import { TodoProvider } from "./Context";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
    const [todos, setTodos] = useState([]);
    const [darkMode, setDarkMode] = useState(false);

    const addTodo = (title) => {
        setTodos((prev) => [{ id: Date.now(), ...title }, ...prev]);
    };

    const updateTodo = (id, title) => {
        setTodos((prev) =>
            prev.map((prevTodo) => (prevTodo.id === id ? title : prevTodo))
        );
    };

    const removeTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id));
    };

    const toggleTodo = (id) => {
        setTodos((prev) =>
            prev.map((prevTodo) =>
                prevTodo.id === id
                    ? { ...prevTodo, completed: !prevTodo.completed }
                    : prevTodo
            )
        );
    };

    // Local Storage Concept
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <TodoProvider
            value={{ todos, addTodo, removeTodo, updateTodo, toggleTodo }}
        >
            <div className="min-h-screen py-8 transition-colors duration-500 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">
                        Manage Your Todos
                    </h1>
                    <button
                        className="mb-4 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800"
                        onClick={() => setDarkMode(!darkMode)}
                    >
                        Toggle {darkMode ? "Light" : "Dark"} Mode
                    </button>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map((todo) => (
                            <div key={todo.id} className="w-full">
                                <TodoItem todo={todo} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;