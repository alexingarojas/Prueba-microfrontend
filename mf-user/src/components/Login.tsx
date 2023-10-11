import React from "react";
import "./Login.css"

const Login = (): JSX.Element => {
  return (
    <div className="container-login">
      <h1>Iniciar Sesión</h1>
      <form  method="POST">
        <div className="form-group">
          <label>Usuario:</label>
          <input type="text" id="username" name="username" required></input>
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input type="password" id="password" name="password" required></input>
        </div>
        <div className="form-group">
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
