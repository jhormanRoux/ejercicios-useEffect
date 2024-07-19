import React, { useState, useEffect } from "react";

const initialUsers = [
  { id: 1, nombre: "Juan", contraseña: "123456" },
  { id: 2, nombre: "Maraa", contraseña: "qwerty" },
  { id: 3, nombre: "Pedro", contraseña: "abcdef" }
];

const LoginForm = () => {
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [userExists, setUserExists] = useState(false); 

  useEffect(() => {

    const foundUser = initialUsers.find(user => user.nombre === username && user.contraseña === password);
    setUserExists(!!foundUser); 
  }, [username, password]);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value); 
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h2>Formulario de Inicio de Sesión</h2>
      <form>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </form>
     
      {userExists ? (
        <p>{username}</p>
      ) : (
        <p>Usuario no encontrado</p>
      )}
    </div>
  );
};

export default LoginForm;
