function Input({input, setInput}){
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