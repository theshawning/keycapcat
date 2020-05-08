import React from 'react'
import styled from 'styled-components'
import SellerButton from './SellerButton'

const CardFooterExpansion = styled.div`
  background-color: ${props => props.backgroundColor};
  border-top: 1px solid white;
  height: max-content;
  padding: 1rem;
`;

const SellerButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 1rem;
`;

const VendorRow = styled.div`
  background-color: rgba(255, 255, 255, .5);
  margin: .25rem 0;
  padding: 1rem 0;
  text-align: center;

  & a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

const DesignerRow = styled.div`
  background-color: rgba(255, 255, 255, .5);
  margin: .25rem 0;
  text-align: center;
`;

const Designer = styled.div`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  
  & button {
    background-color: rgba(255, 255, 255, .9);
    border: none;
    border-radius: 3px;
    border: 1px solid transparent;
    color: rgba(0, 0, 0, .8);
    font-weight: 400;
    font-size: .85rem;
    margin: .5rem .5rem;
    padding: .5rem 1rem;
    text-transform: uppercase;
    transition: all .15s ease-in-out;
    cursor: pointer;
  
    &:hover {
      background-color: rgba(0, 0, 0, .5);
      border: 1px solid whitesmoke;
      color: whitesmoke;
    }

    &:hover a {
      color: whitesmoke;
    }

    & a {
      color: rgba(0, 0, 0, .8);
    }
  }
`;

export default function KeyCapCardExpansion(props) {
  return (
    <CardFooterExpansion backgroundColor={props.backgroundColor}>
      <DesignerRow>
        <Designer>
          <p>Designed by: 
            <button>
              <a href="https://www.zambumon.com">{props.designer}</a>
            </button>  
          </p>
        </Designer>
      </DesignerRow>
      {props.vendor.map((region, index) => {
        return <VendorRow key={index}><a href="#">{region}</a></VendorRow>
      })
      }
    </CardFooterExpansion>
  )
}

// saving this for later if needed
// const CoreImgContainer = styled.div`
//   background-image: url(${props => props.img});
//   background-position: center;
//   background-size: contain;
//   background-repeat: no-repeat;
//   height: 300px;
//   margin-bottom: 1rem;
//   width: auto;
//   @media (max-width: 750px) {
//     height: 12rem;
//   }  
//   @media (max-width: 600px) {
//     height: 10rem;
//   }
//   @media (max-width: 400px) {
//     height: 8rem;
//   }
// `;