import React from 'react'
import styled from 'styled-components'
import SellerButton from './SellerButton'

const CardFooterExpansion = styled.div`
  background-color: ${props => props.backgroundColor};
  border-top: 1px solid white;
  height: max-content;
  padding: 1rem;
`;

const VendorRow = styled.div`
  background-color: rgba(255, 255, 255, .3);
  color: white;
  font-size: 1.2rem;
  margin: .25rem 0;
  padding: 1rem 0;
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, .5);
    text-shadow: 2px 2px 5px rgba(0, 0, 0, .8);
    cursor: pointer;    
  }

  & a {
    color: white;
    font-size: 1.2rem;
    text-decoration: none;
  }
`;

export default function KeyCapCardExpansion(props) {
  return (
    <CardFooterExpansion backgroundColor={props.backgroundColor}>
      <VendorRow>
        <a href="#">
          <p>Designed by: {props.designer} 
          </p>
        </a>
      </VendorRow>
      {props.vendor.map((region, index) => {
        return (
          <a key={index} href={region[2]} target='_blank' rel='noopeneer noreferrer'>
            <VendorRow>
              <span>{region[0]} &bull; {region[1]}</span>
            </VendorRow>
          </a>
        )
      })
      }
    </CardFooterExpansion>
  )
}