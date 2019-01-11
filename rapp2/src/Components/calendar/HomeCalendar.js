import React from 'react'
// import BigCalendar from 'react-big-calendar'
import Calendar from 'react-big-calendar'
import moment from 'moment'
import events from './events'
// import 'react-big-calendar/lib/css/react-big-calendar.css'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import InfoDialog from '../../containers/modal/InfoDialog'
import HelpDrawer from '../../components/drawer/HelpDrawer'
import HelpButton from '../../components/drawer/HelpButton'
import ReviewProposalsHelpContent from '../../components/drawer/CalendarHelp'
import './calendar.css'


Calendar.setLocalizer(Calendar.momentLocalizer(moment));
const DnDCalendar = withDragAndDrop(Calendar);

const fullModeStyle = { height: "100vh", width: "100%", padding: "1em 2em 2em 2em" };
const windowModeStyle = { height: "370px" };

class HomeCalendar extends React.Component {

  state = {
    events: events,
    infoOpen: false, // flag to open InfoDialog
    helpOpen: false      // flag to open Help Drawer
  };

  infoText = undefined;

  onEventResize = (type, { event, start, end, allDay }) => {
      const { events } = this.state

      const nextEvents = events.map(existingEvent => {
        return existingEvent.id == event.id
          ? { ...existingEvent, start, end }
          : existingEvent
      })

      this.setState({
        events: nextEvents,
      })

      this.handleInfo(`${event.title} was resized to ${start}-${end}`);

  };

  onEventDrop = ({ event, start, end, allDay }) => {
      const { events } = this.state

      const idx = events.indexOf(event)
      const updatedEvent = { ...event, start, end }

      const nextEvents = [...events]
      nextEvents.splice(idx, 1, updatedEvent)

      this.setState({
        events: nextEvents
      })

      this.handleInfo(`${event.title} was moved to ${event.start}`);
  };

  handleInfo = (dText) => {
    this.infoText = dText;
    this.setState({...this.state, infoOpen: true});
  }

  handleInfoClose = () => {
    this.setState({...this.state, infoOpen: false});
  }

  handleToggle = () => this.setState({...this.state, helpOpen: !this.state.helpOpen});

  render() {
    return (
      <div className="container" style={{position:'relative'}}>
        {console.log('windowMode=' + this.props.windowMode)}
        { this.props.windowMode? (
                <DnDCalendar
                  defaultDate={new Date()}
                  defaultView="month"
                  events={this.state.events}
                  onEventDrop={this.onEventDrop}
                  onEventResize={this.onEventResize}
                  resizable
                  style={this.props.windowMode?windowModeStyle:fullModeStyle}
                />
          ) : (
                  <div>
                   <div className="helpRwLocation calendarHelp"><HelpButton buttonText={"Help"} className={"test"} buttonClick={this.handleToggle} /></div>
                    <DnDCalendar
                      defaultDate={new Date()}
                      defaultView="month"
                      events={this.state.events}
                      onEventDrop={this.onEventDrop}
                      onEventResize={this.onEventResize}
                      resizable
                      style={this.props.windowMode?windowModeStyle:fullModeStyle}
                    />
                    <HelpDrawer toggled={this.state.helpOpen} onToggleChange={this.handleToggle}>
                      <ReviewProposalsHelpContent />
                    </HelpDrawer>
                    <InfoDialog infoText={this.infoText} isOpen={this.state.infoOpen} onClose={this.handleInfoClose} />
                  </div>
          )
        }
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(HomeCalendar)
