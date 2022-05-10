import React, { useEffect, useRef } from 'react'
import { useState } from 'react';
import PreopData from './PreopData';
import PostopData from './PostopData';
import './input.css';

export default function Input() {

    //Stage: 1=>Preoperative 2=>Postoperative 3=>Results
    const [stage, setStage] = useState(1);

    //Reference for knowing if form is valid
    const [validPreop, setValidPreop] = useState(true);
    const [validPostop, setValidPostop] = useState(false);
    //UseEffect to check if form is valid after any change
    /*useEffect(() => {
      if(
        F11St == 1 && 
        F12St == 1 &&
        F13St == 1 &&
        F14St == 1 && 
        F15VS[1] == 1 &&

        F21VS[1] == 1 &&
        F22VS[1] == 1 &&
        F24VS[1] == 1 &&

        F31VS[1] == 1 &&
        F32VS[1] == 1 &&
        F33VS[1] == 1 &&
        F34VS[1] == 1 &&
        F35VS[1] == 1 &&
        F36VS[1] == 1 &&
        
        F41VS[1] == 1 &&
        F42VS[1] == 1 &&
        F43VS[1] == 1 &&
        F44VS[1] == 1 &&
        F45VS[1] == 1 &&
        F46VS[1] == 1
      ){
        setValidPreop(true);
      }else{
        setValidPreop(false);
      }
    })*/

    useEffect(() => {
      if(
        F51VS[1] == 1 &&

        F61VS[1] == 1 &&
        F62VS[1] == 1 &&
        F63VS[1] == 1 &&

        F81VS[1] == 1 &&
        F82VS[1] == 1 &&
        F83VS[1] == 1 &&
        F84VS[1] == 1 &&
        F85VS[1] == 1 &&
        F86VS[1] == 1 &&
        
        F91VS[1] == 1 &&
        F92VS[1] == 1 &&
        F93VS[1] == 1 &&
        F94VS[1] == 1 &&
        F95VS[1] == 1 &&
        F96VS[1] == 1 
      ){
        setValidPostop(true);
      }else{
        setValidPostop(false);
      }
    })

    //Code for states for every input: 
    //
    //(F{FormID, InputID,StateTipe})
    //(VS) [Value, Status] 
    //(Status) => -1=neutral, 0=invalid, 1=valid 

    // // // PREOPERATIVE DATA // // //

      // PATIENT DATA: //
        //Patient Name (custom)
        const [F11Val, setF11Val] = useState("");
        const [F11St, setF11St] = useState(-1);
        //Surgeon Name (custom).
        const [F12Val, setF12Val] = useState("");
        const [F12St, setF12St] = useState(-1);
        //Eye (left or rigth) (custom)
        const [F13Val, setF13Val] = useState("Select Eye");
        const [F13St, setF13St] = useState(-1);
        //Date of surgery (custom)
        const [F14Val, setF14Val] = useState("");
        const [F14St, setF14St] = useState(-1);
        //Axial Length (numeric)
        const [F15VS, setF15VS] = useState(["",-1]);
        //IOL/Cornea cylinder ratio (numeric)
        const [F16VS, setF16VS] = useState([1.5,1]);
        //Required cylinder at IOL plane (numeric)
        const [F17VS, setF17VS] = useState([4.5,1]);

      // PREOPERATIVE MEASURES: //
        //Keratometric astigmatism
          //K2
          const [F21VS, setF21VS] = useState(["",-1]);
          //K1
          const [F22VS, setF22VS] = useState(["",-1]);
          //Magnitude
          const [F23VS, setF23VS] = useState(["",-1]);
          //Steep Meridian
          const [F24VS, setF24VS] = useState(["",-1]);
        //Optimized Astigmatism
          //Magnitude
          const [F25VS, setF25VS] = useState(["",-1]);
          //Steep Meridian
          const [F26VS, setF26VS] = useState(["",-1]);
        //OCT1 / Scheimpflug / Biometer
          //Measure 1
            //Magnitude
            const[F31VS, setF31VS] = useState(["",-1])
            //Axis
            const[F32VS, setF32VS] = useState(["",-1])
          //Measure 2
            //Magnitude
            const[F33VS, setF33VS] = useState(["",-1])
            //Axis
            const[F34VS, setF34VS] = useState(["",-1])
          //Measure 3
            //Magnitude
            const[F35VS, setF35VS] = useState(["",-1])
            //Axis
            const[F36VS, setF36VS] = useState(["",-1])
          //Averages
            //Magnitude
            const[F37Val, setF37Val] = useState("0")
            //Axis
            const[F38Val, setF38Val] = useState("0")
        //OCT2 / Scheimpflug / Biometer
          //Measure 1
            //Magnitude
            const[F41VS, setF41VS] = useState(["",-1])
            //Axis
            const[F42VS, setF42VS] = useState(["",-1])
          //Measure 2
            //Magnitude
            const[F43VS, setF43VS] = useState(["",-1])
            //Axis
            const[F44VS, setF44VS] = useState(["",-1])
          //Measure 3
            //Magnitude
            const[F45VS, setF45VS] = useState(["",-1])
            //Axis
            const[F46VS, setF46VS] = useState(["",-1])
          //Averages
            //Magnitude
            const[F47Val, setF47Val] = useState("0")
            //Axis
            const[F48Val, setF48Val] = useState("0")

    // // // Postoperative Data // // //
      //Implanted IOL Cilinder
        //IOL Plane
        const [F51VS, setF51VS] = useState("", -1)
        //Corneal plane
        const [F52VS, setF52VS] = useState("...", -1)
        //Orientation
        const [F53VS, setF53VS] = useState("...", -1)
      //Postoperative refraction
        //Sphere
        const [F61VS, setF61VS] = useState("", -1)
        //Cylinder
        const [F62VS, setF62VS] = useState("", -1)
        //Axis
        const [F63VS, setF63VS] = useState("", -1)
      //Postop Measures
      //OCT1 / Scheimpflug / Biometer
        //Measure 1
          //Magnitude
          const [F81VS, setF81VS] = useState("", -1)
          //Axis
          const [F82VS, setF82VS] = useState("", -1)
        //Measure 2
          //Magnitude
          const [F83VS, setF83VS] = useState("", -1)
          //Axis
          const [F84VS, setF84VS] = useState("", -1)
        //Measure 3
          //Magnitude
          const [F85VS, setF85VS] = useState("", -1)
          //Axis
          const [F86VS, setF86VS] = useState("", -1)
        //Averages
          //Magnitude
          const [F87Val, setF87Val] = useState("0")
          //Axis
          const [F88Val, setF88Val] = useState("0")

      //OCT2 / Scheimpflug / Biometer
        //Measure 1
          //Magnitude
          const [F91VS, setF91VS] = useState("", -1)
          //Axis
          const [F92VS, setF92VS] = useState("", -1)
        //Measure 2
          //Magnitude
          const [F93VS, setF93VS] = useState("", -1)
          //Axis
          const [F94VS, setF94VS] = useState("", -1)
        //Measure 3
          //Magnitude
          const [F95VS, setF95VS] = useState("", -1)
          //Axis
          const [F96VS, setF96VS] = useState("", -1)
        //Averages
          //Magnitude
          const [F97Val, setF97Val] = useState("0")
          //Axis
          const [F98Val, setF98Val] = useState("0")

    return (
      <div className='input'>

        {(stage==1)?
            (<PreopData 
              setStage={setStage}
              validPreop={validPreop}

              F11Val={F11Val} setF11Val={setF11Val} setF11St={setF11St}
              F12Val={F12Val} setF12Val={setF12Val} setF12St={setF12St}
              F13Val={F13Val} setF13Val={setF13Val} setF13St={setF13St}
              F14Val={F14Val} setF14Val={setF14Val} setF14St={setF14St}
              F15VS={F15VS} setF15VS={setF15VS}
              F16VS={F16VS} setF16VS={setF16VS}
              F17VS={F17VS} setF17VS={setF17VS}

              F21VS={F21VS} setF21VS={setF21VS}
              F22VS={F22VS} setF22VS={setF22VS}
              F23VS={F23VS} setF23VS={setF23VS}
              F24VS={F24VS} setF24VS={setF24VS}
              F25VS={F25VS} setF25VS={setF25VS}
              F26VS={F26VS} setF26VS={setF26VS}

              F31VS={F31VS} setF31VS={setF31VS}
              F32VS={F32VS} setF32VS={setF32VS}
              F33VS={F33VS} setF33VS={setF33VS}
              F34VS={F34VS} setF34VS={setF34VS}
              F35VS={F35VS} setF35VS={setF35VS}
              F36VS={F36VS} setF36VS={setF36VS}
              F37Val={F37Val} setF37Val={setF37Val}
              F38Val={F38Val} setF38Val={setF38Val}

              F41VS={F41VS} setF41VS={setF41VS}
              F42VS={F42VS} setF42VS={setF42VS}
              F43VS={F43VS} setF43VS={setF43VS}
              F44VS={F44VS} setF44VS={setF44VS}
              F45VS={F45VS} setF45VS={setF45VS}
              F46VS={F46VS} setF46VS={setF46VS}
              F47Val={F47Val} setF47Val={setF47Val}
              F48Val={F48Val} setF48Val={setF48Val}
            />)
            :
            <PostopData
              setStage={setStage}
              validPostop={validPostop}

              F51VS={F51VS} setF51VS={setF51VS}
              F52VS={F52VS} setF52VS={setF52VS}
              F53VS={F53VS} setF53VS={setF53VS}

              F61VS={F61VS} setF61VS={setF61VS}
              F62VS={F62VS} setF62VS={setF62VS}
              F63VS={F63VS} setF63VS={setF63VS}

              F81VS={F81VS} setF81VS={setF81VS}
              F82VS={F82VS} setF82VS={setF82VS}
              F83VS={F83VS} setF83VS={setF83VS}
              F84VS={F84VS} setF84VS={setF84VS}
              F85VS={F85VS} setF85VS={setF85VS}
              F86VS={F86VS} setF86VS={setF86VS}
              F87Val={F87Val} setF87Val={setF87Val}
              F88Val={F88Val} setF88Val={setF88Val}

              F91VS={F91VS} setF91VS={setF91VS}
              F92VS={F92VS} setF92VS={setF92VS}
              F93VS={F93VS} setF93VS={setF93VS}
              F94VS={F94VS} setF94VS={setF94VS}
              F95VS={F95VS} setF95VS={setF95VS}
              F96VS={F96VS} setF96VS={setF96VS}
              F97Val={F97Val} setF97Val={setF97Val}
              F98Val={F98Val} setF98Val={setF98Val}
            />
          }
          
      </div>
    )
}
