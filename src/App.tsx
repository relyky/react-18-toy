import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom"
import HomePage from './home'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "hello",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="/about">About Us</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
