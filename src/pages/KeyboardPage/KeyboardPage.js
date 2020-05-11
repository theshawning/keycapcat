import React from 'react'
import { Wrapper, Navbar, KeyboardCardContainer, Greeting} from '../../components'

export default function KeyboardPage() {
  return (
    <>
      <Navbar />
      <Greeting />
      <Wrapper>
        <KeyboardCardContainer />
      </Wrapper>
    </>
  )
}
