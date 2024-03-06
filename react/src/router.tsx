import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import UserRoute from './routes/UserRoute'
import Index from './pages/Index';
import NoPage from './pages/NoPage';
import Board from './pages/Board';

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
    {
      path: '/board',
      element: 
      <UserRoute>
        <Board/>
      </UserRoute>
    },
  ]
}])

export default router;