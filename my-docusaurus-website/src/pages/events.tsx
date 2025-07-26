import React from 'react';
import EventList from '../components/EventList';

const events = [
  { id: 1, title: 'Event One', date: '2023-10-01', description: 'Description for Event One' },
  { id: 2, title: 'Event Two', date: '2023-10-15', description: 'Description for Event Two' },
  { id: 3, title: 'Event Three', date: '2023-11-01', description: 'Description for Event Three' },
];

const EventsPage = () => {
  return (
    <div>
      <h1>Upcoming Events</h1>
      <EventList events={events} />
    </div>
  );
};

export default EventsPage;