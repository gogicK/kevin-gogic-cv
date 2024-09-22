import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import HomePage from './routes/HomePage';
import About from './routes/About';
import CVA4 from './routes/CVA4';

const router = createBrowserRouter([
  {
    path: "/kevin-webdev",
    element: <HomePage />

  },
  {
    path: "/kevin-webdev/CVA4",
    element: <CVA4 />
  },
  {
    path: "/kevin-webdev/about",
    element: <About />
  },
  {
    path: "*",
    element: <Navigate to="/" replace />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
