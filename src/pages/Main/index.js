import React from 'react'
import { Container } from 'src/styles/containers.styled'
import data from 'static/tickets.json'

import { Ticket } from 'src/components/Ticket'
import { Filter } from 'src/components/Filter'
import { SidebarContent } from 'src/templates/sidebar-content'

/* eslint-disable react/no-array-index-key */

export const Main = () => (
  <Container>
    <br />
    <br />
    <br />
    <br />
    <SidebarContent
      sidebar={
        <Filter />
      }
    >
      {
        data.tickets.map((ticket, index) => (
          <Ticket key={index} {...ticket} />
        ))
      }
    </SidebarContent>
    {/* <ul>
      {data.tickets.map(ticket => (
        <li key={ticket.price} >
          <Ticket {...ticket} />
        </li>
      ))}
    </ul> */}
  </Container>
)
