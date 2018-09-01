import React from 'react'
import styled, { css } from 'styled-components'
import moment from 'moment'
import planeSvg from 'src/images/plane.svg'
import { CardHover } from './Card'


function declOfNum(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2]
  return titles[(number % 100 > 4 && number % 100 < 20)
    ? 2
    : cases[(number % 10 < 5) ? number % 10 : 5]]
}

const declStops = count => declOfNum(count, ['пересадка', 'пересадки', 'пересадок'])


const Wrapper = styled(CardHover)`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;

  & + & {
    margin-top: 20px;
  }
`

const Part = styled.div`
  display: flex;
  padding: 25px 20px;
`

const Left = styled(Part)`
  flex-direction: column;
  width: 200px;
`

const Right = styled(Part)`
  border-left: 1px solid #ECEFF1;
  flex-grow: 1;
  flex-direction: column;
`

const Button = styled.button`
  display: flex;
  flex-direction: column;
  background: #FF6D00;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 1px 0px #D64D08;
  border-radius: 5px;
  padding: 6px 0;
  align-items: center;
  justify-content: center;
  font-family: "Open Sans";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  color: white;
  border: none;

  transition: all .26s ease-in-out;

  &:focus {
    outline: none;
  }

  &:hover {
    background: #FF8124;
    box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25), 0px 1px 0px #F7661D;
  }
`

const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;

  ${({ verticalCenter }) => verticalCenter && css`
    align-items: center;
  `}
`

const Time = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: normal;
  line-height: 26px;
  font-size: 32px;
  text-align: right;
`

const Modest = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  font-size: 12px;
  color: #4A4A4A;
  margin-top: 6px;

  ${({ bold }) => bold && css`
    font-weight: 600;
  `}
`

const Stops = styled.div`
  display: flex;
  flex-flow: column;
  flex-grow: 1;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  line-height: 12px;
  font-size: 10px;
  text-align: center;
  color: #8B9497;
  text-transform: uppercase;
  border-bottom: 1px solid #D2D5D6;
  margin-top: -6px;
  padding-bottom: 6px;
  margin: 0 20px;
  position: relative;
`

const PlaneIcon = styled.div`
  position: absolute;
  width: 13px;
  height: 14px;
  background-color: white;
  right: 0;
  bottom: -8px;
  padding-left: 1px;
`

export const Ticket = ({
  origin,
  origin_name: originName,
  destination,
  destination_name: destinationName,
  departure_date: depDate,
  departure_time: depTime,
  arrival_date: arrDate,
  arrival_time: arrTime,
  carrier,
  stops,
  price,
}) => (
  <Wrapper>
    <Left>
      <div style={{ height: '56px' }} />
      <Button>
        <div>Купить</div>
        <div>за {price.toLocaleString('RU')}</div>
      </Button>
    </Left>
    <Right>
      <Row verticalCenter>
        <Time>{depTime}</Time>
        <Stops>
          {stops !== 0 && (
            <React.Fragment>
              {stops} {declStops(stops)}
              <PlaneIcon dangerouslySetInnerHTML={{ __html: planeSvg }} />
            </React.Fragment>
          )}
        </Stops>
        <Time>{arrTime}</Time>
      </Row>
      <Row>
        <Modest bold>{origin}, {originName}</Modest>
        <Modest bold>{destination}, {destinationName}</Modest>
      </Row>
      <Row>
        <Modest>{moment(depDate, 'DD.MM.YY').format('DD MMM YYYY, dd')}</Modest>
        <Modest>{moment(arrDate, 'DD.MM.YY').format('DD MMM YYYY, dd')}</Modest>
      </Row>
    </Right>
  </Wrapper>
)
