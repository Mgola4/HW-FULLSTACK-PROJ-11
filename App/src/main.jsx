import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import HighScore from './Components/HighScore/HighScore.jsx';
import LogIn from './Components/LogIn/LogIn.jsx';
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <ErrorPage />,
  },
{
  path: '/HighScore',
  element:<HighScore/>,
  errorElement: <HighScore />,
},
{
  path: '/LogIn',
  element:<LogIn/>,
  errorElement:<LogIn />,
}
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);






 

