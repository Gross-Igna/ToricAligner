import React from 'react'
import {Row, Col} from 'react-bootstrap';
import PatientName from '../../common/inputs/PatientName';
import SurgeonName from '../../common/inputs/SurgeonName';
import EyeLR from '../../common/inputs/EyeLR';
import NumInput from '../../common/inputs/NumInput';

export default function PatientData({
    lensType,
    F21Val, setF21Val, setF21St,
    F22Val, setF22Val, setF22St,
    F23Val, setF23Val, setF23St,
    F24VS, setF24VS,
    }) {

    return (
        <Row>
            <Row className='hCenter patientDataForm'>
                <Row>
                    <Col xs={6}>
                        <PatientName Val={F21Val} setVal={setF21Val} setSt={setF21St}/>
                    </Col>
                    <Col xs={6}>
                        <SurgeonName Val={F22Val} setVal={setF22Val} setSt={setF22St}/>
                    </Col>
                </Row>
                <Row>
                    <Col className='eyeCol'>
                        <EyeLR Val={F23Val} setVal={setF23Val} setSt={setF23St}/>
                    </Col>
                    <Col xs={6}
                    style={{display: (lensType==="1")? 'none' : null}}>
                        <NumInput VS={F24VS} setVS={setF24VS}
                        label="Ordered IOL Axis:"
                        placeholder="13~40"
                        min={0}
                        max={180}
                        step={0.1}
                        readonly={false}
                        />
                    </Col>
                </Row>
            </Row>
        </Row>
    )
}
