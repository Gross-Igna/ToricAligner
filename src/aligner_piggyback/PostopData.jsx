import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import './postopdata.css'

import PostopDataA from './forms/PostopDataA';
import CalculateBtn from './CalculateBtn';
import PostopDataB from './forms/PostopDataB';

import {BsFillArrowLeftCircleFill} from 'react-icons/bs'
import {IoRefreshCircle} from 'react-icons/io5'

export default function PostopData({
    setStage, validPostop, 
    setValidPostOct, setShowResume,

    F15VS, F31VS, F32VS,

    F63VS, setF63VS,
    F64VS, setF64VS,

    F71VS, setF71VS,
    F72VS, setF72VS,
    F73VS, setF73VS,
    F74VS, setF74VS,

    F81VS, setF81VS,
    F82VS, setF82VS,
    F83VS, setF83VS,
    F84VS, setF84VS,
    F85VS, setF85VS,
    F86VS, setF86VS,
    F87Val, setF87Val,
    F88Val, setF88Val,
}) {
  return (
    <Container className='postopData w-75'>

            <div className='backBtn styledBox' 
            style={{left: '-2vw'}}
            onClick={() => {
                setStage(1);
            }}>
                <BsFillArrowLeftCircleFill/>
            </div>

            <div className='refreshBtn styledBox' onClick={() => {
                document.location.reload()
            }}>
                <IoRefreshCircle/>
            </div>
        
            <Row className='title' style={{marginLeft: '6vw', paddingRight: '6vw'}}>
                <h1>Postoperative Data</h1>
            </Row>

            <Row style={{height: '100%'}}>
                <Col xs={9}>
                    <Row className='formRow' style={{marginTop: '2vh'}}>  
                        <Col xs={12} className='vCenter'>
                            <PostopDataA
                                F15VS={F15VS} F31VS={F31VS} F32VS={F32VS}
                                
                                F63VS={F63VS} setF63VS={setF63VS}
                                F64VS={F64VS} setF64VS={setF64VS}
                    
                                F71VS={F71VS} setF71VS={setF71VS}
                                F72VS={F72VS} setF72VS={setF72VS}
                                F73VS={F73VS} setF73VS={setF73VS}
                                F74VS={F74VS} setF74VS={setF74VS}
                            />      
                        </Col>
                    </Row>
                    <Row className='formRow'>
                        <Col xs={12} className='hCenter vCenter postopMeasurements'>
                            <PostopDataB
                                setValidPostOct={setValidPostOct}

                                F81VS={F81VS} setF81VS={setF81VS}
                                F82VS={F82VS} setF82VS={setF82VS}
                                F83VS={F83VS} setF83VS={setF83VS}
                                F84VS={F84VS} setF84VS={setF84VS}
                                F85VS={F85VS} setF85VS={setF85VS}
                                F86VS={F86VS} setF86VS={setF86VS}
                                F87Val={F87Val} setF87Val={setF87Val}
                                F88Val={F88Val} setF88Val={setF88Val}
                            />
                        </Col>
                    </Row>
                            
                </Col>

                <Col xs={3} className='vCenter'>
                    <CalculateBtn validPostop={validPostop} setShowResume={setShowResume}/>
                </Col>

            </Row>
            
    </Container>
  )
}
