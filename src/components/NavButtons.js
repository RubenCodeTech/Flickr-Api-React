// import { useState } from "react"
function NavButtons({setInput}) {
    function buttons(e) {
        setInput(e.target.textContent)
      }
    return (
        <nav>
            <button className='navButtons' onClick={buttons}>Mountain</button>
            <button className='navButtons' onClick={buttons}>Beaches</button>
            <button className='navButtons' onClick={buttons}>Birds</button>
            <button className='navButtons' onClick={buttons}>Food</button>
        </nav>
    )
}
export default NavButtons