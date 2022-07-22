import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import PatientName from '../../common/inputs/PatientName';
import SurgeonName from '../../common/inputs/SurgeonName';
import EyeLR from '../../common/inputs/EyeLR';
import NumInput from '../../common/inputs/NumInput';

export default function patientData({
    F11Val, setF11Val, setF11St,
    F12Val, setF12Val, setF12St,
    F13Val, setF13Val, setF13St,
      setF14St,
    F15VS, setF15VS
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
                        placeholder="13~40"
                        min={13}
                        max={40}
                        step={0.1}
                        readonly={false}
                        />
                    </Col>
                </Row>
            </Row>
        </Row>
    )
}
