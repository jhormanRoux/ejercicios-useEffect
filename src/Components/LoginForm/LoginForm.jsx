import React, { useState, useEffect } from "react";

const initialUsers = [
  { id: 1, nombre: "Juan", contraseña: "123456" },
  { id: 2, nombre: "Maraa", contraseña: "qwerty" },
  { id: 3, nombre: "Pedro", contraseña: "abcdef" }
];

const LoginForm = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [userExists, setUserExists] = useState(false); // Estado para verificar si el usuario existe

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
      {/* Mostrar mensaje según si el usuario existe o no */}
      {userExists ? (
        <p>{username}</p>
      ) : (
        <p>Usuario no encontrado</p>
      )}
    </div>
  );
};

export default LoginForm;
