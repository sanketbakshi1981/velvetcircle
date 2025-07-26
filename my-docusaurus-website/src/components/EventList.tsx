import React from 'react';

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  image: string;
}

interface EventListProps {
  events: Event[];
}

const EventList: React.FC<EventListProps> = ({ events }) => {
  return (
    <div className="event-grid">
      {events.map(event => (
        <div className="event-card" key={event.id}>
          <img src={event.image} alt={event.title} className="event-image" />
          <div className="event-content">
            <h3>{event.title}</h3>
            <p className="event-date">{event.date}</p>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventList;