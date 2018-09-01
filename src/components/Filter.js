import React from 'react'
import styled from 'styled-components'


const Headline = styled.h3`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  font-size: 12px;
`

const Section = styled.div`
  display: flex;
  flex-direction: column;

  & ${Headline} {
    margin-bottom: 8px;
  }
`

const Wrapper = styled.div`
  padding: 17px 15px;

  ${Section} + ${Section} {
    margin-top: 30px;
  }
`

export const Filter = () => (
  <Wrapper>
    <Section>
      <Headline>Валюта</Headline>
      <div>TBD</div>
    </Section>
    <Section>
      <Headline>Количество пересадок</Headline>
      <div>TBD</div>
    </Section>
  </Wrapper>
)
