import React from "react";

const Header = () => {
  return (
    <div className="bg-violet-300 py-3">
      <div className="flex justify-between items-center w-10/12  container mx-auto">
        <h1 className="text-4xl font-bold">ToDOApp </h1>
        <p className="text-white text-xl font-medium">Aplicación para la gestión de proyectos</p>
      </div>
    </div>
  );
};

export default Header;
