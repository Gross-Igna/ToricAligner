import React, {useState, useEffect} from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap';

import Lenses from './forms/inputs/Lenses';
import { types } from '../helpers/enums/LensModels';
import './lensSelector.css'

export default function LensSelector({
    setStage,
    F11Val, setF11Val, setF11St,
    F12VS, setF12VS, setLensType,
}) {
    
    const [options, setOptions] = useState([{name:'', manufacturer:['',''], image:'questionmark'}]);
    useEffect(() => {
        const recognizeOptions = () => {
            let tempVal = [];
            tempVal = types.filter((type) => type.manufacturer == F11Val);
            setOptions(tempVal);
        };
        recognizeOptions();
    }, [F11Val])

    function handleClick(id, type){
        if(id !== 'Select lens'){
            document.getElementById(id).style["background-color"] = '#f5f5f538';
            setTimeout(() => {
                document.getElementById(id).style["background-color"] = '#ffffff00';
            }, 1000)
            
            debugger;
            setF12VS(id);
            
            setLensType(type);
            setStage(1);
        }
    }

    return (
        <Container className='lensSelector w-75 vCenter'>
            <div className='styledBox lensSelectorBox'>
                <Row>
                    <Col className='lensSelectorTitle'>
                        <span>Select Lens Type:</span>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Lenses
                        Val={F11Val} setVal={setF11Val}
                        setSt={setF11St}
                        />
                    </Col>
                </Row>
                <Row>
                    <div className='lensSelectorFlexbox'>
                        {options.map((option) => (
                           <div style={{opacity: (option.name === 'Select lens')? '0' : '1'}}>
                            <Row>
                                <div className='lensOption' id={option.name}
                                onClick={() => handleClick(option.name, option.type)}>
                                    <img className='lensImg'
                                    src={require('./lensImages/'+option.image+'.png')}></img>
                                </div>
                            </Row>
                            <Row>
                                <span className='lensLabel'>{option.name}</span>
                            </Row>
                           </div>
                        ))}
                    </div>
                </Row>
                <Row>
                    <span className='lensHelpSpan'>(Click on lens image to select)</span>
                </Row>
            </div>
        </Container>
    )
}
