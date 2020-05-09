import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import keycapset from '../../assets/img/keycap-set-sm.jpg'

const LinkDiv = styled.div`
  background: linear-gradient(to right, rgba(255, 255, 255, .2), rgba(0, 0, 0, 1)), url(${keycapset});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 125px;
  width: 100%;

  &:hover {
    background: linear-gradient(to right, rgba(255, 255, 255, .1), rgba(0, 0, 0, 1)), url(${keycapset});
    background-size: cover;
    background-position: center;

    h4 {
      font-size: 3rem;
    }
  }

  & h4 {
    color: whitesmoke;
    font-size: 2.8rem;
    font-weight: 300;
    letter-spacing: 1.2px;
    margin-left: auto;
    margin-right: 1rem;
    text-shadow: 2px 2px 8px rgba(255, 255, 255, .4);
  }
`;


export default function LinkBar() {
  return (
    <>
    <Link to='/keycaps'>
      <LinkDiv>
        <h4>keycaps &bull;</h4>
      </LinkDiv>    
    </Link>
    </>
  )
}
