import { useEffect, useState } from 'react';
import { apiKey } from './api/config';
import ImageCard from './components/ImageCard';
import Input from './components/Input';
import NavButtons from './components/NavButtons';
import axios from "axios";
import React from "react";
import "./index.css"
export default function App() {
  const [input, setInput] = useState('')
  const [images, setImages] = useState([]);
  const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&format=json&nojsoncallback=1`;

  useEffect(() => {
    infoImg()
    async function infoImg() {
      await axios.get(baseURL).then((response) => {
        setImages(response.data.photos.photo);
      });
    }
  }, [baseURL]);

  return (
    <div className='principalInformation'>
      <h1>SnapShot</h1>
      <Input input={input} setInput={setInput} />
      <NavButtons setInput={setInput} />
      <h3>{input} Pictures</h3>
      <div className="imageCards">
      <ImageCard images={images} setImages={setImages} />
      </div>
    </div>
  );
}