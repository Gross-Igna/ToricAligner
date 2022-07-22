import React, { useEffect } from 'react'
import './preopdata.css'
import patienticon from '../img/patient-border.png';
import PatientData from './forms/PatientData'
import PreopMeasures from './forms/PreopMeasures'
import ContinueBtn from './forms/ContinueBtn'
import {Container, Row, Col} from 'react-bootstrap';

export default function PreopData({
    setStage, validPreop, setValidPreOct,

    F11Val, setF11Val, setF11St,
    F12Val, setF12Val, setF12St,
    F13Val, setF13Val, setF13St,
    F15VS, setF15VS,

    F21VS, setF21VS,
    F22VS, setF22VS,
    F23VS, setF23VS,
    F24VS, setF24VS,

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
    <Container fluid className='preopData w-75'>

        <Row className='title'>
          <h1 className='h1vCenter'>Preoperative Data</h1>
        </Row>

        <Row className='formRow'>

            <Col className='vCenter' xs={9}>

              <Row className='styledBox bigBlock'>

                <Col className='formIconDiv block1'>
                  <Row style={{marginBottom: '0.7vh'}}>
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
                    F15VS={F15VS} setF15VS={setF15VS}
                  />
                </Col>

              </Row>

            </Col>

            <Col className='calculateCol block3' xs={3}>
              <ContinueBtn setStage={setStage}
              validPreop={validPreop}
              />
            </Col>
    
        </Row>

        <Row className='vCenter formRow'>
            <PreopMeasures
              setValidPreOct={setValidPreOct}

              F21VS={F21VS} setF21VS={setF21VS}
              F22VS={F22VS} setF22VS={setF22VS}
              F23VS={F23VS} setF23VS={setF23VS}
              F24VS={F24VS} setF24VS={setF24VS}

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
