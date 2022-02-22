import React, { useState } from "react";
import Footer from "./componentes/Footer";
import Header from "./componentes/Header";
import Todo from "./componentes/Todo";
import Done from "./componentes/Done";

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
    <div>
      <Header />
      <div className="">
        <form method="POST" onSubmit={handleSubmit}>
          <h2>Create</h2>
          <div>
            <label htmlFor="title">Título</label>
            <input
              id="title"
              name="title"
              className=""
              value={title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="tags">Tags</label>
            <input
              id="tags"
              name="tags"
              className=""
              value={tags}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="description">Descripción</label>
            <textarea
              id="description"
              name="description"
              className=""
              value={description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div>{message}</div>
          <div>
            <button>Enviar</button>
          </div>
        </form>
      </div>

      {/* TODO */}
      <Todo
        todoTasks={todoTasks}
        setTodoTasks={setTodoTasks}
        setDoneTask={setDoneTask}
        doneTask={doneTask}
      />

      {/* DONE */}
      <Done doneTask={doneTask} />

      <Footer />
    </div>
  );
}

export default App;
