import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const LinkDiv = styled.div`
  background: linear-gradient(to right, rgba(255, 255, 255, .2), rgba(0, 0, 0, 5)), url(${props => props.img});
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  height: 125px;
  margin-bottom: 2rem;
  width: 100%;

  &:hover {
    background: linear-gradient(to right, rgba(255, 255, 255, .1), rgba(0, 0, 0, 1)), url(${props => props.img});
    background-size: cover;
    background-position: center;

    h4 {
      font-size: 3rem;
      transition: all .05s ease-in-out;
    }
  }

  & h4 {
    background: linear-gradient(to left, );
    color: whitesmoke;
    font-size: 2.8rem;
    font-weight: 400;
    letter-spacing: 1.2px;
    margin-left: auto;
    margin-right: 1rem;
    text-shadow: 2px 2px 8px rgba(0, 0, 0, .9);
  }
`;


export default function LinkBar(props) {
  return (
    <>
    <Link to={props.link}>
      <LinkDiv img={props.backgroundImg}>
        <h4>{props.linkInfo} &bull;</h4>
      </LinkDiv>    
    </Link>
    </>
  )
}
