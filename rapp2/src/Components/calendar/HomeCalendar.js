import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import HTML5Backend from 'react-dnd-html5-backend'
// import 'react-big-calendar/lib/addons/dragAndDrop/styles.less'
const DragAndDropCalendar = withDragAndDrop(BigCalendar)
import { DragDropContext } from 'react-dnd'

class HomeCalendar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      events: events,
    }

    this.moveEvent = this.moveEvent.bind(this)
  }

  moveEvent({ event, start, end }) {
    const { events } = this.state

    const idx = events.indexOf(event)
    const updatedEvent = { ...event, start, end }

    const nextEvents = [...events]
    nextEvents.splice(idx, 1, updatedEvent)

    this.setState({
      events: nextEvents,
    })

    alert(`${event.title} was dropped onto ${event.start}`)
  }

  resizeEvent = (resizeType, { event, start, end }) => {
    const { events } = this.state

    const nextEvents = events.map(existingEvent => {
      return existingEvent.id == event.id
        ? { ...existingEvent, start, end }
        : existingEvent
    })

    this.setState({
      events: nextEvents,
    })

    alert(`${event.title} was resized to ${start}-${end}`)
  }

  render() {
    BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));
    return (
      <DragAndDropCalendar
        selectable
        events={this.state.events}
        onEventDrop={this.moveEvent}
        resizable
        onEventResize={this.resizeEvent}
        defaultView="month"
        defaultDate={moment().toDate()}
      />
    )
  }
}

export default DragDropContext(HTML5Backend)(HomeCalendar)
