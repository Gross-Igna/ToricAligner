import React from 'react'
import './postopdata.css'
import patienticon from '../img/patient.png';
import {BsFillCalculatorFill} from 'react-icons/bs'
import Form2 from './forms/Form2'
import octicon from '../img/oct.png'
import {Container, Row, Col} from 'react-bootstrap';

export default function PostopData() {
  return (
    <Container>

        <Row>Postoperative data</Row>

        <Row>
            <Col>
                <Col xs={1} className='formIconDiv'>
                    <img src={patienticon} width='150vw' className='formIcon'/>
                </Col>
            </Col>
            <Col xs={6}>
                <Row>
                    <Col>
                        Implanted IOL cilinder:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Postoperative refraction:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                
                <Row>
                    Induced corneal astigmatism
                </Row>
                <Row>
                    <Col>
                        Scheimpflug / OCT1: 
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Scheimpflug / OCT2: 
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
            </Col>
            <Col xs={4} className='calculateCol'>
                <button className='calculateBtn' type="button">
                    Calculate<br></br><BsFillCalculatorFill/>
                </button>
            </Col>
        </Row>

        <Row>
            <Row>Postop Measures</Row>
            <Col xs={2} className='formIconDiv'>
                <img src={octicon} width='150vw' className='formIcon'/>
            </Col>
                
            <Col>
                <Row>
                    Scheimpflug / OCT1
                </Row>
                <Row>
                    <Col>
                        Measure 1:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Measure 2:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Measure 3:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Average Magnitude: 25,2
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Average Axis: 23,2                    
                    </Col>
                </Row>
            </Col>

            <Col>
                <Row>
                Scheimpflug / OCT2
                </Row>
                <Row>
                    <Col>
                        Measure 1:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Measure 2:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        Measure 3:
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Col>
                        <Form2/>
                    </Col>
                    <Row>
                        <Col>
                            Average Magnitude: 25,2
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            Average Axis: 23,2                    
                        </Col>
                    </Row>
                </Row>
            </Col>
        </Row>
    </Container>
  )
}
