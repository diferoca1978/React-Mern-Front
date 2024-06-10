import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
import { AuthLayout, MainLayout } from '../layout';
import { ErrorPage } from '../shared';
import { LoginPage, ProfilePage, RegisterPage } from '../auth/pages';
import { CalendarPage } from '../calendar/pages/CalendarPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
        <Route path="calendar" index element={<CalendarPage />} />
      </Route>

      <Route path="auth" element={<AuthLayout />} errorElement={<ErrorPage />}>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </>
  )
);
