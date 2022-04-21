import React from 'react'
import './preopdata.css'
import PatientData from './forms/PatientData'
import PreopMeasures from './forms/PreopMeasures'
import CalculateBtn from './forms/CalculateBtn'
import {Container, Row, Col} from 'react-bootstrap';

export default function PreopData({
  F11Val, setF11Val, setF11St,
  F12Val, setF12Val, setF12St,
  F15VS, setF15VS
  }) {
  return (
    <Container fluid>
        <Row>
          Preoperative data
        </Row>
        <Row>
          <Col xs={8}>
            <PatientData 
              F11Val={F11Val} setF11Val={setF11Val} setF11St={setF11St}
              F12Val={F12Val} setF12Val={setF12Val} setF12St={setF12St}
              F15VS={F15VS} setF15VS={setF15VS}
            />
          </Col>
          <Col xs={4} className='calculateCol'>
            <CalculateBtn/>
          </Col>
        </Row>
        <Row>
          <PreopMeasures/>
        </Row>
    </Container>
  )
}
