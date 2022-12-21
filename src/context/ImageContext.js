import axios from "axios";
import React from "react";
import { useEffect, useState } from 'react';
import { apiKey } from '../api/config';

export const ImageContext = React.createContext();
function ImageContextProvider({ children }) {

    const [input, setInput] = useState('')
    const [images, setImages] = useState([]);
    const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${input}&format=json&nojsoncallback=1`;

    useEffect(() => {
        if (input !== '') {

            async function infoImg() {
                await axios.get(baseURL).then((response) => {
                    setImages(response.data.photos.photo);
                });
            }
            infoImg()
        }

    }, [input, baseURL]);


    return (
        <ImageContext.Provider value={{input, setInput, images, setImages}}>
            {children}
        </ImageContext.Provider>
    )
}
export default ImageContextProvider