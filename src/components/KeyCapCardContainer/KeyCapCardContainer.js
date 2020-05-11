import React from 'react'
import Card from '../Card/Card'
import { keyCapData } from '../../keycapinfo'

export default function KeyCapCardContainer() {
  return (
  keyCapData.map((props, index) => {
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
