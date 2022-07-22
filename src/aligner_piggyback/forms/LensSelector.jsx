import React, {useState, useEffect} from 'react'
import {Container, Col, Row, Image} from 'react-bootstrap';

import Lenses from './inputs/Lenses';
import { types } from '../../helpers/enums/LensModels';
import './lensSelector.css'

export default function LensSelector({
    setStage,
    F11Val, setF11Val, setF11St,
    setF12VS,
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

    function handleClick434(id){
        if(id !== 'Select lens'){
            document.getElementById(id).style["background-color"] = '#f5f5f538';

            setF12VS(id);
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
                           <div>
                            <Row>
                                <div className='lensOption' id={option.name}
                                onClick={() => handleClick434(option.name)}>
                                    <img className='lensImg'
                                    src={require('./'+option.image+'.png')}></img>
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
