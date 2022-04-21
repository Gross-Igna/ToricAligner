import React from 'react'
import { useState } from 'react';
import PreopData from './PreopData';
import PostopData from './PostopData';
import './input.css';

export default function Input() {
  
    //Code for states for every input: 
    //
    //(F{FormID, InputID,StateTipe})
    //(VS) [Value, Status] 
    //(Status) => -1=neutral, 0=invalid, 1=valid 

    //Patient Name (custom)
    const [F11Val, setF11Val] = useState("");
    const [F11St, setF11St] = useState(-1);

    //Surgeon Name (custom).
    const [F12Val, setF12Val] = useState("");
    const [F12St, setF12St] = useState(-1);

    //Axial Length (numeric)
    const [F15VS, setF15VS] = useState([0,-1]);

    return (
      <div className='input'>
          <PreopData 
          F11Val={F11Val}setF11Val={setF11Val}setF11St={setF11St}
          F12Val={F12Val} setF12Val={setF12Val} setF12St={setF12St}
          F15VS={F15VS} setF15VS={setF15VS}
          />
      </div>
    )
}
