import React from 'react'
import KeyCapCard from '../KeyCapCard/KeyCapCard'
import { keyCapData } from '../../keycapinfo'

export default function KeyCapCardContainer(props) {
  return (
  keyCapData.map((props, index) => {
    return (
      <KeyCapCard 
        key={index}
        name={props.name}
        textColor={props.colors.accent}
        cardHeaderBg={props.colors.primary}
        cardFooterBg={props.colors.secondary}
      />
    )
  }))
}
