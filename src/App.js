import './App.css';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarHeader from './components/BarHeader';
import Input from './components/Input';
import Resume from './components/Resume';
import Result from './components/Result';

function App() {

    const [showResume, setShowResume] = useState(false);
    const [showResult, setShowResult] = useState(false);

    //Code for states for every input: 
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
      //Axial Length (numeric)
      const [F15VS, setF15VS] = useState(["",-1]);

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
      //Manufacturer
      const [F51VS, setF51VS] = useState("", -1)
      //Model
      const [F52VS, setF52VS] = useState("", -1)
      //Cylinder Power
      const [F53VS, setF53VS] = useState("...", -1)
      //Corneal Plane
      const [F54VS, setF54VS] = useState("...", -1)
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
    <div className="App">

      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;1,700&display=swap" rel="stylesheet"></link>

      <BarHeader/>
      <Input 
        setShowResume={setShowResume}
      
        F11Val={F11Val} setF11Val={setF11Val} 
        F11St={F11St} setF11St={setF11St}
        F12Val={F12Val} setF12Val={setF12Val} 
        F12St={F12St} setF12St={setF12St}
        F13Val={F13Val} setF13Val={setF13Val} 
        F13St={F13St} setF13St={setF13St}
        F15VS={F15VS} setF15VS={setF15VS}

        F21VS={F21VS} setF21VS={setF21VS}
        F22VS={F22VS} setF22VS={setF22VS}
        F23VS={F23VS} setF23VS={setF23VS}
        F24VS={F24VS} setF24VS={setF24VS}

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

        F51VS={F51VS} setF51VS={setF51VS}
        F52VS={F52VS} setF52VS={setF52VS}
        F53VS={F53VS} setF53VS={setF53VS}
        F54VS={F54VS} setF54VS={setF54VS}

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
      <Resume 
        showResume={showResume} setShowResume={setShowResume}
        setShowResult={setShowResult}

        PatientID={F11Val} SurgeonName={F12Val}
        Eye={F13Val} AxialLength={F15VS[0]}

        K1={F22VS[0]} K2={F21VS[0]} SteepMeridian={F24VS[0]}
        AvgMagnitude1={F37Val} AvgAxis1={F38Val}
        AvgMagnitude2={F47Val} AvgAxis2={F48Val}

        IOLManufacturer={F51VS[0]} IOLModel={F52VS[0]}
        Sphere={F61VS[0]} Cylinder={F62VS[0]} Axis={F63VS[0]}
        AvgMagnitude3={F87Val} AvgAxis3={F88Val}
        AvgMagnitude4={F97Val} AvgAxis4={F98Val}
      />
      <Result
        showResult={showResult} setShowResult={setShowResult}

        Eye={F13Val} AxialLength={F15VS[0]}
        K1={F22VS[0]} K2={F21VS[0]} SteepMeridian={F24VS[0]}
        AvgMagnitude1={F37Val} AvgAxis1={F38Val}
        AvgMagnitude2={F47Val} AvgAxis2={F48Val}
        IOLManufacturer={F51VS[0]} IOLModel={F52VS[0]}
        Sphere={F61VS[0]} Cylinder={F62VS[0]} Axis={F63VS[0]}
        AvgMagnitude3={F87Val} AvgAxis3={F88Val}
        AvgMagnitude4={F97Val} AvgAxis4={F98Val}
      />

    </div>
  );
}

export default App;
