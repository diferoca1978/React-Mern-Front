import { Divider, Typography } from '@mui/material';

/* eslint-disable react/prop-types */
export const CalendarEventBox = ({ event }) => {
  const { title, user } = event;

  return (
    <>
      <Typography sx={{ fontSize: 14 }}>{title}</Typography>
      <Divider />
      <Typography sx={{ fontSize: 14 }}>{user.name}</Typography>
    </>
  );
};
