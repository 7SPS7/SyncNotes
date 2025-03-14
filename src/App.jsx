import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import Paste from './Paste';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import View from './View';
import Frontpage from './Frontpage';
import Update from './Update';
import Footer from './Footer';

const router = createBrowserRouter(
[
  {
    path: "/SyncNotes/",
    element: 
    <div>
      <Navbar/>
      <Frontpage/>
      <Home/>
      <Footer/>
    </div>
  },
  {
    path:"/SyncNotes/update/:id",
    element: 
    <div>
      <Navbar/>
      <Update/>
      <Footer/>
    </div>
  },
  {
    path: "/SyncNotes/pastes",
    element: 
    <div>
      <Navbar/>
      <Paste/>
      <Footer/>
    </div>
  },
  {
    path: "/SyncNotes/pastes/:id",
    element: 
    <div>
      <Navbar/>
      <View/>
      <Footer/>
    </div>
  }
]
);

function App() {

  return (
    <RouterProvider router={router}/>
  )
}

export default App
