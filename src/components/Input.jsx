import React, { useEffect } from 'react'
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import PreopData from './PreopData';
import PostopData from './PostopData';
import './input.css';

import argFlag from '../img/argentina.png'
import itaFlag from '../img/italy.png'

export default function Input(
  {
    setShowResume,

    F11Val, setF11Val, F11St, setF11St,
    F12Val, setF12Val, F12St, setF12St,
    F13Val, setF13Val, F13St, setF13St,
    F15VS, setF15VS,

    F21VS, setF21VS,
    F22VS, setF22VS,
    F23VS, setF23VS,
    F24VS, setF24VS,

    F31VS, setF31VS,
    F32VS, setF32VS,
    F33VS, setF33VS,
    F34VS, setF34VS,
    F35VS, setF35VS,
    F36VS, setF36VS,
    F37Val, setF37Val,
    F38Val, setF38Val,

    F41VS, setF41VS,
    F42VS, setF42VS,
    F43VS, setF43VS,
    F44VS, setF44VS,
    F45VS, setF45VS,
    F46VS, setF46VS,
    F47Val, setF47Val,
    F48Val, setF48Val,

    F51VS, setF51VS,
    F52VS, setF52VS,
    F53VS, setF53VS,
    F54VS, setF54VS,

    F61VS, setF61VS,
    F62VS, setF62VS,
    F63VS, setF63VS,

    F81VS, setF81VS,
    F82VS, setF82VS,
    F83VS, setF83VS,
    F84VS, setF84VS,
    F85VS, setF85VS,
    F86VS, setF86VS,
    F87Val, setF87Val,
    F88Val,setF88Val,

    F91VS, setF91VS,
    F92VS, setF92VS,
    F93VS, setF93VS,
    F94VS, setF94VS,
    F95VS, setF95VS,
    F96VS, setF96VS,
    F97Val, setF97Val,
    F98Val, setF98Val
  }) {
    
    //Stage: 1=>Preoperative 2=>Postoperative 
    const [stage, setStage] = useState(0);

    //Reference for knowing if form is valid
    const [validPreop, setValidPreop] = useState(true);
    const [validPreOct, setValidPreOct] = useState(false);
    const [validPostop, setValidPostop] = useState(false);
    const [validPostOct, setValidPostOct] = useState(false);

    //UseEffect to check if form is valid after any change
    useEffect(() => {

      if(
        F11St == 1 && 
        F12St == 1 &&
        F13St == 1 &&
        F15VS[1] == 1 &&

        F21VS[1] == 1 &&
        F22VS[1] == 1 &&
        F23VS[1] == 1 &&
        F24VS[1] == 1 &&

        validPreOct
      ){
        setValidPreop(true);
      }else{
        setValidPreop(false);
      }
      
    })

    useEffect(() => {
      if(
        F53VS[1] == 1 &&
        //F54VS[1] == 1 &&

        F61VS[1] == 1 &&
        F62VS[1] == 1 &&
        F63VS[1] == 1 &&

        validPostOct
      ){
        setValidPostop(true);
      }else{
        setValidPostop(false);
      }
    })

    return (
      <div className='input'>
        
        <script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM">
        </script>

        <Carousel controls={false} interval={null} activeIndex={stage}>
          <Carousel.Item>
            <PreopData 
                setStage={setStage}
                validPreop={validPreop}
                setValidPreOct={setValidPreOct}
                
                F11Val={F11Val} setF11Val={setF11Val} setF11St={setF11St}
                F12Val={F12Val} setF12Val={setF12Val} setF12St={setF12St}
                F13Val={F13Val} setF13Val={setF13Val} setF13St={setF13St}
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
              />
          </Carousel.Item>
          <Carousel.Item>
            <PostopData
                setStage={setStage}
                validPostop={validPostop}
                setValidPostOct={setValidPostOct}
                setShowResume={setShowResume}

                F15VS={F15VS} F21VS={F21VS} F22VS={F22VS}

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
