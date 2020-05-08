import React from 'react'
import KeyCapCard from '../KeyCapCard/KeyCapCard'
import { keyCapData } from '../../keycapinfo'

export default function KeyCapCardContainer() {
  return (
  keyCapData.map((props, index) => {
    return (
      <KeyCapCard 
        key={index}
        name={props.name}
        designer={props.designer}
        startDate={props.startDate}
        endDate={props.endDate}
        textColor={props.colors.accent}
        cardHeaderBg={props.colors.primary}
        cardFooterBg={props.colors.secondary}
        vendor={props.vendors}
      />
    )
  }))
}
