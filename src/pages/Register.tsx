import React from "react";
import { useForm } from "react-hook-form";
import ReactDOM from "react-dom";
import RegisterForm from "../Components/RegisterForm";

const Register: React.FC = () => {
  return (
    <div>
      {" "}
      <div> Registreeri kasutajaks </div>
      <div>
        <RegisterForm />
      </div>
      <div> </div>
    </div>
  );
};

export default Register;
