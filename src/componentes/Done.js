import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startChangeTodoAction } from "../modules/actions/TasksAction";

const Done = () => {
  // obtener el state
  const tasksdone = useSelector((state) => state.tasks.tasksdone);
  const dispatch = useDispatch();
  const handleClick = (task) => {
    dispatch(startChangeTodoAction(task));
  };
  return (
    <div className="bg-cyan-800">
      <div className="border-b-2 p-4">
        <h2 className="text-3xl text-white">DONE</h2>
      </div>
      <div className="p-4">
        {tasksdone.length > 0 &&
          tasksdone.map((task, index) => (
            <div key={index} className="bg-white rounded-lg mb-5">
              <div className="border-b-2 p-4">
                <h2 className="text-xl ">{task.title}</h2>
              </div>
              <div className="p-4">
                <div>
                  {task.tags.split(",").map((tag, index) => (
                    <span
                      key={index}
                      className="bg-red-400 mr-2 p-1 rounded-xl"
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
                    {task.date.toDateString()}
                  </span>
                </div>
              </div>
              <div className="bg-orange-700 text-center py-2 px-5 text-white rounded-b-lg">
                <button onClick={() => handleClick(task)} type="button">
                  DONE
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Done;
