import React from "react";

const Todo = ({ todoTasks, setTodoTasks, setDoneTask, doneTask }) => {
  const handleClick = (id) => {
    console.log(id);
    const index = todoTasks.findIndex((t) => t.id === id);

    setDoneTask([...doneTask, todoTasks[index]]);

    // eliminar
    setTodoTasks([todoTasks.filter((item) => item.id !== id)]);
    console.log("done", doneTask);
  };
  return (
    <div>
      <h2>TO-DO</h2>
      {todoTasks.length > 0 &&
        todoTasks.map((task, index) => (
          <div key={index}>
            <h2>{task.title}</h2>
            <div>
              <span>{task.tags}</span>
            </div>
            <div>
              <p> {task.description}</p>
            </div>
            <div>Fecha</div>
            <button onClick={() => handleClick(task.id)}>DONE</button>
          </div>
        ))}
    </div>
  );
};

export default Todo;
