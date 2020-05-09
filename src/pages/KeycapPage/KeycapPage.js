import React from 'react'
import { Wrapper, Header, KeyCapCardContainer, Greeting} from '../../components'

export default function KeycapPage() {
  return (
    <>
      <Header />
      <Greeting />
      <Wrapper>
        <KeyCapCardContainer />
      </Wrapper>
    </>
  )
}
