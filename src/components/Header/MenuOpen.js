import React from 'react'
import styled from 'styled-components'

const Drawer = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
  position: absolute;
  width: 70%;
  max-width: 25rem;
  top: 3rem;
  right: 0;
  background-color: #0B5F73;
  color: white;
  text-shadow: 1px 2px 5px rgba(0, 0, 0, .8);
  display: ${props => props.open ? 'block' : 'none'};

  & ul {
    width: 100%;
  }

  & li {
    font-weight: 300;
    font-size: 1.4rem;
    text-align: center;
    height: 2rem;
    width: 100%;
    margin: 1.5rem 0;
    padding: 1rem;
    list-style: none;
    background-color: rgba(255, 255, 255, 0.2);
    
    &:hover {
      cursor: pointer;
      font-size: 1.5rem;
      background-color: rgba(255, 255, 255, 0.4);
    }
  }
`;

export default function MenuOpen(props) {
  return (
    <Drawer open={props.open}>
      <ul>
        <li>Home</li>
        <li>Keycaps</li>
        <li>Newsletter</li>
        <li>Contact</li>
      </ul>
    </Drawer>
  )
}
