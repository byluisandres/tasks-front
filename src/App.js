import React, { useState } from "react";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Todo from "./componentes/Todo";
import Done from "./componentes/Done";

// Redux
import { Provider } from "react-redux";
import store from "./modules/store";

function App() {
  const [message, setMessage] = useState("");
  const [doneTask, setDoneTask] = useState([]);

  const [tasks, setTasks] = useState({
    id: new Date().getTime(),
    title: "",
    tags: "",
    description: "",
    done: false,
  });
  const { title, tags, description } = tasks;

  // Array con las tareas
  const [todoTasks, setTodoTasks] = useState([]);

  // Guarda en el state de tasks
  const handleChange = (e) => {
    setTasks({
      ...tasks,
      [e.target.name]: e.target.value,
    });
  };

  // Enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();

    // Válidar formulario
    if (
      title.trim() === "" ||
      tags.trim() === "" ||
      description.trim() === ""
    ) {
      setMessage("Todos los campos son obligatorios");
    } else {
      // Guardar las tareas en un array
      setTodoTasks([...todoTasks, tasks]);
      // Resetear el mensaje
      setMessage("");

      // Resetear formulario
      setTasks({
        id: new Date().getTime(),
        title: "",
        tags: "",
        description: "",
        done: false,
      });
    }
  };

  return (
    <Provider store={store}>
      <div className="bg-gray-300 ">
        <Header />
        <div className="bg-cyan-800 my-10  w-10/12 container mx-auto">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="border-b-2 p-4">
              <h2 className="text-3xl text-white">Create</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap-10 gap-0 p-4">
              <div>
                <div className="mb-3">
                  <label htmlFor="title" className="text-white text-xl">
                    Título
                  </label>
                  <input
                    id="title"
                    name="title"
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    value={title}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="tags" className="text-white text-xl">
                    Tags
                  </label>
                  <input
                    id="tags"
                    name="tags"
                    className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    value={tags}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="description" className="text-white text-xl">
                  Descripción
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows="4"
                  className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  value={description}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>

            {message && (
              <div className="p-4">
                <div className="bg-red-50 text-red-900 p-2 text-xl font-semibold border-l-8 border-l-red-900">
                  {message}
                </div>
              </div>
            )}
            <div className="flex justify-end items-center p-4">
              <button
                className="bg-emerald-400 text-center py-1 px-5 text-white rounded-sm w-64"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 w-10/12   container mx-auto ">
          {/* TODO */}
          <Todo
            todoTasks={todoTasks}
            setTodoTasks={setTodoTasks}
            setDoneTask={setDoneTask}
            doneTask={doneTask}
          />

          {/* DONE */}
          <Done doneTask={doneTask} />
        </div>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
