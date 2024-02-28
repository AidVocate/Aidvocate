import { Navigate, createBrowserRouter } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import UserRoute from './routes/UserRoute'
import Index from './pages/Index';
import NoPage from './pages/NoPage';

const router = createBrowserRouter([{
  path: '/',
  element: <DefaultLayout />,
  children: [
    { //reroutes /index to /
      path: '/index',
      element: 
      <UserRoute>
        <Navigate to="/"/>
      </UserRoute>
    },
    { //404
      path: '*',
      element: 
      <NoPage/>
    },
    { //index page, requires a token to access, update later
      path: '/',
      element: 
      <UserRoute>
        <Index/>
      </UserRoute>
    },
  ]
}])

export default router;