import { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

function Input() {
  const { setInput } = useContext(ImageContext)
  function inputValue(e) {
    if (e.key === 'Enter') {
      setInput(e.target.value);
    }
  }
  return (
    <div>

      <input onKeyDown={inputValue} className="inputImages" placeholder='Search...'></input>
    </div>
  )
}
export default Input;