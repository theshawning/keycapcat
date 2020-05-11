import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Drawer = styled.div`
  background-color: #0B5F73;
  border-bottom: 2px solid rgba(255, 255, 255, .4);
  border-left: 2px solid rgba(255, 255, 255, .4);
  color: white;
  display: flex;
  display: ${props => props.open ? 'block' : 'none'};
  flex-direction: column;
  height: max-content;
  max-width: 25rem;
  position: absolute;
  right: 0;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, .8);
  top: 3rem;
  width: 70%;

  & ul {
    width: 100%;
  }

  & li {
    background-color: rgba(255, 255, 255, 0.2);
    font-weight: 300;
    font-size: 1.4rem;
    height: 2rem;
    list-style: none;
    margin: 1.5rem 0;
    padding: 1rem;
    text-align: center;
    transition: all .1s ease-in-out;
    width: 100%;
    
    &:hover {
      cursor: pointer;
      background-color: rgba(255, 255, 255, 0.4);
      font-size: 1.5rem;
    }
  }
`;

const linkStyle = {
  color: 'white'
}

export default function MenuOpen(props) {
  return (
    <Drawer open={props.open}>
      <ul>
        <Link style={linkStyle} to='/'><li>Home</li></Link>
        <Link style={linkStyle} to='/keycaps'><li>Keycaps</li></Link>
        <Link style={linkStyle} to='/keyboards'><li>Keyboards</li></Link>
        <li>Contact</li>
      </ul>
    </Drawer>
  )
}
