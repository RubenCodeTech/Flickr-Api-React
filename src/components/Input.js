import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

function Input(){
  const {setInput} = useContext(ImageContext)
    function inputValue(e) {
        if (e.key === 'Enter') {
          setInput(e.target.value)
        }
      }
return(
    <input onKeyDown={inputValue} className="inputImages" placeholder='Search...'></input>
)
}
export default Input;