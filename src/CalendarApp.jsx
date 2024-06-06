import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRouter';

export const CalendarApp = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
