import React from 'react'
import Card from '../Card/Card'
import { keyboardData } from '../../keyboardinfo'

export default function KeyCapCardContainer() {
  return (
  keyboardData.map((props, index) => {
    const { type, name, designer, startDate, endDate, vendors } = props;

    return (
      <Card 
        key={index}
        type={type}
        name={name}
        designer={designer}
        startDate={startDate}
        endDate={endDate}
        cardHeaderBg={props.colors.headerBg}
        headerTextColor={props.colors.headerTextColor}
        cardFooterBg={props.colors.footerBg}
        footerTextColor={props.colors.footerTextColor}
        dark={props.colors.dark}
        vendor={vendors}
      />
    )
  }))
}
