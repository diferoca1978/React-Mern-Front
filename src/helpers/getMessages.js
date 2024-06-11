export const getMessages = () => {
  return {
    allDay: 'AllDay',
    previous: 'Prev',
    next: 'Next',
    today: 'Today',
    month: 'Month',
    week: 'Week',
    day: 'Day',
    agenda: 'Schedule',
    date: 'Date',
    time: 'Time',
    event: 'Event',
    noEventsInRange: 'There are not events in this range',
    showMore: (total) => `+ View more (${total})`,
  };
};
