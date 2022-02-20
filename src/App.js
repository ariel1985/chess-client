import React, {useState} from 'react';
import './App.css'

export default function App() {
  const [stateUserInput, setUserInput] = useState('')
  
  function handleInputChange(e) {
    console.log("input changed to ", e.target.value)
    setUserInput(e.target.value)
  }

  return (
  <div className="container-fluid">
    <div className="form-signin form-horizontal centeredBox">
      <form>
        <h1 className="header">Welcome!</h1>
          <input className='form-control' type="text" value={stateUserInput} onChange={handleInputChange} placeholder='Enter Text Code'></input>
      </form>
      <hr/>
      <p>{stateUserInput}</p>
    </div>
  </div>);
}



