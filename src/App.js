import ImageCard from './components/ImageCard';
import Input from './components/Input';
import NavButtons from './components/NavButtons';
import React from "react";
import "./index.css"
import ImageContextProvider from './context/ImageContext';
import Header from './components/Header';
import Tittle from './components/Tittle';
import AboutUs from './pages/AboutUs';

// import { Link, Route, Routes, useParams } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Links from './components/Links';

export default function App() {
  return (
    <ImageContextProvider>
      <div className='principalInformation'>
        <Routes>

          <Route exact path='/about-us' element={<><Tittle /><AboutUs /></>} />

          <Route exact path="/" element={<>
            <Links />
            <Tittle />
            <Input />
            <NavButtons />
            <Header />
            <div className="imageCards">
              <ImageCard />
            </div></>} />
            {/* <Route path={`${}`}/> ???como pongo aqui el image.title de cada imagen para renderizar en grande la foto pulsada*/}
        </Routes>
    

{/*image.title */}


      </div>
    </ImageContextProvider>
  );
}