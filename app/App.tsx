import React, { useState } from 'react';
import Calendar from '../src/components/Calendar/Calendar';
import { GlobalStyle} from '../src/styles/GlobalStyles';
import Header from '../src/components/Header/Header';

const App: React.FC = () => {
  const [events, setEvents] = useState<{ date: string; title: string; isDone: boolean }[]>([]);


  const addEvent = (date: string, title: string) => {
    setEvents([...events, { date, title, isDone: false }]);
  };

  const removeEvent = (date: string, title: string) => {
    setEvents(events.filter(event => !(event.date === date && event.title === title)));
  };

  const markAsDone = (date: string, title: string) => {
    setEvents(events.map(event => 
      event.date === date && event.title === title ? { ...event, isDone: true } : event
    ));
  };

  return (
    <>
      <GlobalStyle />
      <Header/>
      <Calendar events={events} addEvent={addEvent} removeEvent={removeEvent} markAsDone={markAsDone}/> 
    </>
  );
};

export default App;
