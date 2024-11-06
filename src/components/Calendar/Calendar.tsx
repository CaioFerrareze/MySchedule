import React, { useState } from 'react';
import styled from 'styled-components';
import { startOfMonth, endOfMonth, addDays, format, getDay, subMonths, addMonths } from 'date-fns';
import DayCell from '../DayCell/DayCell';
import EventModal from '../EventModal/EventModal';

interface CalendarProps {
  events: { date: string; title: string; isDone: boolean }[];
  addEvent: (date: string, title: string) => void;
  removeEvent: (date: string, title: string) => void; 
  markAsDone: (date: string, title: string, isDone: boolean) => void;
}


const Calendar: React.FC<CalendarProps> = ({ events, addEvent, markAsDone, removeEvent}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const handlePrevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  const openModal = (date: string) => {
    setSelectedDate(date);
    setIsModalOpen(true);
  };

  const handleSaveEvent = (title: string) => {
    if (selectedDate) {
      addEvent(selectedDate, title); // Inclua isDone: false para cada evento novo
      events.push({ date: selectedDate, title, isDone: false });
    }
  };
  

  const startOfMonthDate = startOfMonth(currentDate);
  const endOfMonthDate = endOfMonth(currentDate);
  const startCalendarDate = addDays(startOfMonthDate, -getDay(startOfMonthDate));
  const daysInCalendar = Array.from({ length: 42 }, (_, i) => addDays(startCalendarDate, i));

  return (
    <Container>
      <Header>
        <ButtonNP onClick={handlePrevMonth}>{"<"}</ButtonNP>
        <MonthYearDisplay>{format(currentDate, 'MMMM yyyy')}</MonthYearDisplay>
        <ButtonNP onClick={handleNextMonth}>{">"}</ButtonNP>
      </Header>
      <CalendarWrapper>
        <DaysGrid>
          {daysInCalendar.map((date) => (
            <DayCell
              key={date.toISOString()}
              date={date}
              day={format(date, 'd')}
              weekday={format(date, 'EEE')}
              isCurrentMonth={date >= startOfMonthDate && date <= endOfMonthDate}
              events={events}
              addEvent={openModal} 
              removeEvent={removeEvent}
              markAsDone={markAsDone}
            />
          ))}
        </DaysGrid>
      </CalendarWrapper>
      <EventModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveEvent} 
      />
    </Container>
  );
};

export default Calendar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color:  white;
  padding: .5rem 2rem;
  margin: .5rem 0;
  width: 22rem;
  border-radius: 1rem;
`;

const MonthYearDisplay = styled.h2`
  margin: 0;
  cursor: context-menu;
`;

const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px;
`;

const DaysGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr); // Alterna para 4 colunas em telas menores
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); // Alterna para 2 colunas em telas muito pequenas
  }
`;

const ButtonNP = styled.button`
border: none;
font-size: 2rem;
background-color: transparent;
cursor: pointer;
&:hover{
  color: #006BFF;
}
`
