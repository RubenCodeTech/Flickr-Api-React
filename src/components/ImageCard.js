import { useContext } from "react"
import "../App"
import { ImageContext } from "../context/ImageContext"

function ImageCard() {
    const {images} = useContext(ImageContext)
    const imageCards = images.map(image => (<div key={image.id} className="imageBox"><img  className="images" src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="img"></img></div>))

    return (
        imageCards
        )
}
export default ImageCard