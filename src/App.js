import logo from './logo.svg';
import './App.css';
import { Outlet, Link } from "react-router-dom";
import Header from './Header';
import Footer from './Footer';
import Carousel from 'react-bootstrap/Carousel';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css"
import Marquee from "react-fast-marquee";

import Home from './Home'; 

export default function App() {
  return (
    <div>
     
     

      {/* <Home/> */}
    
      <Outlet />
     
    </div>
  );
}