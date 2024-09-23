import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'; // Para realizar peticiones a la API

const Login = ({ setUser }) => {
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    try {
      // Petición POST a la API local para iniciar sesión
      const response = await axios.post('http://localhost:3100/api/register');
      setUser(response.data); // Guardar el usuario logueado
      alert('Inicio de sesión exitoso');
    } catch (err) {
      setError('Login fallido. Intenta de nuevo.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('email')} type="email" placeholder="Email" required />
        <input {...register('password')} type="password" placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default Login;
