import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <h3>{event.title}</h3>
      <p>{event.description}</p>
      <p><strong>Fecha:</strong> {new Date(event.date).toLocaleDateString()}</p>
    </div>
  );
};

export default EventCard;
