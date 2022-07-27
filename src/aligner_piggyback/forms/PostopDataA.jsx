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
    F75VS, setF75VS,
}){

    const [CylReadOnly, setCylReadOnly] = useState(true);

    //Automatic refresh for Corneal plane F54 input
    useEffect(() => {
        
        try {
            let meanRatio = getMeanRatio(F15VS[0], F31VS[0], F32VS[0]);
            var cornealPlane = parseFloat(F63VS[0]) / meanRatio;
            setF64VS([ cornealPlane.toFixed(2) , 1 ]);
        }catch(error){}

    }, [F63VS[0]]);

    //Handle IOL Cyl power F53
    useEffect(() => {  

            let model = F62VS[0];
            
            if(model == ''){
                setF63VS([undefined, 0]);
            }else if(F61VS[0] === 'Alcon'){
                if(model == 'T2'){
                    setF63VS(['1', F63VS[1]]);
                }else if(model == 'T3'){
                    setF63VS(['1.5', F63VS[1]]);
                }
                else if(model == 'T4'){
                    setF63VS(['2.25', F63VS[1]]);
                }else if(model == 'T5'){
                    setF63VS(['3', F63VS[1]]);
                }else if(model == 'T6'){
                    setF63VS(['3.75', F63VS[1]]);
                }else if(model == 'T7'){
                    setF63VS(['4.5', F63VS[1]]);
                }else if(model == 'T8'){
                    setF63VS(['5.25', F63VS[1]]);
                }else if(model == 'T9'){
                    setF63VS(['6', F63VS[1]]);
                }
            }else if(F61VS[0] === 'B+L'){
                if(model == '1.25'){
                    setF63VS(['1.25', F63VS[1]]);
                }else if(model == '2'){
                    setF63VS(['2', F63VS[1]]);
                }else if(model == '2.75'){
                    setF63VS(['2.75', F63VS[1]]);
                }else if(model == '3.5'){
                    setF63VS(['3.5', F63VS[1]]);
                }else if(model == '4.25'){
                    setF63VS(['4.25', F63VS[1]]);
                }else if(model == '5'){
                    setF63VS(['5', F63VS[1]]);
                }else if(model == '5.75'){
                    setF63VS(['5.75', F63VS[1]]);
                }
            }else if(F61VS[0] === 'J&J' || F61VS[0] === 'Physiol'){
                if(model == '150'){
                    setF63VS(['1.50', F63VS[1]]);
                }else if(model == '225'){
                    setF63VS(['2.25', F63VS[1]]);
                }else if(model == '300'){
                    setF63VS(['3.00', F63VS[1]]);
                }else if(model == '375'){
                    setF63VS(['3.75', F63VS[1]]);
                }else if(model == '450'){
                    setF63VS(['4.50', F63VS[1]]);
                }else if(model == '525'){
                    setF63VS(['5.25', F63VS[1]]);
                }else if(model == '600'){
                    setF63VS(['6.00', F63VS[1]]);
                }
            }else if(F61VS[0] === 'Rayner'){
                if(model == '100'){
                    setF63VS(['1.00', F63VS[1]]);
                }else if(model == '150'){
                    setF63VS(['1.50', F63VS[1]]);
                }else if(model == '200'){
                    setF63VS(['2.00', F63VS[1]]);
                }else if(model == '250'){
                    setF63VS(['2.50', F63VS[1]]);
                }else if(model == '300'){
                    setF63VS(['3.00', F63VS[1]]);
                }else if(model == '350'){
                    setF63VS(['3.50', F63VS[1]]);
                }else if(model == '400'){
                    setF63VS(['4.00', F63VS[1]]);
                }else if(model == '450'){
                    setF63VS(['4.50', F63VS[1]]);
                }else if(model == '500'){
                    setF63VS(['5.00', F63VS[1]]);
                }else if(model == '550'){
                    setF63VS(['5.50', F63VS[1]]);
                }else if(model == '600'){
                    setF63VS(['6.00', F63VS[1]]);
                }
            }else if(F61VS[0] === 'Other'){
                setF63VS([undefined, -1]);
            }

    }, [F62VS[0]])

    //Handle Manufacturer (f51) change
    useEffect(() => {
        if( F61VS[0] === 'Other' ){
            setCylReadOnly(false);
        }else{
            setCylReadOnly(true);
        }

        setF62VS([undefined, -1])
        setF63VS([undefined, -1])
        setF64VS([undefined, -1])

    }, [F61VS[0]])

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
                            <Col className='noPadding' xs={(F61VS[0] === 'Other')? 4 : 6}>
                                <span>Implanted IOL cilinder:</span>
                            </Col>
                            <Col xs={(F61VS[0] === 'Other')? 4 : 3} className='helpLabel'
                            style={{opacity: (F63VS[0] === undefined || F63VS[0] === "")? '0' : '1'}}>
                                <span>Cyl Power</span>
                            </Col>
                            <Col xs={(F61VS[0] === 'Other')? 4 : 3} className='helpLabel'
                            style={{opacity: (F63VS[0] === undefined || F63VS[0] === "")? '0' : '1'}}>
                                <span>Corneal Plane</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col className='noPadding'>
                                <Manufacturer VS={F61VS} setVS={setF61VS}
                                modelVS={F62VS} setModelVS={setF62VS}/>
                            </Col>
                            <Col className='noPadding'
                            style={{display: (F61VS[0] === 'Other'
                            || F61VS[0] === undefined)? 'none' : null}}>
                                <Model VS={F62VS} setVS={setF62VS}
                                Mfact={F61VS[0]}/>
                            </Col>
                            <Col className='noPadding'
                            style={{display: (F61VS[0] === undefined)? 'none' : null}}>
                                <IOLCyl VS={F63VS} setVS={setF63VS}
                                    label=""
                                    placeholder="Cylinder Power"
                                    min={0}
                                    max={10}
                                    step={0.1}
                                    readonly={CylReadOnly}
                                    Mfact={F61VS[0]}
                                />
                            </Col>
                            <Col className='noPadding'
                            style={{display: (F61VS[0] === undefined)? 'none' : null}}
                            >
                                <NumInput VS={F64VS} setVS={setF64VS}
                                    label=""
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
                                <Col xs={4}>
                                    <NumInput VS={F71VS} setVS={setF71VS}
                                        label="Sphere:"
                                        placeholder="Sph"
                                        min={-15}
                                        max={10}
                                        step={0.1}
                                        readonly={false}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <NumInput VS={F72VS} setVS={setF72VS}
                                        label="Cylinder:"
                                        placeholder="Cyl"
                                        min={-15}
                                        max={10}
                                        step={0.1}
                                        readonly={false}
                                    />
                                </Col>
                                <Col xs={4}>
                                    <NumInput VS={F73VS} setVS={setF73VS}
                                        label="Axis:"
                                        placeholder="Axis"
                                        min={0}
                                        max={180}
                                        step={0.1}
                                        readonly={false}
                                    />
                                </Col>
                            </Row>
                            <Row className='postopRefRow'>
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
                                <Col xs={6}>
                                    <NumInput VS={F75VS} setVS={setF75VS}
                                        label="Vertex:"
                                        placeholder="Vertex"
                                        min={0}
                                        max={180}
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
