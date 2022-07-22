import React, {useState} from 'react'
import BarHeader from './common/BarHeader'
import Input from './aligner_piggyback/Input'

export default function PiggybackAligner() {

    //Code for states for every input: 
    //(VS) [Value, Status] 
    //(Status) => -1=neutral, 0=invalid, 1=valid 
    
    //Lens Selection
    //Type
    const [F11Val, setF11Val] = useState("Select")
    const [F11St, setF11St] = useState(-1)
    //Model
    const [F12VS, setF12VS] = useState([undefined,-1])

    return (
      <div>
          <BarHeader/>
          <Input
          F11Val={F11Val} setF11Val={setF11Val}
          F11St={F11St} setF11St={setF11St}
          
          F12VS={F12VS} setF12VS={setF12VS}
          />
      </div>
    )
}
