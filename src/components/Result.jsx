import React, {useState} from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {IoEyeOutline} from 'react-icons/io5'
import graphicCircle from '../img/graphicCircle.png'
import graphicIOL from  '../img/graphicIOL.png'
import graphicSuggested from '../img/graphicSuggested.png'
import './result.css'

export default function Result({
    showResult, setShowResult,

    Eye, AxialLength,
    K1, K2, SteepMeridian,
    AvgMagnitude1, AvgAxis1,
    AvgMagnitude2, AvgAxis2,
    IOLManufacturer, IOLModel,
    Sphere, Cylinder, Axis,
    AvgMagnitude3, AvgAxis3,
    AvgMagnitude4, AvgAxis4
}) {

    const [orientationValue, setOrientationValue] = useState(90)

    if(showResult){
        return (
            <div className='result'>

                <div className='overlay'>
                    Result
                </div>

                <Container className='resultContent styledBox'>

                    <Row>
                        <Row className='resumeTitle resumeShadow'>
                            <Row>
                                <Col>
                                    <span><IoEyeOutline className='btnIcon'/> Result</span>
                                </Col>
                            </Row>
                            <Row className='resultResume'>
                                <Col>
                                    <b>PREOP:</b>&nbsp;&nbsp;&nbsp;
                                    <b>Eye:</b> {Eye} &nbsp;<b>AXL:</b> {AxialLength} 
                                    &nbsp;&nbsp;<b>K1:</b> {K1} &nbsp;<b>K2:</b> {K2}
                                    &nbsp;&nbsp;<b>Steep Meridian:</b> &nbsp;{SteepMeridian}
                                    <span style={{display: (AvgMagnitude1 === "0")? 'none' : null}}>
                                    &nbsp;&nbsp;<b>Avg. Mag. 1:</b> &nbsp;{AvgMagnitude1}
                                    &nbsp;&nbsp;<b>Avg. Axis 1:</b> &nbsp;{AvgAxis1}
                                    </span>
                                    <span style={{display: (AvgMagnitude2 === "0")? 'none' : null}}>
                                    &nbsp;&nbsp;<b>Avg. Mag. 2:</b> &nbsp;{AvgMagnitude2}
                                    &nbsp;&nbsp;<b>Avg. Axis 2:</b> &nbsp;{AvgAxis2}
                                    </span>
                                    <br></br>
                                    <b>POSTOP:</b>&nbsp;&nbsp;&nbsp;
                                    <b>IOL:</b> &nbsp;{IOLManufacturer}&nbsp;{IOLModel}
                                    &nbsp;&nbsp;<b>Sphere:</b> &nbsp;{Sphere}
                                    &nbsp;&nbsp;<b>Cylinder:</b> &nbsp;{Cylinder}
                                    &nbsp;&nbsp;<b>Axis:</b> &nbsp;{Axis}
                                    &nbsp;&nbsp;<b>Avg. Mag. 1:</b> &nbsp;{AvgMagnitude3}
                                    &nbsp;&nbsp;<b>Avg. Axis 1:</b> &nbsp;{AvgAxis3}
                                    <span style={{display: (AvgMagnitude4 === "0")? 'none' : null}}>
                                    &nbsp;&nbsp;<b>Avg. Mag. 2:</b> &nbsp;{AvgMagnitude4}
                                    &nbsp;&nbsp;<b>Avg. Axis 2:</b> &nbsp;{AvgAxis4}
                                    </span>
                                </Col>
                            </Row>
                        </Row>
                    </Row>

                    <Row className='separator'/>

                    <Row>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>(Title)</span>
                                <span>
                                    IOL/Cornea Cyl. Ratio: <i>4.5</i>
                                    <br></br>  
                                    Required Cyl. at IOL Plane: <i>2.1</i>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Implanted IOL Cylinder</span>
                                <span>
                                    At IOL Plane: <i>4.5</i>
                                    <br></br>  
                                    At Corneal Plane: <i>2.1</i>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Induced corneal astigmatism</span>
                                <span>
                                    <b>TCA 1:</b> &nbsp; Cyl:<i>4.5</i> &nbsp; Axis:<i>4.5</i>
                                    <br></br>  
                                    <b>TCA 2:</b> &nbsp; Cyl:<i>4.5</i> &nbsp; Axis:<i>4.5</i>
                                </span>
                            </Row>
                        </Col>
                    </Row>

                    {/*<Row style={{marginTop: '1vh'}}>
                        <Col className='resumeShadow resumeCol'>
                            <span>
                            
                            </span>
                        </Col>
                    </Row>*/}

                    <Row className='separator'/>

                    <Row>
                        <Col className='resumeShadow resumeCol'>
                            <Row className="spansRow text-start">
                                <span className='resumeSubtitle text-center'>IOL Alignment</span>
                                <b>According to Post Op. Corneal Measurements 1:</b>
                                <span>
                                    Suggested Axis: <i>4.5</i>
                                    <br></br>  
                                    Predicted residual refraction: <i>4.5</i>
                                </span>
                            </Row>
                            <Row className="spansRow text-start">
                                <b>According to Post Op. Corneal Measurements 2:</b>
                                <span>
                                    Suggested Axis: <i>4.5</i>
                                    <br></br>  
                                    Predicted residual refraction: <i>4.5</i>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol '>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>IOL Orientation</span>
                            </Row>
                            <Row>
                                <div className='eyeGraphic'>
                                    <img src={graphicCircle} id='graphicCircle' alt='graphicCircle'></img>
                                    <img src={graphicIOL} id='graphicIOL' alt='graphicIOL'></img>
                                    <img src={graphicSuggested} id='graphicSuggested' alt='graphicSuggested'></img>
                                </div>
                            </Row>
                            <Row className='resultOrientationRow'>
                                <span id='orientationSpan'>{orientationValue}°</span>
                                <Form.Range value={orientationValue}
                                min="0" max="180" onChange={(e) => setOrientationValue(e.target.value)}/>
                            </Row>
                        </Col>
                    </Row>

                    {/*<Row className='separator'/>

                    <Row style={{marginTop: '1vh'}}>
                        <Col className='resumeShadow resumeCol'>
                            <span>
                            
                            </span>
                        </Col>
                    </Row>*/}

                    <div className='resumeCloseBtn' onClick={() => setShowResult(false)}><AiOutlineCloseCircle/></div>

                </Container>
            </div>
        )
    }
}
