import React from 'react'
import Card from '../Card/Card'
import { keyCapData } from '../../keycapinfo'

export default function KeyCapCardContainer() {
  return (
  keyCapData.map((props, index) => {
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
        textShadow={props.colors.textShadow}
        vendor={vendors} 
      />
    )
  }))
}
