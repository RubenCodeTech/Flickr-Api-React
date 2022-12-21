// import { useState } from "react"
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ImageContext } from "../context/ImageContext"
function NavButtons() {
    const {setInput} = useContext(ImageContext)
    function buttons(e) {
        setInput(e.target.textContent)
      }
    return (
        <nav className="nav">
            <NavLink to={'/Mountain'} className='navButtons' onClick={buttons}>Mountain</NavLink>
            <NavLink to={'/Birds'}  className='navButtons' onClick={buttons}>Birds</NavLink>
            <NavLink to={'/Food'}  className='navButtons' onClick={buttons}>Food</NavLink>
            <NavLink to={'/Beaches'}  className='navButtons' onClick={buttons}>Beaches</NavLink>
        </nav>
    )
}
export default NavButtons