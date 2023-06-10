import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './Routes/Routes';
import Modal from 'react-modal';
import './index.css'
import {

  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider';
// tran stack query 
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()
// Set the app element
Modal.setAppElement('#root');
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </QueryClientProvider>

  </React.StrictMode>,
)


