import React, {useEffect, useState} from 'react'
import patienticon from '../../img/patient-border.png';
import NumInput from './inputs/NumInput';
import Manufacturer from './inputs/IOLManufacturer';
import IOLCyl from './inputs/IOLCyl';
import Model from './inputs/IOLModel';
import {Container, Row, Col} from 'react-bootstrap';

export default function PostopDataA({
    F51VS, setF51VS,
    F52VS, setF52VS,
    F53VS, setF53VS,
    F54VS, setF54VS,

    F61VS, setF61VS,
    F62VS, setF62VS,
    F63VS, setF63VS,

    F71VS, setF71VS,
    F72VS, setF72VS,
    F73VS, setF73VS,
    F74VS, setF74VS,
    F75VS, setF75VS,
    F76VS, setF76VS,
}){

    const [CylReadOnly, setCylReadOnly] = useState(true);

    //Automatic refresh for Corneal plane F52 input
    useEffect(() => {

        try {
            var cornealPlane = parseFloat(F53VS[0]) / parseFloat(1.5);
            setF54VS([ cornealPlane.toString().substring(0,4) , F54VS[1] ]);
        }catch(error){}

    }, [F53VS[0]]);

    //Handle IOL Plane
    useEffect(() => {  

            let model = F52VS[0];
            
            if(F52VS[0] == ''){
                setF53VS(['', 0]);
            }else if(F51VS[0] === 'Alcon'){
                if(model == 'T3'){
                    setF53VS(['1.5', F53VS[1]]);
                }else if(model == 'T4'){
                    setF53VS(['2.25', F53VS[1]]);
                }else if(model == 'T5'){
                    setF53VS(['3', F53VS[1]]);
                }else if(model == 'T6'){
                    setF53VS(['3.75', F53VS[1]]);
                }else if(model == 'T7'){
                    setF53VS(['4.5', F53VS[1]]);
                }else if(model == 'T8'){
                    setF53VS(['5.25', F53VS[1]]);
                }else if(model == 'T9'){
                    setF53VS(['6', F53VS[1]]);
                }
            }else if(F51VS[0] === 'B+L'){
                if(model == '1.25'){
                    setF53VS(['1.25', F53VS[1]]);
                }else if(model == '2'){
                    setF53VS(['2', F53VS[1]]);
                }else if(model == '2.75'){
                    setF53VS(['2.75', F53VS[1]]);
                }else if(model == '3.5'){
                    setF53VS(['3.5', F53VS[1]]);
                }else if(model == '4.25'){
                    setF53VS(['4.25', F53VS[1]]);
                }else if(model == '5'){
                    setF53VS(['5', F53VS[1]]);
                }else if(model == '5.75'){
                    setF53VS(['5.75', F53VS[1]]);
                }
            }else if(F51VS[0] === 'JandJ' || F51VS[0] === 'Physiol'){
                if(model == '150'){
                    setF53VS(['150', F53VS[1]]);
                }else if(model == '225'){
                    setF53VS(['2.25', F53VS[1]]);
                }else if(model == '300'){
                    setF53VS(['3.00', F53VS[1]]);
                }else if(model == '375'){
                    setF53VS(['3.75', F53VS[1]]);
                }else if(model == '450'){
                    setF53VS(['4.50', F53VS[1]]);
                }else if(model == '525'){
                    setF53VS(['5.25', F53VS[1]]);
                }else if(model == '600'){
                    setF53VS(['6.00', F53VS[1]]);
                }
            }else if(F51VS[0] === 'Rayner'){
                if(model == '100'){
                    setF53VS(['1.00', F53VS[1]]);
                }else if(model == '150'){
                    setF53VS(['1.50', F53VS[1]]);
                }else if(model == '200'){
                    setF53VS(['2.00', F53VS[1]]);
                }else if(model == '250'){
                    setF53VS(['2.50', F53VS[1]]);
                }else if(model == '300'){
                    setF53VS(['3.00', F53VS[1]]);
                }else if(model == '350'){
                    setF53VS(['3.50', F53VS[1]]);
                }else if(model == '400'){
                    setF53VS(['4.00', F53VS[1]]);
                }else if(model == '450'){
                    setF53VS(['4.50', F53VS[1]]);
                }else if(model == '500'){
                    setF53VS(['5.00', F53VS[1]]);
                }else if(model == '550'){
                    setF53VS(['5.50', F53VS[1]]);
                }else if(model == '600'){
                    setF53VS(['6.00', F53VS[1]]);
                }
            }

    }, [F52VS[0]])

    useEffect(() => {
        if( F51VS[0] === 'Custom' ){
            setCylReadOnly(false);
            setF53VS([undefined, 0])
        }else{
            setCylReadOnly(true);
        }

        setF52VS(['', F52VS[1]])

    }, [F51VS[0]])

    return (
            <Row className='styledBox bigBlock3'>

                <Col className='formIconDiv' xs={3}>
                    <Row>
                      Post Op <br></br> Patient Data
                    </Row>
                    <Row>
                      <img src={patienticon} className='formIcon patient'/>
                    </Row>
                </Col>

                <Col xs={9} className='formCol vCenter hCenter'>
                    <Row className='postopARow' style={{marginBottom: '0.15vw'}}>
                        <Row className='title2' style={{marginBottom: '0.15vw'}}>
                            Implanted IOL cilinder:
                        </Row>
                        <Row>
                            <Col className='noPadding'>
                                <Manufacturer VS={F51VS} setVS={setF51VS}
                                modelVS={F52VS} setModelVS={setF52VS}/>
                            </Col>
                            <Col className='noPadding'
                            style={{display: (F51VS[0] === 'Custom'
                            || F51VS[0] === undefined)? 'none' : null}}>
                                <Model VS={F52VS} setVS={setF52VS}
                                Mfact={F51VS[0]}/>
                            </Col>
                            <Col className='noPadding'
                            style={{display: (F51VS[0] === undefined)? 'none' : null}}>
                                <IOLCyl VS={F53VS} setVS={setF53VS}
                                    label=""
                                    placeholder="Cylinder Power"
                                    min={0}
                                    max={1000}
                                    step={0.1}
                                    readonly={CylReadOnly}
                                    Mfact={F51VS[0]}
                                />
                            </Col>
                            <Col className='noPadding'
                            style={{display: (F51VS[0] === undefined)? 'none' : null}}
                            >
                                <NumInput VS={F54VS} setVS={setF54VS}
                                    label=""
                                    placeholder="Corneal plane"
                                    min={0}
                                    max={3110}
                                    step={0.1}
                                    readonly={true}
                                />
                            </Col>
                        </Row>
                    </Row>

                    <Row>
                        <Row>
                            <Row className='title2'>
                                Postoperative Refraction:
                            </Row>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F61VS} setVS={setF61VS}
                                    label=""
                                    placeholder="Sphere"
                                    min={-20}
                                    max={20}
                                    step={0.1}
                                    readonly={false}
                                />
                            </Col>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F62VS} setVS={setF62VS}
                                    label=""
                                    placeholder="Cylinder"
                                    min={-20}
                                    max={20}
                                    step={0.1}
                                    readonly={false}
                                />
                            </Col>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F63VS} setVS={setF63VS}
                                    label=""
                                    placeholder="Axis"
                                    min={0}
                                    max={180}
                                    step={0.1}
                                    readonly={false}
                                />
                            </Col>
                        </Row>
                    </Row>
                </Col>
            </Row>
    )
}
