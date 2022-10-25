import React, { useState } from "react";

export const Loginapp = (props: { onFormSwitch: (arg0: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="******"
          id="password"
          name="password"
        />
        <button type="submit">Logi sisse</button>
      </form>
      <button onClick={() => props.onFormSwitch("register")}>
        Ei ole kasutajat? Registreeru siin.
      </button>
    </>
  );
};
