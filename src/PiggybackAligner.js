import React, {useState} from 'react'

import BarHeader from './common/BarHeader'
import Input from './aligner_piggyback/Input'
import Resume from './aligner_piggyback/Resume'
import Result from './aligner_piggyback/Result'

export default function PiggybackAligner() {

    const [showResume, setShowResume] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    
    window.onload = function() {
      setShowDisclaimer(true);
    };


    //Code for states for every input: 
    //(VS) [Value, Status] 
    //(Status) => -1=neutral, 0=invalid, 1=valid 
    
    // // Lens Selection // //
    //Type
    const [F11Val, setF11Val] = useState("Select")
    const [F11St, setF11St] = useState(-1)
    //Model
    const [F12VS, setF12VS] = useState(["",-1])
    //Type 
    const [lensType, setLensType] = useState(1);

    // // PRE OPERATIVE DATA // //
    //PATIENT DATA//
    //Patient ID
    const [F21Val, setF21Val] = useState("")
    const [F21St, setF21St] = useState(-1)
    //Surgeon ID
    const [F22Val, setF22Val] = useState("")
    const [F22St, setF22St] = useState(-1)
    //Eye
    const [F23Val, setF23Val] = useState("")
    const [F23St, setF23St] = useState(-1)
    //Ordered IOL Axis
    const [F24VS, setF24VS] = useState(["",-1])

    //PREOP MEASURES//
    //K1
    const [F31VS, setF31VS] = useState(["",-1])
    //K2
    const [F32VS, setF32VS] = useState(["",-1])
    //Steep Meridian
    const [F33VS, setF33VS] = useState(["",-1])
    //Magnitude
    const [F34VS, setF34VS] = useState(["",-1])

    //Sphere
    const [F41VS, setF41VS] = useState(["",-1])
    //Cylinder
    const [F42VS, setF42VS] = useState(["",-1])
    //Axis
    const [F43VS, setF43VS] = useState(["",-1])

    //OCT1
    //TCA 1
    //Magnitude
    const [F51VS, setF51VS] = useState(["",-1])
    //Axis
    const [F52VS, setF52VS] = useState(["",-1])
    //TCA 2
    //Magnitude
    const [F53VS, setF53VS] = useState(["",-1])
    //Axis
    const [F54VS, setF54VS] = useState(["",-1])
    //TCA 3
    //Magnitude
    const [F55VS, setF55VS] = useState(["",-1])
    //Axis
    const [F56VS, setF56VS] = useState(["",-1])
    //Averages
    //Magnitude
    const [F57Val, setF57Val] = useState("")
    //Axis
    const [F58Val, setF58Val] = useState("")


    // // POST OPERATIVE DATA // //
    //Implanted IOL Cylinder
    //Manufacturer
    const [F61VS, setF61VS] = useState(["",-1])
    //Model
    const [F62VS, setF62VS] = useState(["",-1])
    //Cyl Power
    const [F63VS, setF63VS] = useState(["",-1])
    //Corneal Plane
    const [F64VS, setF64VS] = useState([undefined,-1])

    //Postoperative Refraction
    //Sphere
    const [F71VS, setF71VS] = useState(["",-1])
    //Cylinder
    const [F72VS, setF72VS] = useState(["",-1])
    //Axis
    const [F73VS, setF73VS] = useState(["",-1])
    //ACD (epi to iol or acd - vaulting)
    const [F74VS, setF74VS] = useState(["",-1])
    //Vertex
    const [F75VS, setF75VS] = useState(["",-1])

    //Measured Corneal Astigmatism
    //TCA 1 
    //Magnitude
    const [F81VS, setF81VS] = useState(["",-1])
    //Axis
    const [F82VS, setF82VS] = useState(["",-1])
    //TCA 2
    //Magnitude
    const [F83VS, setF83VS] = useState(["",-1])
    //Axis
    const [F84VS, setF84VS] = useState(["",-1])
    //TCA 3 
    //Magnitude
    const [F85VS, setF85VS] = useState(["",-1])
    //Axis
    const [F86VS, setF86VS] = useState(["",-1])
    //Averages
    //Magnitude
    const [F87Val, setF87Val] = useState("")
    //Axis
    const [F88Val, setF88Val] = useState("")
    

    return (
      <div className='App'>

          <BarHeader/>

          <Input
          setShowResume={setShowResume}

          F11Val={F11Val} setF11Val={setF11Val}
          F11St={F11St} setF11St={setF11St}
          lensType={lensType} setLensType={setLensType}
          
          F12VS={F12VS} setF12VS={setF12VS}

          F21Val={F21Val} setF21Val={setF21Val}
          F21St={F21St} setF21St={setF21St}
          F22Val={F22Val} setF22Val={setF22Val}
          F22St={F22St} setF22St={setF22St}
          F23Val={F23Val} setF23Val={setF23Val}
          F23St={F23St} setF23St={setF23St}
          F24VS={F24VS} setF24VS={setF24VS}

          F31VS={F31VS} setF31VS={setF31VS}
          F32VS={F32VS} setF32VS={setF32VS}
          F33VS={F33VS} setF33VS={setF33VS}
          F34VS={F34VS} setF34VS={setF34VS}

          F41VS={F41VS} setF41VS={setF41VS}
          F42VS={F42VS} setF42VS={setF42VS}
          F43VS={F43VS} setF43VS={setF43VS}

          F51VS={F51VS} setF51VS={setF51VS}
          F52VS={F52VS} setF52VS={setF52VS}
          F53VS={F53VS} setF53VS={setF53VS}
          F54VS={F54VS} setF54VS={setF54VS}
          F55VS={F55VS} setF55VS={setF55VS}
          F56VS={F56VS} setF56VS={setF56VS}
          F57Val={F57Val} setF57Val={setF57Val}
          F58Val={F58Val} setF58Val={setF58Val}

          F61VS={F61VS} setF61VS={setF61VS}
          F62VS={F62VS} setF62VS={setF62VS}
          F63VS={F63VS} setF63VS={setF63VS}
          F64VS={F64VS} setF64VS={setF64VS}

          F71VS={F71VS} setF71VS={setF71VS}
          F72VS={F72VS} setF72VS={setF72VS}
          F73VS={F73VS} setF73VS={setF73VS}
          F74VS={F74VS} setF74VS={setF74VS}
          F75VS={F75VS} setF75VS={setF75VS}

          F81VS={F81VS} setF81VS={setF81VS}
          F82VS={F82VS} setF82VS={setF82VS}
          F83VS={F83VS} setF83VS={setF83VS}
          F84VS={F84VS} setF84VS={setF84VS}
          F85VS={F85VS} setF85VS={setF85VS}
          F86VS={F86VS} setF86VS={setF86VS}
          F87Val={F87Val} setF87Val={setF87Val}
          F88Val={F88Val} setF88Val={setF88Val}
          />

          <Resume 
          showResume={showResume} setShowResume={setShowResume}
          setShowResult={setShowResult}

          PatientID={F21Val} SurgeonName={F22Val}
          Eye={F23Val} OrderedAxis={F24VS[0]}

          K1={F31VS[0]} K2={F32VS[0]} SteepMeridian={F33VS[0]}
          AvgMagnitude1={F57Val} AvgAxis1={F58Val}

          IOLManufacturer={F61VS[0]} IOLModel={F62VS[0]}
          Sphere={F71VS[0]} Cylinder={F72VS[0]} Axis={F73VS[0]}
          ACD={F74VS[0]} Vertex={F75VS[0]}
          AvgMagnitude2={F87Val} AvgAxis2={F88Val}
          />

          <Result
          showResult={showResult} setShowResult={setShowResult}

          Lens={F12VS[0]} LensType={lensType}

          Patient={F21Val} Surgeon={F22Val}
          Eye={F23Val}
          K1={F31VS[0]} K2={F32VS[0]} SteepMeridian={F34VS[0]}
          AvgMagnitude1={F57Val} AvgAxis1={F58Val}
          IOLManufacturer={F61VS[0]} IOLModel={F62VS[0]}
          Sphere={F71VS[0]} Cylinder={F72VS[0]} Axis={F73VS[0]}
          ACD={F74VS[0]} Vertex={F75VS[0]}
          AvgMagnitude2={F87Val} AvgAxis2={F88Val}

          IOLPlane={F63VS[0]} IOLCornealPlane={parseFloat(F64VS[0])}

          PostopRefSphere={parseFloat(F71VS[0])}
          setPostopRefSphere={setF71VS}
          PostopRefCylinder={parseFloat(F72VS[0])}
          setPostopRefCylinder={setF72VS}
          PostopRefAxis={parseFloat(F73VS[0])}
          setPostopRefAxis={setF73VS}

          TCA1Magn1={parseFloat(F51VS[0])}
          TCA1Magn2={parseFloat(F53VS[0])}
          TCA1Magn3={parseFloat(F55VS[0])}
          TCA1Axis1={parseFloat(F52VS[0])}
          TCA1Axis2={parseFloat(F54VS[0])}
          TCA1Axis3={parseFloat(F56VS[0])}

          TCA2Magn1={parseFloat(F81VS[0])}
          TCA2Magn2={parseFloat(F83VS[0])}
          TCA2Magn3={parseFloat(F85VS[0])}
          TCA2Axis1={parseFloat(F82VS[0])}
          TCA2Axis2={parseFloat(F84VS[0])}
          TCA2Axis3={parseFloat(F86VS[0])}
        />
      </div>
    )
}
