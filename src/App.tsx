import React from 'react'
import { createHashRouter,RouterProvider } from 'react-router-dom'
import { Container, Typography, Button } from '@mui/material'
import HomePage from './views/Home/HomePage'
import MainOutlet from './views/MainOutlet'
import About from 'views/About/About'
import VisNetwork from 'views/VisNetwork/AppForm'
import type { FC } from 'react'

const NotFound: FC = () => {
  return (
    <Container>
      <Typography variant='h1'>404 NotFound</Typography>
      <Typography variant='h2'>Your Princess Is In Another Castle!</Typography>
      <Button href="#/" variant="contained">回首頁</Button>
    </Container>
  )
}

//※gh-pages 不支援 BrowserRouter 故採用 HashRouter。
const router = createHashRouter([
  {
    path: "/",
    element: <MainOutlet />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/vis-network", element: <VisNetwork /> },
      { path: "/about", element: <About /> },
    ],
  },
  { path: "*", element: <NotFound />, }
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}

// export default function App() {
//   return (
//    <HashRouter>
//     <Routes>
//       <Route path="/" element={<MainOutlet />}>
//         <Route index element={<HomePage />} />
//         <Route path='/vis-network' element={<VisNetwork />} />
//         <Route path='/about' element={<About />} />
//       </Route>
//       <Route path="*" element={<NotFound />} />
//     </Routes>
//    </HashRouter>
//   )
// }

//=========================================================
