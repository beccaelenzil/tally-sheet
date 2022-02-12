import React, { useState } from "react";

const LoginForm = ({ name, setName }) => {
  const enterName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };

  return (
    <form>
      <label>
        Enter your name:
        <input type="text" value={name} onChange={enterName} />
      </label>
    </form>
  );
};

export default LoginForm;
