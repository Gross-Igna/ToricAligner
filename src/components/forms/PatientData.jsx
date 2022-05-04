import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import PatientName from './inputs/PatientName';
import SurgeonName from './inputs/SurgeonName';
import EyeLR from './inputs/EyeLR';
import Date from './inputs/Date';
import NumInput from './inputs/NumInput';

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
        <Row>
            <Row className='hCenter patientDataForm'>
                <Row>
                    <Col xs={6}>
                        <PatientName Val={F11Val} setVal={setF11Val} setSt={setF11St}/>
                    </Col>
                    <Col xs={6}>
                        <SurgeonName Val={F12Val} setVal={setF12Val} setSt={setF12St}/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} className='eyeCol'>
                        <EyeLR Val={F13Val} setVal={setF13Val} setSt={setF13St}/>
                    </Col>
                    <Col xs={6}>
                        <NumInput VS={F15VS} setVS={setF15VS}
                        label="Axial Length:"
                        placeholder="20~30"
                        min={20}
                        max={30}
                        step={0.1}
                        readonly={false}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <NumInput VS={F16VS} setVS={setF16VS}
                        label="IOL/Cornea cylinder ratio:"
                        placeholder="20~30"
                        min={20}
                        max={30}
                        step={0.1}
                        readonly={true}
                        />
                    </Col>
                    <Col xs={6}>
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
            </Row>
        </Row>
    )
}
