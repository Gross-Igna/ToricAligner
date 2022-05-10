import React from 'react'
import './postopdata.css'
import PostopDataA from './forms/PostopDataA';
import {Container, Row, Col} from 'react-bootstrap';
import CalculateBtn from './forms/CalculateBtn';
import PostopDataB from './forms/PostopDataB';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs'

export default function PostopData({
    setStage, validPostop, setValidPostOct,

    F51VS, setF51VS,
    F52VS, setF52VS,
    F53VS, setF53VS,

    F61VS, setF61VS,
    F62VS, setF62VS,
    F63VS, setF63VS,

    F71VS, setF71VS,
    F72VS, setF72VS,
    F73VS, setF73VS,
    F74VS, setF74VS,
    F75VS, setF75VS,
    F76VS, setF76VS,

    F81VS, setF81VS,
    F82VS, setF82VS,
    F83VS, setF83VS,
    F84VS, setF84VS,
    F85VS, setF85VS,
    F86VS, setF86VS,
    F87Val, setF87Val,
    F88Val,setF88Val,

    F91VS, setF91VS,
    F92VS, setF92VS,
    F93VS, setF93VS,
    F94VS, setF94VS,
    F95VS, setF95VS,
    F96VS, setF96VS,
    F97Val, setF97Val,
    F98Val, setF98Val
}) {
  return (
    <Container className='postopData w-75'>

            <btn className='backBtn styledBox' onClick={() => {
                setStage(1);
            }}>
                <BsFillArrowLeftCircleFill/>&nbsp;&nbsp;Go back
            </btn>
        
            <Row className='title' style={{marginLeft: '6vw', paddingRight: '6vw'}}>
                <h1>Postoperative Data</h1>
            </Row>

            <Row className='formRow'>  
                <Col xs={9} className='vCenter'>
                    <PostopDataA
                        F51VS={F51VS} setF51VS={setF51VS}
                        F52VS={F52VS} setF52VS={setF52VS}
                        F53VS={F53VS} setF53VS={setF53VS}
            
                        F61VS={F61VS} setF61VS={setF61VS}
                        F62VS={F62VS} setF62VS={setF62VS}
                        F63VS={F63VS} setF63VS={setF63VS}
            
                        F71VS={F71VS} setF71VS={setF71VS}
                        F72VS={F72VS} setF72VS={setF72VS}
                        F73VS={F73VS} setF73VS={setF73VS}
                        F74VS={F74VS} setF74VS={setF74VS}
                        F75VS={F75VS} setF75VS={setF75VS}
                        F76VS={F76VS} setF76VS={setF76VS}
                    />      
                </Col>
                <Col xs={3} className='centeredCol'>
                    <CalculateBtn validPostop={validPostop}/>
                </Col>
            </Row>

            <Row className='formRow vCenter'>
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
            
                        F91VS={F91VS} setF91VS={setF91VS}
                        F92VS={F92VS} setF92VS={setF92VS}
                        F93VS={F93VS} setF93VS={setF93VS}
                        F94VS={F94VS} setF94VS={setF94VS}
                        F95VS={F95VS} setF95VS={setF95VS}
                        F96VS={F96VS} setF96VS={setF96VS}
                        F97Val={F97Val} setF97Val={setF97Val}
                        F98Val={F98Val} setF98Val={setF98Val}
                    />               
            </Row>


    </Container>
  )
}
