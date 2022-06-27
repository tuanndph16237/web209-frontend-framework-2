import React, {useState} from 'react'
import './App.css';

function App() {
  const [status, setStatus] = useState(false)
  return <button onClick={()=> setStatus(!status)}>{status ? "You loved it" : "love it"}</button>

}

export default App;
