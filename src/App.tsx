import type { FC } from 'react'
import React from 'react'
import {
  Route,
  Link,
  Routes
} from "react-router-dom"
import HomePage from './home'
import MainOutlet from './views/MainOutlet'

export default function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<MainOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="/hello" element={<div>
            <h1>Hello World</h1>
            <Link to="/about">About Us</Link>
          </div>} />
          <Route path='about' element={<div>About</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

//=========================================================
const NotFound: FC = () => {
  return (
    <div>
      <h1>404 NotFound</h1>
      <h2>Your Princess Is In Another Castle!</h2>
    </div>
  )
}
