import React from 'react'
import { Route, Link, Routes } from 'react-router-dom'
import HomePage from './views/Home/HomePage'
import MainOutlet from './views/MainOutlet'
import About from 'views/About/About'
import { Container, Typography, Button } from '@mui/material'
import type { FC } from 'react'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainOutlet />}>
        <Route index element={<HomePage />} />
        <Route path='/about' element={<About />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

//=========================================================
const NotFound: FC = () => {
  return (
    <Container>
      <Typography variant='h1'>404 NotFound</Typography>
      <Typography variant='h2'>Your Princess Is In Another Castle!</Typography>
      <Button href="#/" variant="contained">回首頁</Button>
    </Container>
  )
}
