import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";


function RegisterForm() {
  const { register, handleSubmit, watch, formState: { errors }
  } = useForm({
    defaultValues: {
      example: "",
      exampleRequired: ""
    }
  });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        alert(JSON.stringify(data));
      })}
    >
      <label>Eesnimi</label>
      <input {...register("example")} defaultValue="test" />
      <label>Perekonnanimi</label>
      <input {...register("example")} defaultValue="test" />
      <label>Parool</label>
      <input
        {...register("exampleRequired", { required: true, maxLength: 10 })}/>
    <label>E-mail</label>
      <input {...register("example")} defaultValue="test" />
      {errors.exampleRequired && <p>See väli ei saa olla tühi!</p>}
      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<RegisterForm />, rootElement);

export default RegisterForm;