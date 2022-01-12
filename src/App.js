import React, {useState, useEffect, useRef} from 'react';
import './App.css';

const useHandleInput = () => {
  const inputRef = useRef()

  const handleInputChange = e => {
    inputRef.current.value = e.target.value
  }

  return [inputRef, handleInputChange]
}

function App() {
  const [nameRef, handleNameChange] = useHandleInput()
  const [ageRef, handleAgeInput] = useHandleInput()
  
  useEffect(() => {
    //every re-render this useEffect will run 
    console.log('%c re-render', 'color:red')
  })
  
  return (
    <div className="App">
      <header className="App-header">
       <form onSubmit={e => e.preventDefault()}>
       <input placeholder='name' ref={nameRef} 
              onChange={handleNameChange} />
        <br/>
        <input placeholder='age' ref={ageRef} 
              onChange={handleAgeInput} />
       
       <div>Name : {nameRef.current.value}</div>
       <button type='submit'>Submit</button>
       </form>
      </header>
    </div>
  );
}

export default App;
