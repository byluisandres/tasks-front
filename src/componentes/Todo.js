import React from "react";

const Todo = ({ todoTasks, setTodoTasks, setDoneTask, doneTask }) => {
  // const handleClick = (id) => {
  //   console.log(id);
  //   const index = todoTasks.findIndex((t) => t.id === id);

  //   setDoneTask([...doneTask, todoTasks[index]]);

  //   // eliminar
  //   setTodoTasks([todoTasks.filter((item) => item.id !== id)]);
  //   console.log("done", doneTask);
  // };
  return (
    <div className="bg-cyan-800">
      <div className="border-b-2 p-4">
        <h2 className="text-3xl text-white">TO-DO</h2>
      </div>
      {/*<div className="p-4">
        {todoTasks.length > 0 &&
          todoTasks.map((task, index) => (
            <div key={index} className="bg-white rounded-lg mb-5">
              <div className="border-b-2 p-4">
                <h2 className="text-xl ">{task.title}</h2>
              </div>
              <div className="p-4">
                <div>
                  {task.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="bg-red-400 mr-2 py-1 px-3 rounded-xl font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <p> {task.description}</p>
                </div>
                <div className=" flex justify-end items-center">
                  <span className="bg-zinc-500 rounded-lg p-1  text-white">
                    Fecha
                  </span>
                </div>
              </div>
              <div className="bg-emerald-400 text-center py-2 px-5 text-white rounded-b-lg">
                <button onClick={() => handleClick(task.id)} type="button">
                  DONE
                </button>
              </div>
            </div>
          ))}
      </div> */}
    </div>
  );
};

export default Todo;
