import React, { useState, Fragment } from 'react'
import './preopdata.css'
import patienticon from '../img/patient-border.png';
import PatientData from './forms/PatientData'
import PreopMeasures from './forms/PreopMeasures'
import ContinueBtn from './forms/ContinueBtn'
import {Container, Row, Col} from 'react-bootstrap';

export default function PreopData({
  setStage, validPreop,

  F11Val, setF11Val, setF11St,
  F12Val, setF12Val, setF12St,
  F13Val, setF13Val, setF13St,
  F14Val, setF14Val, setF14St,
  F15VS, setF15VS,
  F16VS, setF16VS,
  F17VS, setF17VS,

  F21VS, setF21VS,
  F22VS, setF22VS,
  F23VS, setF23VS,
  F24VS, setF24VS,
  F25VS, setF25VS,
  F26VS, setF26VS,

  F31VS, setF31VS,
  F32VS, setF32VS,
  F33VS, setF33VS,
  F34VS, setF34VS,
  F35VS, setF35VS,
  F36VS, setF36VS,
  F37Val, setF37Val,
  F38Val, setF38Val,

  F41VS, setF41VS,
  F42VS, setF42VS,
  F43VS, setF43VS,
  F44VS, setF44VS,
  F45VS, setF45VS,
  F46VS, setF46VS,
  F47Val, setF47Val,
  F48Val, setF48Val
  }) {
  
  return (
    <Container className='preopData'>

          <Row className='title'>
            <h1>Preoperative Data</h1>
          </Row>

          <Row className='formRow'>

              <Col className='vCenter'>

                <Row className='styledBox bigBlock'>

                  <Col className='formIconDiv block1'>
                    <Row>
                      Patient Data
                    </Row>
                    <Row>
                      <img src={patienticon} className='formIcon patient'/>
                    </Row>
                  </Col>

                  <Col className='vCenter block2'>
                    <PatientData 
                      F11Val={F11Val} setF11Val={setF11Val} setF11St={setF11St}
                      F12Val={F12Val} setF12Val={setF12Val} setF12St={setF12St}
                      F13Val={F13Val} setF13Val={setF13Val} setF13St={setF13St}
                      F14Val={F14Val} setF14Val={setF14Val} setF14St={setF14St}
                      F15VS={F15VS} setF15VS={setF15VS}
                      F16VS={F16VS} setF16VS={setF16VS}
                      F17VS={F17VS} setF17VS={setF17VS}
                    />
                  </Col>

                </Row>

              </Col>

              <Col className='calculateCol block3'>
                <ContinueBtn setStage={setStage}
                validPreop={validPreop}
                />
              </Col>
      
          </Row>

          <Row className='vCenter formRow'>
              <PreopMeasures
                F21VS={F21VS} setF21VS={setF21VS}
                F22VS={F22VS} setF22VS={setF22VS}
                F23VS={F23VS} setF23VS={setF23VS}
                F24VS={F24VS} setF24VS={setF24VS}
                F25VS={F25VS} setF25VS={setF25VS}
                F26VS={F26VS} setF26VS={setF26VS}

                F31VS={F31VS} setF31VS={setF31VS}
                F32VS={F32VS} setF32VS={setF32VS}
                F33VS={F33VS} setF33VS={setF33VS}
                F34VS={F34VS} setF34VS={setF34VS}
                F35VS={F35VS} setF35VS={setF35VS}
                F36VS={F36VS} setF36VS={setF36VS}
                F37Val={F37Val} setF37Val={setF37Val}
                F38Val={F38Val} setF38Val={setF38Val}

                F41VS={F41VS} setF41VS={setF41VS}
                F42VS={F42VS} setF42VS={setF42VS}
                F43VS={F43VS} setF43VS={setF43VS}
                F44VS={F44VS} setF44VS={setF44VS}
                F45VS={F45VS} setF45VS={setF45VS}
                F46VS={F46VS} setF46VS={setF46VS}
                F47Val={F47Val} setF47Val={setF47Val}
                F48Val={F48Val} setF48Val={setF48Val}
              />
          </Row>
    </Container>
  )
}
