import React from 'react';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import HomePage from './Components/HomePage/HomePage';
import AboutUs from './Components/About_us/AboutUs';
import ServicePage from './Components/ServicePage/ServicePage';
import Team from './Components/Team/Team';
import Portfolio from './Components/Portfolio/Portfolio';
import Career from './Components/Career/Career';
import Error from './Components/ErrorPage/Error';
import ComingSoon from './Components/ComingSoon/ComingSoon';
import Contact from './Components/Contact/Contact';
import Blogs from './Components/Blogs/Blogs';
import Post from './Components/PostsPage/Post';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <HomePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/aboutus"
          element={
            <>
              <Header />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route
          path="/service"
          element={
            <>
              <Header />
              <ServicePage />
              <Footer />
            </>
          }
        />
        <Route
          path="/team"
          element={
            <>
              <Header />
              <Team />
              <Footer />
            </>
          }
        />
        <Route
          path="/portfolio"
          element={
            <>
              <Header />
              <Portfolio />
              <Footer />
            </>
          }
        />
        <Route
          path="/career"
          element={
            <>
              <Header />
              <Career />
              <Footer />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Header />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Header />
              <Blogs />
              <Footer />
            </>
          }
        />
        <Route
          path="/post"
          element={
            <>
              <Header />
              <Post />
              <Footer />
            </>
          }
        />
        <Route
          path="/error"
          element={
            <>
              <Header />
              <Error />

            </>
          }
        />
        <Route
          path="/comingsoon"
          element={
            <>
              <Header />
              <ComingSoon />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
