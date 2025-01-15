import { useCallback, useEffect, useRef, useState } from 'react';
import {Alert} from '@mui/material';

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  // Ref Hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password) // this will select the password
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 5000);
  },[password])

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed, passwordGenerator]);


  return (
    
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        
        <input
          type="text"
          placeholder="Password"
          value={password}
          readOnly
          className="outline-none w-full py-1 px-3"
          ref={passwordRef}
        />
        <button onClick={copyPassword}  className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
          Copy
        </button>
      </div>
      {showAlert && (
        <Alert severity="success">Password copied to clipboard!</Alert>
      )}


      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={15}
            value={length}
            onChange={(e) => {setLength(e.target.value)}}
            className="cursor-pointer"
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numAllowed}
            onChange={()=>{
              setNumAllowed((prev) => !prev)
            }} 
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={()=>{
              setCharAllowed((prev) => !prev)
            }}
          />
          <label>Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
