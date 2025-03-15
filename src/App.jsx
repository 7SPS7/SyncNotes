import './App.css'
import Home from './Home';
import Navbar from './Navbar';
import Paste from './Paste';
import { createHashRouter, RouterProvider, Navigate } from 'react-router-dom';
import View from './View';
import Frontpage from './Frontpage';
import Update from './Update';
import Footer from './Footer';

const router = createHashRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Frontpage />
        <Home />
        <Footer />
      </div>
    )
  },
  {
    path: "/update/:id",
    element: (
      <div>
        <Navbar />
        <Update />
        <Footer />
      </div>
    )
  },
  {
    path: "/pastes",
    element: (
      <div>
        <Navbar />
        <Paste />
        <Footer />
      </div>
    )
  },
  {
    path: "/pastes/:id",
    element: (
      <div>
        <Navbar />
        <View />
        <Footer />
      </div>
    )
  },
  {
    path: "*",
    element: <Navigate to="/" />
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
