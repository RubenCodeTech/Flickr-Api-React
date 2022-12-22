// import { useState } from "react"
import { useContext } from "react"
// import { NavLink } from "react-router-dom"
import { ImageContext } from "../context/ImageContext"
function NavButtons() {
    const {setInput} = useContext(ImageContext)
    function buttons(e) {
        setInput(e.target.textContent)
      }
    return (
        <nav className="nav">
            <button  className='navButtons' onClick={buttons} value={'pollita'}>Mountain</button>
            <button   className='navButtons' onClick={buttons}>Birds</button>
            <button   className='navButtons' onClick={buttons}>Food</button>
            <button   className='navButtons' onClick={buttons}>Beaches</button>
        </nav>
    )
}
export default NavButtons