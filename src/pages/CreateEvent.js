import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    location: ''
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('http://localhost:3100/api/register', formData);
        if (response.data.success) {
        setSuccess('Evento creado con éxito');
        setError('');
      } else {
        setError('Error al crear el evento');
      }
    } catch (err) {
      setError('Error al crear el evento');
    }
  };

  return (
    <div>
      <h2>Crear Evento</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título del Evento</label>
          <input type="text" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Ubicación</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <button type="submit">Crear Evento</button>
      </form>
    </div>
  );
};

export default CreateEvent;
