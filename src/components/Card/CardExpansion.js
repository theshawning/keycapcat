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
  color: ${props => props.textcolor};
  font-size: 1.2rem;
  margin: .25rem 0;
  padding: 1rem 0;
  text-align: center;
  text-shadow: 2px 2px 3px ${props => props.textshadow};

  &:hover {
    background-color: rgba(255, 255, 255, .5);
    /* text-shadow: 2px 2px 5px rgba(255,255,255, .9); */
    cursor: pointer;    
  }

  & a {
    color: ${props => props.textcolor};
    font-size: 1.2rem;
    text-decoration: none;
    text-shadow: 2px 2px 3px ${props => props.textshadow};
  }
`;

export default function KeyCapCardExpansion(props) {
  const { textcolor, designer, backgroundColor, type, textshadow} = props;

  if (type === 'keyboard') return (
    <CardFooterExpansion backgroundColor={backgroundColor} textshadow={textshadow}>
      {props.vendor.map((region, index) => {
        return (
          <a key={index} href={region[2]} textcolor={textcolor} textshadow={textshadow} target='_blank' rel='noopeneer noreferrer'>
            <VendorRow textcolor={textcolor}>
              <span>{region[0]} &bull; {region[1]}</span>
            </VendorRow>
          </a>
        )})
      }
    </CardFooterExpansion>
  )

  return (
    <CardFooterExpansion backgroundColor={backgroundColor}>
      <VendorRow textcolor={textcolor} textshadow={textshadow}>
        <a href="#" textcolor={textcolor}>
          <p>Designed by: {designer}</p>
        </a>
      </VendorRow>
      {props.vendor.map((region, index) => {
        return (
          <a key={index} href={region[2]} textcolor={textcolor} textshadow={textshadow} target='_blank' rel='noopeneer noreferrer'>
            <VendorRow textcolor={textcolor} textshadow={textshadow}>
              <span>{region[0]} &bull; {region[1]}</span>
            </VendorRow>
          </a>
        )})
      }
    </CardFooterExpansion>
  )
}