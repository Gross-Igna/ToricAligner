import React, {useState, useEffect} from 'react'
import { Carousel } from 'react-bootstrap';
import '../input.css';
import LensSelector from './forms/LensSelector';

import argFlag from '../img/argentina.png'
import itaFlag from '../img/italy.png'

export default function Input({
    F11Val, setF11Val, F11St, setF11St,
    
    F12VS, setF12VS,
}) {

    const [stage, setStage] = useState(0);

    return (
        <div className='input'>
            <Carousel controls={false} interval={null} activeIndex={stage}>
                <Carousel.Item>
                    <LensSelector
                    F11Val={F11Val} setF11Val={setF11Val}
                    setF11St={setF11St}
                    setF12VS={setF12VS}
                    setStage={setStage}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <div>2</div>
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
