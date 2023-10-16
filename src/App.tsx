import React from 'react'
import { createHashRouter,RouterProvider } from 'react-router-dom'
import HomePage from 'views/Home/HomePage'
import MainOutlet from 'views/MainOutlet'
import NotFound from 'views/NotFound'
import About from 'views/About/About'
import IndexedDB from 'views/IndexedDB/AppForm'
import VisNetwork from 'views/VisNetwork/AppForm'
import { initDB } from 'react-indexed-db-hook'

const DBConfig = {
  name: "MyDB",
  version: 1,
  objectStoresMeta: [
    {
      store: "nodes",
      storeConfig: { keyPath: "id", autoIncrement: false },
      storeSchema: [
        { name: "label", keypath: "label", options: { unique: false } },
        { name: "group", keypath: "group", options: { unique: false } },
      ],
    },
    {
      store: "edges",
      storeConfig: { keyPath: "sn", autoIncrement: true },
      storeSchema: [
        { name: "from", keypath: "from", options: { unique: false } },
        { name: "to", keypath: "to", options: { unique: false } },
        { name: "label", keypath: "label", options: { unique: false } },
        { name: "group", keypath: "group", options: { unique: false } },
        { name: "arrows", keypath: "arrows", options: { unique: false } },
      ],
    },
  ],
};

initDB(DBConfig);

//※gh-pages 不支援 BrowserRouter 故採用 HashRouter。
const router = createHashRouter([
  {
    path: "/",
    element: <MainOutlet />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/indexed-db", element: <IndexedDB /> },
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
