import React, { useState } from "react";
import { Loginapp } from "../components/Loginapp";
import { Registerapp } from "../components/Registerapp";

const Login: React.FC = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName: React.SetStateAction<string>) => {
    setCurrentForm(formName);
  };

  return (
    <div>
      {currentForm === "login" ? (
        <Loginapp onFormSwitch={toggleForm} />
      ) : (
        <Registerapp onFormSwitch={toggleForm} />
      )}
    </div>
  );
};

export default Login;
