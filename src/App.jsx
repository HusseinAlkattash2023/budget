import { useState } from 'react'
import Dashboard, { dashboardActions, dashboardLoader } from './pages/Dashboard';
import { mainLoader } from './Layouts/Main';
import Error from './pages/Error';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';

//library
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

//actions
import { logoutActions } from './actions/Logout';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    loader:mainLoader,
    errorElement:<Error/>,
    children:[
      {
        index:true,
        element:<Dashboard/>,
        loader:dashboardLoader,
        errorElement:<Error/>,
        action:dashboardActions
      },
      {
        path:"logout",
        action:logoutActions
      },
    ]
  },
]);

function App() {

  return (
    <div className="App">       
     <RouterProvider router={router}/>
     <ToastContainer/>
    </div>
  )
}

export default App
