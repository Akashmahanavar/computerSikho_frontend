import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Staff from './Staff';
import Login from './Login';
import Gallery from './Gallery';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enquiry from './Enquiry';
import Followup from './Followup';
import TakeFollowup from './TakeFollowup';
import Header from './Header';
import Footer from './Footer';
import AboutUs from './AboutUs';
import Home from './Home';
import CO from './CO';
import PostEnquiry1 from './PostEnquiry1';
import PostEnquiry from './PostEnquiry';
import PostStudent from './PostStudent';
import StaffGet from './StaffGet';
import StaffPost from './StaffPost';
import { CoursePost } from './CoursePost';
import CourseGet from './CourseGet';
import PaymentMaster from './PaymentMaster';
import StudentLogin from './StudentLogin';
import { Payment } from './Payment';
import CourseDisplay from './CourseDisplay';
import Printing from './Printing';
import StudentGet from './StudentGet';
import GetBatches from './GetBatches';
import BatchUpdate from './BatchUpdate';
import AlbumDisp from './AlbumDisp';
import Images from './Images';
import GetAlbums from './GetAlbums';
import UpdateAlbum from './UpdateAlbum';
import GetImages from './GetImages';
import UpdateImage from './UpdateImage';
import PostAlbum from './PostAlbum';
import PostImage from './PostImage';
import Protected from './Protected';
import NoPage from './NoPage';
import Protected1 from './Protected1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
  <BrowserRouter>
  <Header/>
  <Routes>
    <Route path="/" element={<Home />} />
      <Route path="Login" element={<Login />} />
      <Route path="Home" element={<Home />} />
      <Route path="CO" element={<CO />} />
      <Route path="PostEnquiry1" element={<PostEnquiry1 />} />
      <Route path="PostEnquiry" element={<PostEnquiry />} />
      <Route path="PostStudent" element={<PostStudent />} />
      <Route path="StaffGet" element={<Protected Cmp={StaffGet} />} />
      <Route path="StaffPost" element={<Protected Cmp={StaffPost} />} />
      <Route path="CourseGet" element={<Protected Cmp={CourseGet} />} />
      <Route path="CoursePost" element={<Protected Cmp={CoursePost} />} />
      <Route path="StudentLogin" element={<StudentLogin />} />
      <Route path="StudentLogin" element={<StudentLogin />} />
      <Route path="AlbumDisp" element={<AlbumDisp />} />
      <Route path="GetAlbums" element={<Protected Cmp={GetAlbums} />} />
      <Route path="GetImages" element={<Protected Cmp={GetImages} />} />
      <Route path="PostAlbum" element={<Protected Cmp={PostAlbum} />} />
      <Route path="PostImage" element={<Protected Cmp={PostImage} />} />
      <Route path="StudentGet" element={<Protected Cmp={StudentGet} />} />
      <Route path="Staff" element={<Protected Cmp={Staff} />} />
      <Route path="Enquiry" element={<Protected Cmp={Enquiry} />} />
      <Route path="Followup" element={<Protected Cmp={Followup} />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="AboutUs" element={<AboutUs />} />
      <Route path="/TakeFollowup/:Id" element={<Protected Cmp={TakeFollowup} />} />
      <Route path="/PaymentMaster/:Id" element={<Protected1 Cmp={PaymentMaster} />} />
      <Route path="/Payment/:Id" element={<Protected1 Cmp={Payment} />} />
      <Route path="/CourseDisplay/:Id" element={<CourseDisplay />} />
      <Route path="/Printing/:Id" element={<Protected1 Cmp={Printing} />} />
    
      <Route path="/GetBatches/:Id" element={<Protected Cmp={GetBatches} />} />
      
      <Route path="/BatchUpdate/:Id" element={<Protected Cmp={BatchUpdate} />} />
      <Route path="/Images/:Id" element={<Images/>} />
     
      <Route path="/UpdateAlbum/:Id" element={<Protected Cmp={UpdateAlbum} />} />
      
      <Route path="/UpdateImage/:Id" element={<Protected Cmp={UpdateImage} />} />
      <Route path="*" element={<NoPage />} />
  </Routes>
  <Footer/>
</BrowserRouter>
</div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
