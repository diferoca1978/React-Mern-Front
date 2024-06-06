import { RouterProvider } from 'react-router-dom';
import { router } from './routes/AppRouter';
import { AppTheme } from './theme/AppTheme';

export const CalendarApp = () => {
  return (
    <>
      <AppTheme>
        <RouterProvider router={router} />
      </AppTheme>
    </>
  );
};
