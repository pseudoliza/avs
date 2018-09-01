import React from 'react'
import styled from 'styled-components'

import { Card } from 'src/components/Card'


const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: flex-start;
`

const Sidebar = styled(Card)`
  width: 230px;
  margin-right: 20px;
  flex-shrink: 0;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export const SidebarContent = ({ sidebar, children }) => (
  <Wrapper>
    <Sidebar>{sidebar}</Sidebar>
    <Content>{children}</Content>
  </Wrapper>
)
