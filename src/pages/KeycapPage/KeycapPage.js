import React, { useEffect, useState } from 'react'
import { Wrapper, Navbar, KeyCapCardContainer, Greeting} from '../../components'

export default function KeycapPage() {
  return (
    <>
      <Navbar />
      <Greeting />
      <Wrapper>
        <KeyCapCardContainer />
      </Wrapper>
    </>
  )
}
