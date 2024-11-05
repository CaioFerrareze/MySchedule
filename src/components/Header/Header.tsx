import React, { useState } from 'react';
import styled from 'styled-components';
import EventModal from '../EventModal/EventModal'; 
import Icon from '../../assets/iconUser.png'

const Header: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleSaveEvent = (title: string) => {
    console.log('Evento salvo:', title);
  };

  return (
    <HeaderContainer>
      <Logo>MySchedule</Logo>
      <Menu>
        <User>
          <UserImg src={Icon}  />
          <UserName>Chris Evans</UserName>
        </User>
        <MenuIcon onClick={toggleDropdown}>☰</MenuIcon>
        {isDropdownOpen && (
          <DropdownMenu>
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>IoT Assets</DropdownItem>
            <DropdownItem>Logout</DropdownItem>
          </DropdownMenu>
        )}
      </Menu>
      <EventModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveEvent}
      />
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
  margin: 0 3rem;
`;
const User = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`
const UserName = styled.div`
  font-weight: 700;
`
const UserImg = styled.img`
width: 1.7rem;
fill: black;
border: 2.5px solid;
border-radius: 10rem;
`

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Menu = styled.div`
  position: relative;
  display: flex;
  gap: 50px;
  align-items: center;
  justify-content: space-between;
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