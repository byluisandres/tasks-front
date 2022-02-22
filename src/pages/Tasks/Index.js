import React from "react";
import Todo from "../../componentes/Todo";
import Done from "../../componentes/Done";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="my-5 flex justify-end items-center w-10/12   container mx-auto">
        <Link to="/create" className="bg-green-900 text-white p-2 rounded">
          Añadir tarea
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2  gap-10 w-10/12   container mx-auto ">
        {/* {TODO} */}
        <Todo />
        {/* DONE */}
        <Done />
      </div>
    </>
  );
};

export default Index;