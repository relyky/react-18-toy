import React from 'react'
import { createHashRouter,RouterProvider } from 'react-router-dom'
import HomePage from 'views/Home/HomePage'
import MainOutlet from 'views/MainOutlet'
import NotFound from 'views/NotFound'
import About from 'views/About/About'
import VisNetwork from 'views/VisNetwork/AppForm'

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
