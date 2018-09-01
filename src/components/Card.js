import styled from 'styled-components'


export const Card = styled.div`
  background: #FFFFFF;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
`

export const CardHover = styled(Card)`
  transition: box-shadow .3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`

