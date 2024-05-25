// import React, { useState } from "react";
// import { useTodo } from "../Context";

// function TodoForm() {
//     const [todo,setTodo] = useState('')
//     const {addTodo} = useTodo()

//     const add = (e) => {
//         e.preventDefault()

//         if (!todo) return

//         addTodo({title: todo, completed: false})
//         setTodo("")
//     }

//   return (
//     <form onSubmit={add} className="flex">
//       <input
//         type="text"
//         placeholder="Write Todo..."
//         className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//       />
//       <button
//         type="submit"
//         className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
//       >
//         Add
//       </button>
//     </form>
//   );
// }

// export default TodoForm;


import React, { useState } from "react";
import { useTodo } from "../Context";

function TodoForm() {
    const [todo,setTodo] = useState('')
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if (!todo) return

        addTodo({title: todo, completed: false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-gray-300 dark:border-gray-700 rounded-l-lg px-3 outline-none duration-150 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 py-1.5"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button
                type="submit"
                className="rounded-r-lg px-3 py-1 bg-green-600 text-white hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800"
            >
                Add
            </button>
        </form>
    );
}

export default TodoForm;