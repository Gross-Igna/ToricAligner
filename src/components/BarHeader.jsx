import React, {useRef} from 'react'
import './barheader.css'
import { FaHistory } from 'react-icons/fa';
import {Navbar, Container, Row, Col} from 'react-bootstrap';

export default function BarHeader() {
    return (
    <Navbar className='barHeader'>
        <Container className='barContainer'>
            <Row className='barRow'>
                <Col sm={11}>
                    <div className='brand'>
                        <b>Toric <br></br>Aligner  Logo</b>
                    </div>
                </Col>
                <Col sm={1}>
                    <div className='history'>
                        <span><FaHistory/>&nbsp;Ver mi historial</span>
                    </div>
                </Col>
            </Row>
        </Container>
    </Navbar>
  )
}
