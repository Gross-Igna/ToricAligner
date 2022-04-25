import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import patienticon from '../../img/patient.png';
import PatientName from './inputs/PatientName';
import SurgeonName from './inputs/SurgeonName';
import EyeLR from './inputs/EyeLR';
import Date from './inputs/Date';
import NumInput from './inputs/NumInput';
import Form1 from './Form1';

export default function patientData({
    F11Val, setF11Val, setF11St,
    F12Val, setF12Val, setF12St,
    F13Val, setF13Val, setF13St,
    F14Val, setF14Val, setF14St,
    F15VS, setF15VS,
    F16VS, setF16VS,
    F17VS, setF17VS
    }) {

    return (
    <Container>
            <Row>
                <Row>
                    Patient data
                </Row>
                <Col xs={2} className='formIconDiv'>
                    <img src={patienticon} width='150vw' className='formIcon'/>
                </Col>
                <Col xs={10}>
                <Row>
                    <PatientName Val={F11Val} setVal={setF11Val} setSt={setF11St}/>
                </Row>
                <Row>
                    <Col>
                        <SurgeonName Val={F12Val} setVal={setF12Val} setSt={setF12St}/>
                    </Col>
                    <Col>
                        <EyeLR Val={F13Val} setVal={setF13Val} setSt={setF13St}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Date Val={F14Val} setVal={setF14Val} setSt={setF14St}/>
                    </Col>
                    <Col>
                        <NumInput VS={F15VS} setVS={setF15VS}
                        label="Axial Length"
                        placeholder="20~30"
                        min={20}
                        max={30}
                        step={0.1}
                        readonly={false}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <NumInput VS={F16VS} setVS={setF16VS}
                        label="IOL/Cornea cylinder ratio:"
                        placeholder="20~30"
                        min={20}
                        max={30}
                        step={0.1}
                        readonly={true}
                        />
                    </Col>
                    <Col>
                        <NumInput VS={F17VS} setVS={setF17VS}
                        label="Required cylinder at IOL plane:"
                        placeholder="20~30"
                        min={20}
                        max={30}
                        step={0.1}
                        readonly={true}
                        />
                    </Col>
                </Row>
                </Col>
            </Row>
    </Container>
    )
}
