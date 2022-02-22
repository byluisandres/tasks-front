import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { createNewTaskAction } from "../../modules/actions/TasksAction";
import { useNavigate } from "react-router-dom";

const Create = () => {
  let navigation = useNavigate();

  // Redux
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.tasks.loading);

  const [message, setMessage] = useState("");

  const [task, setTask] = useState({
    title: "",
    tags: "",
    description: "",
    date: new Date(),
    done: false,
  });
  const { title, tags, description } = task;

  // llama al action
  const addTask = (task) => dispatch(createNewTaskAction(task));

  // Guarda en el state de tasks
  const handleChange = (e) => {
    setTask({
      ...task,
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
      // añadir un id unico
      task.id = new Date().getTime();
      // Enviar la tarea par guardar en el state
      addTask(task);

      // Resetear el mensaje
      setMessage("");

      // // Resetear formulario
      setTask({
        title: "",
        tags: "",
        description: "",
        date: "",
        done: false,
      });
      if (!loading) {
        navigation("/", { replace: true });
      }
    }
  };
  return (
    <>
      <div className="w-10/12  my-5 container mx-auto">
        <Link to="/" className="underline text-xl">
          Volver
        </Link>
      </div>
      <div className="bg-cyan-800 my-5  w-10/12 container mx-auto">
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
        {loading ? <span>Guardando</span> : null}
      </div>
    </>
  );
};

export default Create;
