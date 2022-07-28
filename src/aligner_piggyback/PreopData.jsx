import React, {useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import './preopdata.css'

import PreopMeasures from './forms/PreopMeasures';
import PatientData from './forms/PatientData';
import ContinueBtn from '../common/ContinueBtn';

import patienticon from '../img/patient-border.png';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {IoRefreshCircle} from 'react-icons/io5'

export default function PreopData({
    stage, setStage, setValidPreOct, validPreop,

    lensType,

    F21Val, setF21Val, setF21St,
    F22Val, setF22Val, setF22St,
    F23Val, setF23Val, setF23St,
    F24VS, setF24VS,

    F31VS, setF31VS,
    F32VS, setF32VS,
    F33VS, setF33VS,
    F34VS, setF34VS,

    F41VS, setF41VS,
    F42VS, setF42VS,
    F43VS, setF43VS,
    F44VS, setF44VS,

    F51VS, setF51VS,
    F52VS, setF52VS,
    F53VS, setF53VS,
    F54VS, setF54VS,
    F55VS, setF55VS,
    F56VS, setF56VS,
    F57Val, setF57Val,
    F58Val, setF58Val,
}) {

  //Makes F24 Valid if lens is type 1
  useEffect(
    () => {
        if(lensType === '1'){
          setF24VS(["90", 1]);
        }
        else{
          setF24VS(["", -1]);
        }
    }
  ,[lensType])

  return (
    <Container fluid className='preopData w-75'>
      
      <div className='backBtn styledBox' onClick={() => {
          setStage(0);
      }}>
          <BsFillArrowLeftCircleFill/>
      </div>

      <div className='refreshBtn styledBox' onClick={() => {
          document.location.reload()
      }}>
          <IoRefreshCircle/>
      </div>

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
                lensType={lensType}
                F21Val={F21Val} setF21Val={setF21Val} setF21St={setF21St}
                F22Val={F22Val} setF22Val={setF22Val} setF22St={setF22St}
                F23Val={F23Val} setF23Val={setF23Val} setF23St={setF23St}
                F24VS={F24VS} setF24VS={setF24VS}
              />
            </Col>

          </Row>

        </Col>

        <Col className='calculateCol block3' xs={3}>
          <ContinueBtn 
          Stage={stage} setStage={setStage}
          validPreop={validPreop}
          />
        </Col>

      </Row>
      
      <Row className='vCenter formRow'>
        <PreopMeasures
          setValidPreOct={setValidPreOct}

          F31VS={F31VS} setF31VS={setF31VS}
          F32VS={F32VS} setF32VS={setF32VS}
          F33VS={F33VS} setF33VS={setF33VS}
          F34VS={F34VS} setF34VS={setF34VS}

          F41VS={F41VS} setF41VS={setF41VS}
          F42VS={F42VS} setF42VS={setF42VS}
          F43VS={F43VS} setF43VS={setF43VS}
          F44VS={F44VS} setF44VS={setF44VS}
          
          F51VS={F51VS} setF51VS={setF51VS}
          F52VS={F52VS} setF52VS={setF52VS}
          F53VS={F53VS} setF53VS={setF53VS}
          F54VS={F54VS} setF54VS={setF54VS}
          F55VS={F55VS} setF55VS={setF55VS}
          F56VS={F56VS} setF56VS={setF56VS}
          F57Val={F57Val} setF57Val={setF57Val}
          F58Val={F58Val} setF58Val={setF58Val}
        />
      </Row>
    </Container>
  )
}
