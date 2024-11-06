import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from '../../assets/iconUser.png';
import Modal from '../EventModal/Modal';

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false);
  const [isIotAssetsModalOpen, setIsIotAssetsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openSettingsModal = () => {
    setIsSettingsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const openIotAssetsModal = () => {
    setIsIotAssetsModalOpen(true);
    setIsDropdownOpen(false);
  };

  const handleSaveEvent = (title: string) => {
    console.log('Evento salvo:', title);
  };

  return (
    <HeaderContainer>
      <Logo>MySchedule</Logo>
      <Menu>
        <User>
          <UserImg src={Icon} />
          <UserName>Chris Evans</UserName>
        </User>
        <MenuIcon onClick={toggleDropdown}>☰</MenuIcon>
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem onClick={openSettingsModal}>Settings</DropdownItem>
            <DropdownItem onClick={openIotAssetsModal}>IoT Assets</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        )}
      </Menu>

      {/* Modal para Settings */}
      <Modal
        isOpen={isSettingsModalOpen}
        onClose={() => setIsSettingsModalOpen(false)}
        onSave={handleSaveEvent}
      >
        <ModalContent>  
          <h3>User Preferences</h3>
          <hr />
          <ul>
            <li><b>Name:</b> Chris Evans</li>
            <li><b>Email:</b> someRandom@email.com</li>
            <li><b>Phone:</b> (19)99811-3141 </li>
            <li><b>Address:</b> R: Random Place Nº 150</li>
          </ul>
          
        </ModalContent>
      </Modal>

      {/* Modal para IoT Assets */}
      <Modal
        isOpen={isIotAssetsModalOpen}
        onClose={() => setIsIotAssetsModalOpen(false)}
        onSave={handleSaveEvent}
      >
        <ModalContent>
          <h3>IoT Settings</h3>
          <hr />
          <ul>
            <li><b>Asset 1:</b> Iphone 15 pro max</li>
            <li><b>Asset 2:</b> Audi A5 - CarPlay</li>
            <li><b>Asset 3:</b> Apple Watch</li>
          </ul>
        </ModalContent>
      </Modal>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
  color: #272727;
  margin: 0 15rem;
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const UserName = styled.div`
  font-weight: 700;
`;

const UserImg = styled.img`
  width: 1.7rem;
  fill: black;
  border: 2.5px solid;
  border-radius: 10rem;
`;

const Logo = styled.div`
  font-size: 2em;
  font-weight: bold;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  border-radius: 1rem;
  padding: 10px;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  &:hover {
    color: #08C2FF;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  color: black;
  border-radius: 4px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  width: 150px;
  z-index: 1000;
`;

const DropdownItem = styled.div`
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #006BFF;
    color: white;
  }
`;

const ModalContent = styled.div`
  padding: 20px;
  font-size: 1em;
  color: #333;
`;
