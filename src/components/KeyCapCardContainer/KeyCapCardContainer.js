import React from 'react'
import KeyCapCard from '../KeyCapCard/KeyCapCard'
import { keyCapData } from '../../keycapinfo'

export default function KeyCapCardContainer(props) {
  return (
  keyCapData.map((props) => {
    return (
      <KeyCapCard 
        key={name}
        name={props.name}
        primary={props.colors.primary}
      />
    )
  }))
}
