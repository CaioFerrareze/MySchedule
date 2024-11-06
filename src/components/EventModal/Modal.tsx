import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string) => void;
  children?: ReactNode; // Conteúdo específico para cada modal
}

const Modal: React.FC<EventModalProps> = ({ isOpen, onClose, onSave, children }) => {
  if (!isOpen) return null; // Retorna null quando o modal não está aberto

  const handleSave = () => {
    onSave("Evento"); // Aqui você pode substituir "Evento" por um título real, se necessário
    onClose();
  };

  return (
    <Overlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>✖</CloseButton>
        <ModalContent>
          {children}
        </ModalContent>
        <ModalActions>
          <ActionButton onClick={handleSave}>Save</ActionButton>
          <ActionButton onClick={onClose}>Cancel</ActionButton>
        </ModalActions>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  width: 90%;
  max-width: 500px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.2em;
  cursor: pointer;
  &:hover{
    background-color: #006BFF;
    border-radius: 1rem;
  }
`;

const ModalContent = styled.div`
  margin-bottom: 20px;
  font-size: 1em;
  color: #333;
`;

const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const ActionButton = styled.button`
  background-color: #006BFF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background-color: #0056cc;
  }
`;
