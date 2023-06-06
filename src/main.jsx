import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routes/Routes';
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
