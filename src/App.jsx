import { useState } from 'react'
import Dashboad from './pages/Dashboad';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboad/>,
  },
  {
    path: "/about",
    element: <h1>About</h1>,
  },
]);

function App() {

  return (
    <div className="App">       
     <RouterProvider router={router}/>
    </div>
  )
}

export default App
