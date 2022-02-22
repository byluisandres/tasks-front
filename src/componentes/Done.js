import React from "react";

const Done = ({ doneTask }) => {
  return (
    <div>
      <h2>DONE</h2>
      {doneTask.length > 0 &&
        doneTask.map((done, index) => (
          <div key={index}>
            <h2>{done.title}</h2>
            <div>
              <span>{done.tags}</span>
            </div>
            <div>
              <p> {done.description} </p>
            </div>
            <div>Fecha</div>
            <div>DONE</div>
          </div>
        ))}
    </div>
  );
};

export default Done;
