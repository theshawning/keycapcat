import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import MenuOpen from './MenuOpen'

const Navbar = styled.nav`
  align-items: center;
  background-color: #0B5F73;
  display: flex;
  height: 3rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const Logo = styled.p`
  color: white;
  font-size: 1.2rem;
  margin-left: .5rem;
`;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function openMenu() {
    setMenuOpen(prev => !prev);
  }

  return (
    <Navbar>
      <Logo>&bull; KeyCapCat &bull;</Logo>
      <BurgerMenu click={openMenu}/>   
      <MenuOpen open={menuOpen} />
    </Navbar>
  )
}
