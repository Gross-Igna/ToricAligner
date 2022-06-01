import React from 'react';
import {AiOutlineCloseCircle, AiOutlineFileSearch} from 'react-icons/ai';
import {RiCheckboxCircleLine, RiArrowGoBackLine} from 'react-icons/ri';
import {Container, Row, Col} from 'react-bootstrap'
import './resume.css'
import Manufacturer from './forms/inputs/IOLManufacturer';

export default function Resume({
    showResume, setShowResume,
    setShowResult,

    PatientID, SurgeonName, Eye, AxialLength,

    K1, K2, SteepMeridian,
    AvgMagnitude1, AvgAxis1,
    AvgMagnitude2, AvgAxis2,

    IOLManufacturer, IOLModel,
    Sphere, Cylinder, Axis,
    AvgMagnitude3, AvgAxis3,
    AvgMagnitude4, AvgAxis4
    }) {
    
    function confirmInput(){
        setShowResume(false);
        setShowResult(true);
    }
    
    if(showResume){
    return (
        <div className='resume'>
            <div className='overlay' onClick={() => setShowResume(false)}>
                resume
            </div>
            <Container className='resumeContent styledBox'>

                <Row>
                    <Row className='resumeTitle'>
                        <Col className='resumeShadow resumeCol'>
                            <span><AiOutlineFileSearch className='btnIcon'/> Input</span>
                        </Col>
                    </Row>
                </Row>

                <Row className='separator'/>

                <Row className='resumeInput'>

                    <Row className='resumeRow'>
                        <Col className='resumeShadow resumeCol'>
                            <Row className='spansRow resumePatientData'>
                                <span>
                                    <b className='resumeSubtitle'>Patient Data:</b>
                                    &nbsp;&nbsp;&nbsp;Name/ID: <i>{PatientID}</i>  
                                    &nbsp;&nbsp;&nbsp;Surgeon: <i>{SurgeonName}</i>
                                    &nbsp;&nbsp;&nbsp;Eye: <i>{Eye} eye</i>  
                                    &nbsp;&nbsp;&nbsp;AXL: <i>{AxialLength}</i>
                                </span>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='resumeRow'>

                        <Col className='resumeShadow resumeCol'>
                            <Row className='spansRow'>
                                <span className='resumeSubtitle'>Pre Operative Data</span>
                                <span>
                                    K1: <i>{K1}</i>  
                                    &nbsp;&nbsp;&nbsp;K2: <i>{K2}</i>
                                    &nbsp;&nbsp;&nbsp;Steep meridian: <i>{SteepMeridian}</i>  
                                </span>
                                <span style={{display: (AvgMagnitude1 === "0")? 'none' : null}}>
                                    OCT1 / Scheimpflug / Biometer: 
                                    <br></br>
                                    Avg. Magnitude: <i>{AvgMagnitude1}</i> 
                                    &nbsp;&nbsp;&nbsp;Avg. Axis: <i>{AvgAxis1}</i>
                                </span>
                                
                                <span style={{display: (AvgMagnitude2 === "0")? 'none' : null}}>
                                    OCT2 / Scheimpflug / Biometer:
                                    <br></br>
                                    Avg. Magnitude: <i>{AvgMagnitude2}</i> 
                                    &nbsp;&nbsp;&nbsp;Avg. Axis: <i>{AvgAxis2}</i>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol'>
                            <Row className='spansRow'>
                                <span className='resumeSubtitle'>Post Operative Data</span>
                                <span>
                                    Implanted IOL Cylinder:
                                    &nbsp;<i>{IOLManufacturer} {IOLModel}</i>
                                </span>
                                <span>
                                    Post Operative Refraction:
                                    <br></br>
                                    Sphere: <i>{Sphere}</i>
                                    &nbsp;&nbsp;&nbsp;Cylinder: <i>{Cylinder}</i>
                                    &nbsp;&nbsp;&nbsp;Axis: <i>{Axis}</i>
                                </span>
                                <span>
                                    Measured Corneal Astigmatism 1:
                                    <br></br>
                                    Avg. Magnitude: <i>{AvgMagnitude3}</i> 
                                    &nbsp;&nbsp;&nbsp;Avg. Axis: <i>{AvgAxis3}</i>
                                </span>
                                <span style={{display: (AvgMagnitude4 === "0")? 'none' : null}}>
                                    Measured Corneal Astigmatism 2:
                                    <br></br>
                                    Avg. Magnitude: <i>{AvgMagnitude4}</i> 
                                    &nbsp;&nbsp;&nbsp;Avg. Axis: <i>{AvgAxis4}</i>
                                </span>
                            </Row>
                        </Col>

                    </Row>

                </Row>

                <Row className='separator'/>

                <Row className='resumeButtonsRow'>
                    <Col xs={6}>
                        <button className='resumeShadow modifyBtn resumeSubtitle'
                        onClick={() => setShowResume(false)}>
                            <RiArrowGoBackLine className='btnIcon'/> Modify
                        </button>
                    </Col>
                    <Col xs={6}>
                        <button className='resumeShadow confirmBtn resumeSubtitle'
                        onClick={() => confirmInput()}>
                            <RiCheckboxCircleLine className='btnIcon'/> Confirm
                        </button>
                    </Col>
                </Row>

                <div className='resumeCloseBtn' onClick={() => setShowResume(false)}><AiOutlineCloseCircle/></div>
            </Container>
        </div>
    )
}
}

