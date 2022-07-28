import React, {useEffect, useState} from 'react'
import {getMeanRatio} from '../../services/ToricCalculation';

import patienticon from '../../img/patient-border.png';
import NumInput from '../../common/inputs/NumInput';
import Manufacturer from '../../common/inputs/IOLManufacturer';
import IOLCyl from '../../common/inputs/IOLCyl';
import Model from '../../common/inputs/IOLModel';
import {Container, Row, Col} from 'react-bootstrap';

export default function PostopDataA({
    F15VS, F31VS, F32VS,

    F61VS, setF61VS,
    F62VS, setF62VS,
    F63VS, setF63VS,
    F64VS, setF64VS,

    F71VS, setF71VS,
    F72VS, setF72VS,
    F73VS, setF73VS,
    F74VS, setF74VS,
}){
    //Automatic refresh for Corneal plane F54 input
    useEffect(() => {
        
        try {
            let meanRatio = getMeanRatio(F15VS[0], F31VS[0], F32VS[0]);
            var cornealPlane = parseFloat(F63VS[0]) / meanRatio;
            setF64VS([ cornealPlane.toFixed(2) , 1 ]);
        }catch(error){}

    }, [F63VS[0]]);

    return (
            <Row className='styledBox bigBlock3'>

                <Col className='formIconDiv' xs={3}>
                    <Row style={{marginBottom: '0.4vh'}}>
                      Post Op <br></br> Patient Data
                    </Row>
                    <Row>
                      <img src={patienticon} className='formIcon patient'/>
                    </Row>
                </Col>

                <Col xs={9} className='formCol vCenter hCenter'>
                    <Row className='postopARow' style={{margin: '0.6vh 0 0.15vw 0'}}>
                        <Row className='title2' style={{marginBottom: '0.15vw'}}>
                            <Col className='noPadding' xs={6}>
                                <span>Implanted IOL Cylinder:</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <IOLCyl VS={F63VS} setVS={setF63VS}
                                    label="Cylinder Power:"
                                    placeholder="Cylinder Power"
                                    min={0}
                                    max={10}
                                    step={0.1}
                                />
                            </Col>
                            <Col>
                                <NumInput VS={F64VS} setVS={setF64VS}
                                    label="Corneal plane:"
                                    placeholder="Corneal plane"
                                    min={0}
                                    max={1000}
                                    step={0.1}
                                    readonly={true}
                                />
                            </Col>
                        </Row>
                    </Row>

                    <Row>
                        <Row>
                            <Row className='title2 noPadding' style={{margin: '1vh 0 0.2vh 0vh'}}>
                                Postoperative Refraction:
                            </Row>
                            <Row className='postopRefRow'>
                                <Col xs={6}>
                                    <NumInput VS={F71VS} setVS={setF71VS}
                                        label="Sphere:"
                                        placeholder="Sph"
                                        min={-15}
                                        max={10}
                                        step={0.1}
                                        readonly={false}
                                    />
                                </Col>
                                <Col xs={6}>
                                    <NumInput VS={F72VS} setVS={setF72VS}
                                        label="Cylinder:"
                                        placeholder="Cyl"
                                        min={-15}
                                        max={10}
                                        step={0.1}
                                        readonly={false}
                                    />
                                </Col>
                            </Row>
                            <Row className='postopRefRow'>
                                <Col xs={6}>
                                    <NumInput VS={F73VS} setVS={setF73VS}
                                        label="Axis:"
                                        placeholder="Axis"
                                        min={0}
                                        max={180}
                                        step={0.1}
                                        readonly={false}
                                    />
                                </Col>
                                <Col xs={6}>
                                    <NumInput VS={F74VS} setVS={setF74VS}
                                        label="ACD:"
                                        placeholder="Epi to IOL or ACD - Vaulting"
                                        min={-15}
                                        max={10}
                                        step={0.1}
                                        readonly={false}
                                    />
                                </Col>
                            </Row>
                        </Row>
                    </Row>
                </Col>
            </Row>
    )
}
