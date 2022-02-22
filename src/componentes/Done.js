import React from "react";

const Done = ({ doneTask }) => {
  return (
    <div className="bg-cyan-800">
      <div className="border-b-2 p-4">
        <h2 className="text-3xl text-white">DONE</h2>
      </div>
      <div className="p-4">
        {/* {doneTask.length > 0 &&
          doneTask.map((task, index) => (
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
                    Fecha
                  </span>
                </div>
              </div>
              <div className="bg-orange-700 text-center py-2 px-5 text-white rounded-b-lg">
                <button type="button">TODO</button>
              </div>
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default Done;
