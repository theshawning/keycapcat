import React from 'react'
import Card from '../Card/Card'
import { keyboardData } from '../../keyboardinfo'

export default function KeyCapCardContainer() {
  return (
  keyboardData.map((props, index) => {
    return (
      <Card 
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
