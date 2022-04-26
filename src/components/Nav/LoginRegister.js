import React from "react";

const LoginRegister = () => {
  return (
    <div className="hidden md:flex md:items-center md:gap-8 md:ml-auto">
      <a href="#">Login</a>
      <a
        href="#"
        className="border-2 border-medium-grey hover:border-almost-black transition-colors rounded-lg py-1.5 px-3"
      >
        Register
      </a>
    </div>
  );
};

export default LoginRegister;
