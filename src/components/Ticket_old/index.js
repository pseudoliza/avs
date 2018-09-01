import React from 'react'
import moment from 'moment'
import { BuyButton } from 'src/components/Button/BuyButton'
import CompanyLogo from 'static/images/B2@2x.png'
import { StyledImgIcon, TicketContainer, Buy, Info, OriginFlightInfo, Stops, DestinationFlightInfo, Time, Name, Date } from './styled'

moment.locale('ru')

const Ticket = props => (
  <TicketContainer>
    <Buy>
      <StyledImgIcon src={CompanyLogo} alt="" />
      <BuyButton price={props.price} />
    </Buy>
    <Info>
      <OriginFlightInfo>
        <Time>{props.departure_time}</Time>
        <Name>{props.origin}, {props.origin_name}</Name>
        <Date>{moment(props.departure_date, 'DD.MM.YY').format('DD MMM YYYY, dd')}</Date>
      </OriginFlightInfo>
      <Stops />
      <DestinationFlightInfo>
        <Time>{props.arrival_time}</Time>
        <Name>{props.destination}, {props.destination_name}</Name>
        <Date>{moment(props.arrival_date, 'DD.MM.YY').format('DD MMM YYYY, dd')}</Date>
      </DestinationFlightInfo>
    </Info>
  </TicketContainer>
)

export default Ticket
