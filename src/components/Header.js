import { useContext } from "react"
import { ImageContext } from "../context/ImageContext"

 function Header(){
    const {input} = useContext(ImageContext)
return <h3>{input === '' ? 'Search Some' : input} Pictures</h3> 
 }
 export default Header