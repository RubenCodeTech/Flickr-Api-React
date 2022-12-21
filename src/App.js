import ImageCard from './components/ImageCard';
import Input from './components/Input';
import NavButtons from './components/NavButtons';
import axios from "axios";
import React from "react";
import "./index.css"
import {Link,Route, Routes, useEffect, useState } from 'react';
import { apiKey } from './api/config';
import ImageContextProvider, { ImageContext } from './context/ImageContext';
import Header from './components/Header';
// import {Link, Route, Routes, useParams } from 'react-router-dom';

export default function App() {

  //   function ImagesInformationPage () { return(<h1>Images informations</h1>)} 
  //   function Home () {
  // const {input} = useParams
  //     return(
  //       <div>
  //         <h1>Home</h1>
  //         {input}
  //       </div>

  //     )
  //   } 

  return (
    <ImageContextProvider>
      <div className='principalInformation'>
        <h1>SnapShot</h1>
        <Input />
        <NavButtons />
        <Header />
        <div className="imageCards">
          <ImageCard />
        </div>
      </div>
    </ImageContextProvider>

  );
}