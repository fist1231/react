import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'

const HomeCalendar = () => {
  BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
  return <BigCalendar popup events={events} defaultDate={moment().toDate()} />
}

export default HomeCalendar
