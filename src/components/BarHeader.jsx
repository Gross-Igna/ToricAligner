import React from 'react'
import './barheader.css'
import { FaHistory, FaRegFlag } from 'react-icons/fa';
import {RiInformationLine} from 'react-icons/ri'
import {Container, Row, Col} from 'react-bootstrap';
import logo1 from '../../src/img/logo1.png'

export default function BarHeader() {
    return (
        <div className='barHeader'>
            <Container className='barContainer'>
                <Row className='barRow'>
                    <Col xs={6} className='vCenter'>
                        <a href='/'>
                            <img src={logo1} className='barIcon' alt='logo'></img>
                        </a>
                    </Col>
                    <Col xs={6} className='historyCol'>
                        <div className='history'>
                            <span className='barLink'><FaHistory/>&nbsp;My History</span>
                            <a href='/about'className='barLink'><RiInformationLine/>&nbsp;About Us</a>
                            <span className='barLink'><FaRegFlag/>&nbsp;Report error</span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
