import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import UserRoute from './routes/UserRoute'
import Index from './pages/Index';
import NoPage from './pages/NoPage';

const router = createBrowserRouter([{
  path: '/',
  element: <DefaultLayout />,
  children: [
    {
      path: '/index',
      element: 
      <UserRoute>
        <Navigate to="/"/>
      </UserRoute>
    },
    {
      path: '*',
      element: 
      <NoPage/>
    },
    {
      path: '/',
      element: 
      <UserRoute>
        <Index/>
      </UserRoute>
    },
  ]
}])

export default router;