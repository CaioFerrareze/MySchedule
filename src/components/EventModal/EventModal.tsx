import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
}

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, onSave }) => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (isOpen) {
      setTitle(''); 
    }
  }, [isOpen]);

  const handleSave = () => {
    if (title.trim()) { 
      onSave(title);
      onClose();
    } else {
      alert("O título do evento não pode estar vazio!"); 
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h3>Add New Event</h3>
        <Input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          placeholder="Event Name" 
        />
        <ButtonContainer>
          <Button onClick={onClose} secondary>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </ButtonContainer>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EventModal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  width: 100%;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 15px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #4285f4;
    box-shadow: 0 0 5px rgba(66, 133, 244, 0.5);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button<{ secondary?: boolean }>`
  background-color: ${(props) => (props.secondary ? '#f44336' : '#4285f4')};
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.secondary ? '#d32f2f' : '#357ae8')};
  }
`;
