import React from 'react'
import Form1 from './Form1';
import Form2 from './Form2';
import {Row, Col} from 'react-bootstrap';
import octicon from '../../img/oct.png'

export default function PreopMeasures() {
  return (
    <Row>
        <Row>Preoperative Measures</Row>
        
        <Col xs={2} className='formIconDiv'>
            <img src={octicon} width='150vw' className='formIcon'/>
        </Col>

        <Col>
            <Row>
                Keratometric Astigmatism
            </Row>
            <Row>
                <Col>
                    <Form1/>
                </Col>
                <Col>
                    <Form1/>
                </Col>
            </Row>
            <Row>
                Optimized Astigmatism
            </Row>
            <Row>
                <Col>
                    <Form1/>    
                </Col>
                <Col>
                    <Form1/>
                </Col>
            </Row>
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
                Average Magnitude: 15,2
            </Row>
            <Row>
                Average Axis: 23,2
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
            </Row>
            <Row>
                Average Magnitude: 25,2
            </Row>
            <Row>
                Average Axis: 24,2
            </Row>    
        </Col>

    </Row>
  )
}
