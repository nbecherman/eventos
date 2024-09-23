import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Para realizar peticiones a la API
import EventCard from '../components/EventCard';

const EventsList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        // Petición GET a la API local para obtener la lista de eventos
        const response = await axios.get('http://localhost:3000/events');
        setEvents(response.data); // Guardar los eventos en el estado
      } catch (error) {
        console.error('Error al obtener los eventos:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <h2>Eventos Disponibles</h2>
      <div className="event-list">
        {events.length > 0 ? (
          events.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>No hay eventos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default EventsList;
