import React from 'react'
import KeyCapCard from '../KeyCapCard/KeyCapCard'
import keycaps from '../../keycapinfo'

export default function KeyCapCardContainer(props) {
  {keycaps.map(keycap => {return <KeyCapCard props={props} />})}
}
