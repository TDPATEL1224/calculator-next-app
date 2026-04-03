import { useState } from "react"

export default function Calculator() {
  const [display, setDisplay] = useState("0")

  const handleClick = (value) => {
    if (display === "0") {
      setDisplay(value)
    } else {
      setDisplay(display + value)
    }
  }

  const handleClear = () => {
    setDisplay("0")
  }

  const handleEqual = () => {
    try {
      const result = eval(display)
      setDisplay(result.toString())
    } catch {
      setDisplay("Error")
    }
  }

  return (
    <div>
      <input id="display" type="text" value={display} readOnly />

      <div>
        <button id="btn-7" onClick={() => handleClick("7")}>7</button>
        <button id="btn-8" onClick={() => handleClick("8")}>8</button>
        <button id="btn-9" onClick={() => handleClick("9")}>9</button>
        <button id="btn-divide" onClick={() => handleClick("/")}>/</button>
      </div>

      <div>
        <button id="btn-4" onClick={() => handleClick("4")}>4</button>
        <button id="btn-5" onClick={() => handleClick("5")}>5</button>
        <button id="btn-6" onClick={() => handleClick("6")}>6</button>
        <button id="btn-multiply" onClick={() => handleClick("*")}>*</button>
      </div>

      <div>
        <button id="btn-1" onClick={() => handleClick("1")}>1</button>
        <button id="btn-2" onClick={() => handleClick("2")}>2</button>
        <button id="btn-3" onClick={() => handleClick("3")}>3</button>
        <button id="btn-subtract" onClick={() => handleClick("-")}>-</button>
      </div>

      <div>
        <button id="btn-0" onClick={() => handleClick("0")}>0</button>
        <button id="btn-clear" onClick={handleClear}>C</button>
        <button id="btn-equals" onClick={handleEqual}>=</button>
        <button id="btn-add" onClick={() => handleClick("+")}>+</button>
      </div>
    </div>
  )
}