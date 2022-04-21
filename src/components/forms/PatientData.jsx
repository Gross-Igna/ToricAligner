import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import patienticon from '../../img/patient.png';
import PatientName from './inputs/PatientName';
import SurgeonName from './inputs/SurgeonName';
import NumInput from './inputs/NumInput';
import Form1 from './Form1';

export default function patientData({
    F11Val, setF11Val, setF11St,
    F12Val, setF12Val, setF12St,
    F15VS, setF15VS
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
                    <Form1/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form1/>
                    </Col>
                    <Col>
                        <NumInput VS={F15VS} setVS={setF15VS}
                        label="Axial Length"
                        placeholder="20~30"
                        min={20}
                        max={30}
                        step={0.1}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <Form1/>
                    </Col>
                    <Col>
                    <Form1/>
                    </Col>
                </Row>
                </Col>
            </Row>
    </Container>
    )
}
