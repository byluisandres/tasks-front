import React from "react";

const Footer = () => {
  return (
    <div className="bg-zinc-500 p-5 mt-10">
      <div className="w-10/12  container mx-auto">
        <p className="text-center text-white">
          Todos los derechos reservados &copy;{" "}
          <span> {new Date().getFullYear()} </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
