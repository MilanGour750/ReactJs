import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'; // Correct imports
import Layout from './Layout.jsx';
import HomePage from './Components/HomePage/HomePage';
import About from './Components/About/About.jsx';
import ErrorPage from './ErrorPage.jsx'; // Create this component for handling errors
import Contact from './Components/Contact/Contact.jsx';
import User from './Components/Users/User.jsx';
import Github, { githubinfo } from './Components/GitHubPage/Github.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     errorElement: <ErrorPage />, // Add errorElement for handling errors
//     children: [
//       {
//         path: 'home',
//         element: <HomePage />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path:"contact",
//         element:<Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/'element={<Layout />}>
      <Route path='' element={<HomePage/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userid' element={<User/>} />
      <Route 
        path='github'  
        element={<Github />}
        loader={githubinfo}
      />
    </Route>

  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
