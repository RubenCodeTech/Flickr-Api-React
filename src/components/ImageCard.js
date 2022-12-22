import { useContext } from "react"
import "../App"
import { ImageContext } from "../context/ImageContext"
import { Link } from "react-router-dom"
function ImageCard() {
    // const {input} = useContext(ImageContext)
    const {images} = useContext(ImageContext)
    const imageCards = images.map(image => (<div key={image.id} className="imageBox"><Link to={`/${image.title}`}><img  className="images" src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="img"></img></Link></div>))

    return (
        imageCards
        )
}
export default ImageCard