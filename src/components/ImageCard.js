import "../App"

function ImageCard({ images }) {
    const imageCards = images.map(image => (<img className="images" src={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt="img"></img>))

    return (
        imageCards
        )
}
export default ImageCard