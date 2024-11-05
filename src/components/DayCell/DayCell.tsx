import React from 'react';
import styled from 'styled-components';

interface DayCellProps {
  date: Date;
  day: string;
  weekday: string;
  isCurrentMonth: boolean;
  events: { date: string; title: string; isDone: boolean }[];
  addEvent: (date: string, title: string) => void;
  markAsDone: (date: string, title: string) => void;
  removeEvent: (date: string, title: string) => void;
}

const DayCell: React.FC<DayCellProps> = ({ date, day, weekday, isCurrentMonth, events, addEvent, markAsDone, removeEvent }) => {
  const todayEvents = events.filter(event => event.date === date.toISOString().split('T')[0]);

  return (
    <Cell isCurrentMonth={isCurrentMonth} onClick={() => addEvent(date.toISOString().split('T')[0], '')}>
      <DayInfo>
        <DayNumber>{day}</DayNumber>
        <Weekday>{weekday}</Weekday>
      </DayInfo>
      {todayEvents.map((event, index) => (
        <Event key={index} style={{ backgroundColor: event.isDone ? 'lightgray' : '#FFF100' }}>
          {event.title}
          <Buttons>
            <DoneButton onClick={(e) => { 
                e.stopPropagation(); 
                markAsDone(event.date, event.title); 
            }}>✔️</DoneButton>
            <RemoveButton onClick={(e) => { 
              e.stopPropagation(); 
              removeEvent(event.date, event.title); 
            }}>❌</RemoveButton>
          </Buttons>
        </Event>
      ))}
    </Cell>
  );
};

export default DayCell;

const Buttons = styled.div`
display: flex;
margin: ;
`

const DoneButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #272727;
  margin-left: 5px;
  padding: 0;
`;
const RemoveButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: #272727;
  padding: 0;
`;
const Cell = styled.div<{ isCurrentMonth: boolean }>`
  background: ${(props) => (props.isCurrentMonth ? 'white' : '#dbdbdb')};
  color: ${(props) => (props.isCurrentMonth ? 'black' : '#2e2e2e')};
  padding: 10px;
  border: 1px solid #ddd;
  cursor: pointer;
  position: relative;
  height: 100px;

  @media (max-width: 768px) {
    height: 80px;
    padding: 5px;
  }

  @media (max-width: 480px) {
    height: 60px;
    padding: 5px;
  }
`;

const DayInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const DayNumber = styled.div`
  font-size: 1.2em;
  color: #4285f4;

  @media (max-width: 480px) {
    font-size: 1em;
  }
`;

const Weekday = styled.div`
  font-size: 0.8em;
  color: #555;

  @media (max-width: 480px) {
    font-size: 0.7em;
  }
`;

const Event = styled.div`
  font-size: 0.8em;
  background-color: #FFF100;
  color: black;
  font-weight: 600;
  padding: 2px 4px;
  border-radius: 4px;
  margin-top: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    font-size: 0.7em;
    padding: 1px 3px;
  }
`;
