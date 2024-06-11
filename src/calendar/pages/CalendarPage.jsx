import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { getMessages, localizer } from '../../helpers';
import { CalendarEventBox } from '../components/CalendarEventBox';
import { CalendarModal } from '../components/CalendarModal';

const events = [
  {
    title: 'Boss happy birthday',
    task: 'Buy  chocolate pie',
    start: new Date(),
    end: addHours(new Date(), 2),
    user: {
      _id: 123,
      name: 'Diego',
    },
  },
];

export const CalendarPage = () => {
  // eslint-disable-next-line no-unused-vars
  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundcolor: '#1d75aa',
      borderRadius: '8px',
      color: 'white',
    };

    return {
      style,
    };
  };

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    console.log({ click: event });
  };

  const onViewChange = (event) => {
    console.log({ viewChange: event });
  };

  return (
    <>
      <Calendar
        localizer={localizer}
        events={events}
        defaultView="week"
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100vh' }}
        messages={getMessages()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEventBox,
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChange}
      />

      <CalendarModal />
    </>
  );
};
