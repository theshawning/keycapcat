import React, { useState } from 'react'
import styled from 'styled-components'
import BurgerMenu from './BurgerMenu'
import MenuOpen from './MenuOpen'

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0;
  height: 3rem;
  width: 100%;
  background-color: #0B5F73;
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
