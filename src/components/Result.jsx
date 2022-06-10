import React, {useState, useRef, useEffect} from 'react'

import { Container, Row, Col, Form } from 'react-bootstrap'

import {AiOutlineCloseCircle, AiOutlineFilePdf} from 'react-icons/ai';
import {FaRegQuestionCircle, FaRegFlag} from 'react-icons/fa'
import {IoEyeOutline} from 'react-icons/io5';
import {FiMail} from 'react-icons/fi';
import {RiArrowGoBackLine} from 'react-icons/ri';
import graphicCircle from '../img/graphicCircle.png'
import graphicIOL from  '../img/graphicIOL.png'
import graphicSuggested from '../img/graphicSuggested.png'

import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

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

    const [orientationValue, setOrientationValue] = useState(90);

    //Result States
    //Meridional Analysis
    //IOL/Cornea Cyl. Ratio:
    const [Result1, setResult1] = useState(0);
    //Required Cylinder at IOL Plane
    const [Result2, setResult2] = useState(0);

    //Implanted IOL cilinder
    //at IOL Plane:
    const [Result3, setResult3] = useState(4.50.toFixed(2));
    //at Corneal Plane:
    const [Result4, setResult4] = useState(0);

    const printRef = useRef();
    function downloadPdf(){
        const input = document.getElementById('divToPrint');
        html2canvas(input)
        .then((canvas) => {
        const data = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
        (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
      })
        ;
    }

    //Calculates and displays results.
    function calculateResults(){
        
        //HOFFER Q = HofferIOLPwB - HofferIOLPwA
        //Corrected Axial Length
        let CorrAXL;
        if(AxialLength<18.5){
            CorrAXL = 18.5;
        }else{
            if(AxialLength<=31){
                CorrAXL = AxialLength;
            }else{
                CorrAXL = 31;
            }
        }
        //G
        let G;
        if(CorrAXL<23){
            G=28;
        }else{
            G=23.5;
        }
        //M
        let M;
        if(CorrAXL<23){
            M=1;
        }else{
            M=-1;
        }
        //Vertex
        let vertex = 12;
        //Desired RX
        let RX = 0;
        //Average K
        let AvgK = (parseFloat(K1)+parseFloat(K2))/2;
        //Personalized ACD = Hoffer Q
        let PerACD = 5.89;
        //Predicted ACD
        let PredACD = 
        PerACD + 0.3 * (CorrAXL-23.5) + Math.pow(Math.tan(AvgK*Math.PI/180),2) +
        (0.1 * M * Math.pow(23.5-CorrAXL,2) * 
        (Math.tan(0.1 * Math.pow(G-CorrAXL,2) * Math.PI / 180))) - 0.99166;
        
        
        
        //Calculate HofferIOLPwB: (K86)
        //K for HofferIOLPwB
        let KB = parseFloat(K2);
        //HofferIOLPwB
        let HofferIOLPwB =
        (1336/(AxialLength-PredACD-0.05)) - 
        (1.336/((1.336/(KB+RX/(1-0.001*vertex*RX))) - ((PredACD+0.05)/1000)))
        //Calculate HofferIOLPwA: (K85)
        //K for HofferIOLPwA
        let KA2 = parseFloat(K1);
        //HofferIOLPwA
        let HofferIOLPwA =
        (1336/(AxialLength-PredACD-0.05)) - 
        (1.336/((1.336/(KA2+RX/(1-0.001*vertex*RX))) - ((PredACD+0.05)/1000)));

        //Hoffer Q Final Result
        let HofferQ = HofferIOLPwB - HofferIOLPwA;

    

        //  HOLLADAY 1 = J92-J91  //
        let HolladayConstant = 2.11;
        //R
        let R1 = 337.5/AvgK;
        let R2 = 337.5/K1;
        let R3 = 337.5/K2;
        //AG
        let AG1;
        if(12.5*parseFloat(AxialLength)/23.45<13.5){
            AG1 = 12.5*parseFloat(AxialLength)/23.45;
        }else{
            AG1 = 13.5;
        }
        //ACD
        let ACD = 0.56+R1-Math.sqrt(Math.pow(R1,2)-Math.pow(AG1,2)/4);
        //Alm
        let Alm = parseFloat(AxialLength)+0.2;

        //HolladayIOLPw
        let HolladayIOLPwA = 1336*(1.336*R2-1/3*Alm-0.001*RX*(vertex*(1.336*R2-1/3*Alm)+Alm*R2))/
        ((Alm-ACD-HolladayConstant)*(1.336*R2-1/3*(ACD+HolladayConstant)-
        0.001*RX*(vertex*(1.336*R2-1/3*(ACD+HolladayConstant))+(ACD+HolladayConstant)*R2)));
        let HolladayIOLPwB = 1336*(1.336*R3-1/3*Alm-0.001*RX*(vertex*(1.336*R3-1/3*Alm)+Alm*R3))/
        ((Alm-ACD-HolladayConstant)*(1.336*R3-1/3*(ACD+HolladayConstant)-
        0.001*RX*(vertex*(1.336*R3-1/3*(ACD+HolladayConstant))+(ACD+HolladayConstant)*R3)));

        //Holladay 1
        let Holladay1 = HolladayIOLPwB-HolladayIOLPwA;



        //SRK/T = Q98-Q97
        //Radius
        let radius1 = R1;
        let radius2 = R2;
        let radius3 = R3;
        //LCOR
        let LCOR;
        if(AxialLength>24.2){
            LCOR = -3.446+1.716*parseFloat(AxialLength)-0.0237*Math.pow(parseFloat(AxialLength),2)
        }else{
            LCOR = parseFloat(AxialLength);
        }
        //Cw
        let Cw1 = -5.41+0.58412*LCOR+0.098*AvgK;
        //H
        let H1 = radius1-Math.sqrt(Math.pow(radius1,2)-Math.pow(Cw1,2)/4);
        //A-Constant
        let AConstant = 119.4;
        //ACD Const
        let ACDConst = 0.62467*AConstant-68.747;
        //ACDest
        let ACDest = H1+ACDConst-3.336;
        //na
        let na = 1.336;
        //ncm1
        let ncm1 = 0.333;
        //Rethick
        let Rethick = 0.65696-0.02029*parseFloat(AxialLength)
        //LOPT
        let LOPT = parseFloat(AxialLength)+Rethick;

        //IOL emme
        let IOLemmeA = (1000*na*(na*radius2-ncm1*LOPT))/((LOPT-ACDest)*(na*radius2-ncm1*ACDest));
        let IOLemmeB = (1000*na*(na*radius3-ncm1*LOPT))/((LOPT-ACDest)*(na*radius3-ncm1*ACDest))

        //SRK/T
        let SRKT = IOLemmeB-IOLemmeA;



        //MEAN = RESULT 1 = IOL/CORNEA CYLINDER RATIO
        let mean = (HofferQ+Holladay1+SRKT)/3
        let KA = K1-K2;
        let result1 = mean/KA;
        setResult1(result1.toFixed(2));
        setResult2(mean.toFixed(2));

        //IMPLANTED IOL CYLINDER - RESULT2
        let result4 = Result3/result1;
        setResult4(result4.toFixed(2));

        //DEBUG
        debugger;
        //window.alert(s);
    }

    //Trigger Calculation function when result window is opened.
    useEffect( () => {
        if(showResult){
            calculateResults();
        }
    }, [showResult])

    if(showResult){
        return (
            <div id="divToPrint" className='result'>

                <div className='overlay'>
                    Result
                </div>

                <Container className='resultContent styledBox'>

                    <Row>
                        <Col className='resumeTitle resumeCol resumeShadow'>
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
                                    &nbsp;&nbsp;<b>Steep Meridian:</b>&nbsp;{SteepMeridian}
                                    <span style={{display: (AvgMagnitude1 === "0")? 'none' : null}}>
                                    &nbsp;&nbsp;<b>Avg. Mag. 1:</b>&nbsp;{AvgMagnitude1}
                                    &nbsp;&nbsp;<b>Avg. Axis 1:</b>&nbsp;{AvgAxis1}
                                    </span>
                                    <span style={{display: (AvgMagnitude2 === "0")? 'none' : null}}>
                                    &nbsp;&nbsp;<b>Avg. Mag. 2:</b>&nbsp;{AvgMagnitude2}
                                    &nbsp;&nbsp;<b>Avg. Axis 2:</b>&nbsp;{AvgAxis2}
                                    </span>
                                    <br></br>
                                    <b>POSTOP:</b>&nbsp;&nbsp;&nbsp;
                                    <b>IOL:</b> &nbsp;{IOLManufacturer}&nbsp;{IOLModel}
                                    &nbsp;&nbsp;<b>Sphere:</b>&nbsp;{Sphere}
                                    &nbsp;&nbsp;<b>Cylinder:</b>&nbsp;{Cylinder}
                                    &nbsp;&nbsp;<b>Axis:</b>&nbsp;{Axis}
                                    &nbsp;&nbsp;<b>Avg. Mag. 1:</b>&nbsp;{AvgMagnitude3}
                                    &nbsp;&nbsp;<b>Avg. Axis 1:</b>&nbsp;{AvgAxis3}
                                    <span style={{display: (AvgMagnitude4 === "0")? 'none' : null}}>
                                    &nbsp;&nbsp;<b>Avg. Mag. 2:</b>&nbsp;{AvgMagnitude4}
                                    &nbsp;&nbsp;<b>Avg. Axis 2:</b>&nbsp;{AvgAxis4}
                                    </span>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='separator'/>

                    <Row>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Meridional Analysis</span>
                                <span>
                                    IOL/Cornea Cyl. Ratio: <i>{Result1}</i>
                                    <br></br>  
                                    Required Cyl. at IOL Plane: <i>{Result2}</i>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Implanted IOL Cylinder</span>
                                <span>
                                    At IOL Plane: <i>{Result3}</i>
                                    <br></br>  
                                    At Corneal Plane: <i>{Result4}</i>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Induced corneal astigmatism</span>
                                <span>
                                    <b>TCA 1:</b> &nbsp; Cyl: <i>4.5</i> &nbsp; Axis: <i>4.5</i>
                                    <br></br>  
                                    <b>TCA 2:</b> &nbsp; Cyl: <i>4.5</i> &nbsp; Axis: <i>4.5</i>
                                </span>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='separator'/>

                    <Row>
                        <Col className='resumeShadow resumeCol '>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>IOL Orientation</span>
                            </Row>
                            <Row className="spansRow">
                                <span className='orientationSubtitle'>(Change IOL axis to see predicted refraction changes)</span>
                            </Row>
                            <Row>
                                <div className='eyeGraphic'>
                                    <img src={graphicCircle} id='graphicCircle' alt='graphicCircle'></img>
                                    <img src={graphicIOL} id='graphicIOL' alt='graphicIOL'
                                    style={{transform: 'rotate('+ (orientationValue-90) +'deg)'}}></img>
                                    <img src={graphicSuggested} id='graphicSuggested' alt='graphicSuggested'></img>
                                </div>
                            </Row>
                            <Row className='resultOrientationRow'>
                                <span id='orientationSpan'>{orientationValue}°</span>
                                <span className='hint2'><FaRegQuestionCircle/>
                                    <span className='hintText hintText2'>Use keyboard arrows to change orientation.</span>
                                </span>
                                <Form.Range value={orientationValue}
                                min="0" max="180" onChange={(e) => setOrientationValue(e.target.value)}/>
                            </Row>
                        </Col>
                        <Col>
                            <Row className='resumeShadow resumeCol'>
                                <Row className="spansRow text-start">
                                    <span className='resumeSubtitle text-center'>IOL Alignment</span>
                                    <b>According to Post Op. Corneal Measurements 1:</b>
                                    <span>
                                        Suggested Axis: <i>4.5</i>
                                        <br></br>
                                        Predicted residual refraction: <i>4.5</i><i>4.5</i><i>4.5</i>
                                    </span>
                                </Row>
                                <Row className="spansRow text-start">
                                    <b style={{position: 'relative'}}>According to Post Op. Corneal Measurements 2: 
                                        <span className='hint'><FaRegQuestionCircle/>
                                            <span className='hintText'>Change IOL orientation to see expected refraction.</span>
                                        </span>
                                    </b>
                                    <span>
                                        Suggested Axis: <i>4.5</i>
                                        <br></br>  
                                        Predicted residual refraction: <i>4.5</i><i>4.5</i><i>4.5</i>&nbsp;
                                    </span>
                                </Row>
                            </Row>
                            <Row>
                                <div className='optionsDiv'>
                                    <span onClick={() => downloadPdf()}><AiOutlineFilePdf/> Download</span>
                                    <br></br>
                                    <span><FiMail/> Send by Email</span>
                                    <br></br>
                                    <span><RiArrowGoBackLine/> Modify Input</span>
                                    <br></br>
                                    <span><FaRegFlag/> Report Error</span>
                                </div>
                            </Row>
                        </Col>
                    </Row>

                    <div className='resumeCloseBtn' onClick={() => setShowResult(false)}><AiOutlineCloseCircle/></div>

                </Container>
            </div>
        )
    }
}
