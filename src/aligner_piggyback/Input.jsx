import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-bootstrap';
import '../input.css';
import LensSelector from './LensSelector';
import PreopData from './PreopData';
import PostopData from './PostopData';

import argFlag from '../img/argentina.png'
import itaFlag from '../img/italy.png'

export default function Input({
    setShowResume,

    F11Val, setF11Val, F11St, setF11St,
    F12VS, setF12VS, lensType, setLensType,

    F21Val, setF21Val, F21St, setF21St,
    F22Val, setF22Val, F22St, setF22St,
    F23Val, setF23Val, F23St, setF23St,
    F24VS, setF24VS,

    F31VS, setF31VS,
    F32VS, setF32VS,
    F33VS, setF33VS,
    F34VS, setF34VS,

    F41VS, setF41VS,
    F42VS, setF42VS,
    F43VS, setF43VS,
    F44VS, setF44VS,

    F51VS, setF51VS,
    F52VS, setF52VS,
    F53VS, setF53VS,
    F54VS, setF54VS,
    F55VS, setF55VS,
    F56VS, setF56VS,
    F57Val, setF57Val,
    F58Val, setF58Val,

    F63VS, setF63VS,
    F64VS, setF64VS,

    F71VS, setF71VS,
    F72VS, setF72VS,
    F73VS, setF73VS,
    F74VS, setF74VS,

    F81VS, setF81VS,
    F82VS, setF82VS,
    F83VS, setF83VS,
    F84VS, setF84VS,
    F85VS, setF85VS,
    F86VS, setF86VS,
    F87Val, setF87Val,
    F88Val, setF88Val,
}) {

    const [stage, setStage] = useState(0);

    const [validPreop, setValidPreop] = useState(false);
    const [validPreOct, setValidPreOct] = useState(false);

    const [validPostOct, setValidPostOct] = useState(false);
    const [validPostop, setValidPostop] = useState(false);

    //UseEffect to check if form is valid after any change
    //Preop Validation
    useEffect(() => {
        
        if(
            F21St == 1 && 
            F22St == 1 &&
            F23St == 1 &&
            F24VS[1] == 1 &&

            F31VS[1] == 1 &&
            F32VS[1] == 1 &&
            F33VS[1] == 1 &&
            F34VS[1] == 1 &&
            
            F41VS[1] == 1 &&
            F42VS[1] == 1 &&
            F43VS[1] == 1 &&
            F44VS[1] == 1 &&

            validPreOct
        ){
            setValidPreop(true);
        }else{
            setValidPreop(false);
        }

    })

    //Postop Validation
    useEffect(() => {
        if(
          F64VS[1] == 1 &&
  
          F71VS[1] == 1 &&
          F72VS[1] == 1 &&
          F73VS[1] == 1 &&
          F74VS[1] == 1 &&
  
          validPostOct
        ){
          setValidPostop(true);
        }else{
          setValidPostop(false);
        }
      })

    window.onkeydown = function(event) {
        if (event.keyCode === 188) {
            var commasAlert = "Warning! Please only use dot (.) as decimal separator."
            window.alert(commasAlert);
        }
    }
    return (
        <div className='input'>
            <Carousel controls={false} interval={null} activeIndex={stage}>
                <Carousel.Item>
                    <LensSelector
                    F11Val={F11Val} setF11Val={setF11Val}
                    setF11St={setF11St}
                    F12VS={F12VS} setF12VS={setF12VS}
                    setLensType={setLensType}
                    
                    setStage={setStage}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <PreopData
                    stage={stage} setStage={setStage} 
                    setValidPreOct={setValidPreOct}
                    validPreop={validPreop}

                    F21Val={F21Val} setF21Val={setF21Val}
                    lensType={lensType}
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
                    F44VS={F44VS} setF44VS={setF44VS}
                    
                    F51VS={F51VS} setF51VS={setF51VS}
                    F52VS={F52VS} setF52VS={setF52VS}
                    F53VS={F53VS} setF53VS={setF53VS}
                    F54VS={F54VS} setF54VS={setF54VS}
                    F55VS={F55VS} setF55VS={setF55VS}
                    F56VS={F56VS} setF56VS={setF56VS}
                    F57Val={F57Val} setF57Val={setF57Val}
                    F58Val={F58Val} setF58Val={setF58Val}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <PostopData
                    setStage={setStage}
                    validPostop={validPostop}
                    setValidPostOct={setValidPostOct}
                    setShowResume={setShowResume}

                    F15VS={"24.17"} F31VS={F31VS} F32VS={F32VS}

                    F63VS={F63VS} setF63VS={setF63VS}
                    F64VS={F64VS} setF64VS={setF64VS}
          
                    F71VS={F71VS} setF71VS={setF71VS}
                    F72VS={F72VS} setF72VS={setF72VS}
                    F73VS={F73VS} setF73VS={setF73VS}
                    F74VS={F74VS} setF74VS={setF74VS}
          
                    F81VS={F81VS} setF81VS={setF81VS}
                    F82VS={F82VS} setF82VS={setF82VS}
                    F83VS={F83VS} setF83VS={setF83VS}
                    F84VS={F84VS} setF84VS={setF84VS}
                    F85VS={F85VS} setF85VS={setF85VS}
                    F86VS={F86VS} setF86VS={setF86VS}
                    F87Val={F87Val} setF87Val={setF87Val}
                    F88Val={F88Val} setF88Val={setF88Val}
                    />
                </Carousel.Item>
            </Carousel>

            <div className='waterMark' style={{textAlign: 'right'}}>
            <span>
                Developed by: 
                Dr. Savini Giacomo <img src={itaFlag} className='flag' alt='italy'></img> 
                &nbsp;&nbsp;Dr. Buonsanti Dante <img src={argFlag} className='flag' alt='argentina'></img>
            </span>
            </div>
        </div>
    )
}
