import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { RouterProvider } from 'react-router-dom';
import { router } from './components/routes'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div >

      <RouterProvider router={router}></RouterProvider>
      <ToastContainer className='text-center'></ToastContainer>
    </div>
  );
}

export default App;
