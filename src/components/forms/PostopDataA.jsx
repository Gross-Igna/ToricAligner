import React, {useEffect} from 'react'
import patienticon from '../../img/patient-border.png';
import NumInput from './inputs/NumInput';
import {Container, Row, Col} from 'react-bootstrap';

export default function PostopDataA({
    F51VS, setF51VS,
    F52VS, setF52VS,
    F53VS, setF53VS,

    F61VS, setF61VS,
    F62VS, setF62VS,
    F63VS, setF63VS,

    F71VS, setF71VS,
    F72VS, setF72VS,
    F73VS, setF73VS,
    F74VS, setF74VS,
    F75VS, setF75VS,
    F76VS, setF76VS,
}) {

    //Automatic refresh for Corneal plane F52 input
    useEffect(() => {

        //Magnitude = K2-K1
        try {
            var cornealPlane = parseFloat(F51VS[0]) / parseFloat(1.5);
            setF52VS([ cornealPlane.toString().substring(0,4) , F52VS[1] ]);
        }catch(error){}

        if(F52VS[0] != "."){
            setF53VS( [ 90 , F53VS[1] ] );
        }

    }, [F51VS[0]]);

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
                    <Row>
                        <Row className='title2'>
                            Implanted IOL cilinder:
                        </Row>
                        <Row>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F51VS} setVS={setF51VS}
                                    label=""
                                    placeholder="IOL Plane"
                                    min={4}
                                    max={5}
                                    step={0.1}
                                    readonly={false}
                                />
                            </Col>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F52VS} setVS={setF52VS}
                                    label=""
                                    placeholder="Corneal plane"
                                    min={20}
                                    max={30}
                                    step={0.1}
                                    readonly={true}
                                />
                            </Col>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F53VS} setVS={setF53VS}
                                    label=""
                                    placeholder="Orientation"
                                    min={0}
                                    max={90}
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
                                    min={20}
                                    max={30}
                                    step={0.1}
                                    readonly={false}
                                />
                            </Col>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F62VS} setVS={setF62VS}
                                    label=""
                                    placeholder="Cylinder"
                                    min={20}
                                    max={30}
                                    step={0.1}
                                    readonly={false}
                                />
                            </Col>
                            <Col xs={4} className='noPadding'>
                                <NumInput VS={F63VS} setVS={setF63VS}
                                    label=""
                                    placeholder="Axis"
                                    min={20}
                                    max={30}
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
