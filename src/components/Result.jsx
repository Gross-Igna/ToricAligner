import React, {useState, useRef, useEffect} from 'react'

import {averageOf3, getTanDeg} from '../services/ToricCalculation';

import { Container, Row, Col, Form } from 'react-bootstrap'

import LoadingDots from './LoadingDots';

import {AiOutlineCloseCircle, AiOutlineFilePdf} from 'react-icons/ai';
import {FaRegQuestionCircle, FaRegFlag} from 'react-icons/fa'
import {BsArrowRight,BsArrowLeft} from 'react-icons/bs'
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
    IOLPlane, IOLCornealPlane,
    Sphere, Cylinder, Axis,
    AvgMagnitude3, AvgAxis3,
    AvgMagnitude4, AvgAxis4,

    PostopRefSphere, setPostopRefSphere,
    PostopRefCylinder, setPostopRefCylinder,
    PostopRefAxis, setPostopRefAxis,

    TCA1Axis1, TCA1Axis2, TCA1Axis3,
    TCA1Magn1, TCA1Magn2, TCA1Magn3,
    TCA2Axis1, TCA2Axis2, TCA2Axis3,
    TCA2Magn1, TCA2Magn2, TCA2Magn3,
    TCA3Axis1, TCA3Axis2, TCA3Axis3,
    TCA3Magn1, TCA3Magn2, TCA3Magn3,
    TCA4Axis1, TCA4Axis2, TCA4Axis3,
    TCA4Magn1, TCA4Magn2, TCA4Magn3
}) {

    const [orientationValue, setOrientationValue] = useState(parseInt(AvgAxis3));

    //Result States
    //Meridional Analysis
    //IOL/Cornea Cyl. Ratio:
    const [Result1, setResult1] = useState(0);
    //Required Cylinder at IOL Plane
    const [Result2, setResult2] = useState(0);

    //Implanted IOL cilinder
    //at IOL Plane:
    const [Result3, setResult3] = useState(IOLPlane);
    //at Corneal Plane:
    const [Result4, setResult4] = useState(IOLCornealPlane);

    //Induced Corneal Astigmatism
    //TCA1
    //Cylinder
    const [Result5, setResult5] = useState(0);
    //Axis
    const [Result6, setResult6] = useState(0);
    //TCA2
    //Cylinder
    const [Result7, setResult7] = useState(0);
    //Axis
    const [Result8, setResult8] = useState(0);

    //IOL Alignement 
    //According to postop1
    //Predicted Residual refraction
    //Sphere
    const [Result101, setResult101] = useState(0);
    //Cylinder
    const [Result102, setResult102] = useState(0);
    //Axis
    const [Result103, setResult103] = useState(0);

    //According to postop2
    //Sphere
    const [Result121, setResult121] = useState(0);
    //Cylinder
    const [Result122, setResult122] = useState(0);
    //Axis
    const [Result123, setResult123] = useState(0);


    //Result loading div
    const [loading, setLoading] = useState(false);

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
    
    //Recalculation for Postoperative Refraction when Cylinder<0
    var postopRefSph = PostopRefSphere;
    var postopRefCyl = PostopRefCylinder;
    var postopRefAxis = PostopRefAxis;
    function PostopRefractionRecalculation(){
        postopRefSph = PostopRefSphere+PostopRefCylinder;
        postopRefCyl = (PostopRefCylinder*-1)
        if(postopRefAxis<=90){
            postopRefAxis = (parseFloat(PostopRefAxis)+90);
        }{
            postopRefAxis = (parseFloat(PostopRefAxis)-90);
        }
    }

    function limitOrientation(){
        //Validation: Limit orientationValue
        if(orientationValue < 0){
            setOrientationValue(0);
        }else if(orientationValue > 180){
            setOrientationValue(180)
        }
    }

    //Calculates and displays results.
    function calculateResults(){

        limitOrientation();

        //// CALCULATION FOR MERIDIONAL ANALYSIS AND IMPLANTED IOL CYL. ////
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
        //IMPLANTED IOL CYLINDER -> RESULT2
        let mean = (HofferQ+Holladay1+SRKT)/3
        let KA = K1-K2;
        let result1 = mean/KA;
        setResult1(result1.toFixed(2));
        setResult2(mean.toFixed(2));

        /*RESULT 4
        let result4 = Result3/result1;
        setResult4(result4.toFixed(2));
        Result 4 is calculated in input stage*/


        
        //// CALCULATION FOR INDUCED CORNEAL ASTIGMATISM ////
        // PENTACAM //
        //rad
        let radA1 = Math.PI/180*TCA1Axis1;
        let radA2 = Math.PI/180*TCA1Axis2;
        let radA3 = Math.PI/180*TCA1Axis3;
        let radB1 = Math.PI/180*TCA3Axis1;
        let radB2 = Math.PI/180*TCA3Axis2;
        let radB3 = Math.PI/180*TCA3Axis3;
        
        //KP(Φ) 
        let KPA1 = TCA1Magn1 * Math.cos(2*radA1);
        let KPA2 = TCA1Magn2 * Math.cos(2*radA2);
        let KPA3 = TCA1Magn3 * Math.cos(2*radA3);
        let KPB1 = TCA3Magn1 * Math.cos(2*radB1);
        let KPB2 = TCA3Magn2 * Math.cos(2*radB2);
        let KPB3 = TCA3Magn3 * Math.cos(2*radB3);
        //KP(Φ+45) 
        let KPA451 = TCA1Magn1 * Math.sin(2*radA1);
        let KPA452 = TCA1Magn2 * Math.sin(2*radA2);
        let KPA453 = TCA1Magn3 * Math.sin(2*radA3);
        let KPB451 = TCA3Magn1 * Math.sin(2*radB1);
        let KPB452 = TCA3Magn2 * Math.sin(2*radB2);
        let KPB453 = TCA3Magn3 * Math.sin(2*radB3);

        //Average KP(Φ)
        let AvgKPA = averageOf3(KPA1,KPA2,KPA3);
        let AvgKPB = averageOf3(KPB1,KPB2,KPB3);
        //Average KP(Φ+45)
        let AvgKP45A = averageOf3(KPA451,KPA452,KPA453);
        let AvgKP45B = averageOf3(KPB451,KPB452,KPB453);

        //SICA
        let SICAA = AvgKPA - AvgKPB;
        let SICAB = AvgKP45A - AvgKP45B;

        //RESULT 5-6 Induced Corneal Astigmatism TCA1
        //TCA1Cylinder = T22 = sqrt(Q22^2+R22^2)
        let TCA1Cylinder = Math.sqrt(Math.pow(SICAA,2)+Math.pow(SICAB,2))
        //Axis (column N)
        let AxisN = getTanDeg(Math.atan((TCA1Cylinder-SICAA*-1)/SICAB*-1));
        //V22
        let V22;
        if(AxisN<0){
            V22 = 180;
        }else{
            V22 = 0;
        }
        let result6 = AxisN+V22;
        
        let nanAxis = false; 
        setResult5(TCA1Cylinder.toFixed(2));
        if (!Number.isNaN(result6)){
            setResult6(Math.round(result6));
        }else{
            nanAxis = true;    
        }
        
        if (Result5 === "0.00" && nanAxis){
            setResult6(0)
        }



        //// PREDICTED RESIDUAL REFRACTION (corneal plane)////
        // PO = Post Operative
        // Scheimpflug OCT1 //
        //IOLPos = IOL Position
        let IOLPosAxis1;
        if(orientationValue>89){
            IOLPosAxis1 = 90;
        }else{
            IOLPosAxis1 = -90;
        }
        let IOLPosAxis2 = orientationValue-IOLPosAxis1;
        let IOLPosAxis3 = Math.PI/180*IOLPosAxis2;
        //POTCAIOL = Postoperative TCA + IOL
        //KP(Φ) 
        let POTCAIOLKP = AvgKPB + IOLCornealPlane*Math.cos(2*IOLPosAxis3);
        //KP(Φ+45) 
        let POTCAIOLKP45 = AvgKP45B + IOLCornealPlane*Math.sin(2*IOLPosAxis3);

        //PRR = Predicted Residual Refractive Astigmatism 
        //Cylinder
        let PRRCyl = Math.sqrt( POTCAIOLKP*POTCAIOLKP + POTCAIOLKP45*POTCAIOLKP45 );
        //Difference between cyl
        let DifBtwnCyl = postopRefCyl - PRRCyl;
        //Change in sphere
        let ChgInSphere = DifBtwnCyl/2;
        //Change in Sphere
        let PRRSphere = postopRefSph + ChgInSphere;
        //Axis
        let a;
        if(Math.round(PRRCyl)==="0"){
            a = 0;
        }else{
            a = Math.round(0.5*Math.atan2(POTCAIOLKP45,POTCAIOLKP)*180/Math.PI);
        }
        let b;
        if(a<0){
            b=180;
        }else{
            b=0;
        }
        let PRRAxis = a + b;

        //IOL ALIGNEMENT RESULTS 1
        setResult101(PRRSphere.toFixed(2));
        setResult102(PRRCyl.toFixed(2));
        setResult103(Math.round(PRRAxis));
        

        
        
        //// CALCULATION FOR INDUCED CORNEAL ASTIGMATISM ////
        // SIRIUS //
        //rad
        radA1 = Math.PI/180*TCA2Axis1;
        radA2 = Math.PI/180*TCA2Axis2;
        radA3 = Math.PI/180*TCA2Axis3;
        radB1 = Math.PI/180*TCA4Axis1;
        radB2 = Math.PI/180*TCA4Axis2;
        radB3 = Math.PI/180*TCA4Axis3;
        
        //KP(Φ) 
        KPA1 = TCA2Magn1 * Math.cos(2*radA1);
        KPA2 = TCA2Magn2 * Math.cos(2*radA2);
        KPA3 = TCA2Magn3 * Math.cos(2*radA3);
        KPB1 = TCA4Magn1 * Math.cos(2*radB1);
        KPB2 = TCA4Magn2 * Math.cos(2*radB2);
        KPB3 = TCA4Magn3 * Math.cos(2*radB3);
        //KP(Φ+45) 
        KPA451 = TCA2Magn1 * Math.sin(2*radA1);
        KPA452 = TCA2Magn2 * Math.sin(2*radA2);
        KPA453 = TCA2Magn3 * Math.sin(2*radA3);
        KPB451 = TCA4Magn1 * Math.sin(2*radB1);
        KPB452 = TCA4Magn2 * Math.sin(2*radB2);
        KPB453 = TCA4Magn3 * Math.sin(2*radB3);

        //Average KP(Φ)
        AvgKPA = averageOf3(KPA1,KPA2,KPA3);
        AvgKPB = averageOf3(KPB1,KPB2,KPB3);
        //Average KP(Φ+45)
        AvgKP45A = averageOf3(KPA451,KPA452,KPA453);
        AvgKP45B = averageOf3(KPB451,KPB452,KPB453);

        //SICA
        SICAA = AvgKPA - AvgKPB;
        SICAB = AvgKP45A - AvgKP45B;

        //RESULT 5-6 Induced Corneal Astigmatism TCA1
        //TCA1Cylinder = T22 = sqrt(Q22^2+R22^2)
        let TCA2Cylinder = Math.sqrt(Math.pow(SICAA,2)+Math.pow(SICAB,2))
        //Axis (column N)
        AxisN = getTanDeg(Math.atan((TCA2Cylinder-SICAA*-1)/SICAB*-1));
        //V22
        if(AxisN<0){
            V22 = 180;
        }else{
            V22 = 0;
        }
        let result8 = AxisN+V22;
        
        nanAxis = false;
        setResult7(TCA2Cylinder.toFixed(2));
        if (!Number.isNaN(result8)){
            setResult8(Math.round(result8));
        }else{
            nanAxis = true;
        }

        if (Result7 === "0.00" && nanAxis){
            setResult8(0)
        }

        //// PREDICTED RESIDUAL REFRACTION (corneal plane)////
        // PO = Post Operative
        // Scheimpflug OCT2 (SIRIUS) //
        //POTCAIOL = Postoperative TCA + IOL
        //KP(Φ) 
        POTCAIOLKP = AvgKPB + IOLCornealPlane*Math.cos(2*IOLPosAxis3)
        //KP(Φ+45) 
        POTCAIOLKP45 = AvgKP45B + IOLCornealPlane*Math.sin(2*IOLPosAxis3)

        //PRR = Predicted Residual Refraction 
        //Cylinder
        PRRCyl = Math.sqrt(Math.pow(POTCAIOLKP,2)+Math.pow(POTCAIOLKP45,2))
        //Difference between cyl
        DifBtwnCyl = postopRefCyl - PRRCyl;
        //Change in sphere
        ChgInSphere = DifBtwnCyl/2;
        //Change in Sphere
        PRRSphere = postopRefSph + ChgInSphere;
        //Axis
        if(Math.round(PRRCyl)==="0"){
            a = 0;
        }else{
            a = Math.round(0.5*Math.atan2(POTCAIOLKP45,POTCAIOLKP)*180/Math.PI);
        }
        if(a<0){
            b=180;
        }else{
            b=0;
        }
        PRRAxis = a + b;

        //IOL ALIGNEMENT RESULTS 2
        setResult121(PRRSphere.toFixed(2));
        setResult122(PRRCyl.toFixed(2));
        setResult123(Math.round(PRRAxis));
        

        //DEBUG
        //debugger;

    }

    //Trigger Calculation function when result window is opened.
    useEffect( () => {
        if(showResult){
            if(PostopRefCylinder<0){
                PostopRefractionRecalculation();
            }
            setOrientationValue(parseInt(AvgAxis3));
            setLoading(true);
            setTimeout(() => setLoading(false),2000)
            calculateResults();
        }
    }, [showResult])

    useEffect( () => {
        calculateResults();
    }, [orientationValue])


    
    window.onkeypress = function(event) {
        //Reset orientation value on enter/space
        if (event.keyCode == 13 || event.keyCode == 32) {
            setOrientationValue(parseInt(AvgAxis3));
        }
    }

    window.onkeydown = function(event){
        //Change orientation value on arrows press
        if(document.getElementById("orientationRange") !== document.activeElement){
            if (event.keyCode == 39) {
                setOrientationValue(parseInt(orientationValue)+1);
            }
            if (event.keyCode == 37) {
                setOrientationValue(parseInt(orientationValue)-1);
            }
        }
    }
        
    

    if(showResult){
        return (
            <div id="divToPrint" className='result'>

                <div className='overlay'>
                    Result
                </div>

                <Container className='resultContent styledBox'>

                    <div className='resultLoadingDiv'
                    style={{display: loading? null : 'none'}}>
                        <LoadingDots/>
                    </div>
                    
                    <Row style={{opacity: loading? '0': null}}>
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

                    <Row className='separator' style={{opacity: loading? '0': null}}/>

                    <Row style={{opacity: loading? '0': null}}>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Meridional Analysis</span>
                                <span>
                                    IOL/Cornea Cyl. Ratio: <i>{Result1}</i>
                                    <br></br>  
                                    <span style={{fontSize: '1.1vw'}}>Required Cyl. at IOL Plane: <i>{Result2}</i></span>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Implanted IOL Cylinder</span>
                                <span>
                                    At IOL Plane: <i>{Result3.toFixed(2)}</i>
                                    <br></br>  
                                    At Corneal Plane: <i>{Result4}</i>
                                </span>
                            </Row>
                        </Col>
                        <Col className='resumeShadow resumeCol text-start'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>Induced corneal astigmatism</span>
                                <span>
                                    <b>TCA 1:&nbsp;</b>
                                    <span style={{display: (Result5 === "NaN")? 'none' : null}}>
                                        &nbsp;Cyl: <i>{Result5}</i> &nbsp; Axis: <i>{Result6}°</i>
                                    </span>
                                    <i style={{fontSize: '0.8vw', display: (Result5 !== "NaN" && Result6 !== "NaN")? 'none' : null}}>
                                        No Measurements
                                    </i> 
                                    <br></br>
                                    <b>TCA 2:&nbsp;</b>
                                    <span style={{display: (Result7 === "NaN")? 'none' : null}}>
                                        &nbsp;Cyl: <i>{Result7}</i> &nbsp; Axis: <i>{Result8}°</i>
                                    </span>
                                    <i style={{fontSize: '0.8vw', display: (Result7 !== "NaN" && Result8 !== "NaN")? 'none' : null}}>
                                        No Measurements
                                    </i> 
                                </span>
                            </Row>
                        </Col>
                    </Row>

                    <Row className='separator' style={{opacity: loading? '0': null}}/>

                    <Row style={{opacity: loading? '0': null}}>
                        <Col className='resumeShadow resumeCol vCenter'>
                            <Row className="spansRow">
                                <span className='resumeSubtitle'>IOL Orientation</span>
                            </Row>
                            <Row>
                                <div className='eyeGraphic'>
                                    <img src={graphicCircle} id='graphicCircle' alt='graphicCircle'></img>
                                    <img src={graphicIOL} id='graphicIOL' alt='graphicIOL'
                                    style={{transform: 'rotate('+ (90-orientationValue) +'deg)'}}></img>
                                    <img src={graphicSuggested} id='graphicSuggested' alt='graphicSuggested'
                                    style={{transform: 'rotate('+ (90-AvgAxis3) +'deg)'}}></img>
                                </div>
                            </Row>
                            <Row className='resultOrientationRow'>
                                <span id='orientationSpan'>{orientationValue}°</span>
                                <span className='hint2'><FaRegQuestionCircle/>
                                    <span className='hintText hintText2'>
                                        Use <b>keyboard arrows</b> to modify IOL axis precisely.
                                        <br></br>
                                        Reset pressing <b>Intro/Space Bar</b>.
                                    </span>
                                </span>

                                <div className='rangeDiv'>
                                    <Form.Range value={orientationValue}
                                    id="orientationRange"
                                    min="0" max="180" 
                                    onChange={(e) => {
                                        setOrientationValue(e.target.value);
                                        // calculateResults();
                                    }}>    
                                    </Form.Range>
                                    <BsArrowLeft id='rangeArrowL' onClick={() => setOrientationValue(parseInt(orientationValue)-1)}/>
                                    <BsArrowRight id='rangeArrowR' onClick={() => setOrientationValue(parseInt(orientationValue)+1)}/>
                                </div>

                            </Row>
                            <Row className="spansRow">
                                <span className='orientationSubtitle'>(Change IOL axis to see predicted refraction changes)</span>
                            </Row>
                        </Col>
                        <Col>
                            <Row className='resumeShadow resumeCol'>
                                <Row className="spansRow text-start">
                                    <span className='resumeSubtitle text-center'>IOL Alignment</span>
                                    <b style={{position: 'relative'}}>According to Corneal Measurements 1
                                        <span className='hint'><FaRegQuestionCircle/>
                                            <span className='hintText'>Change IOL orientation to see expected refraction.</span>
                                        </span>
                                    </b>
                                    <span>
                                        <span style={{fontSize: '1.1vw'}}>Suggested Axis:&nbsp;<i>{AvgAxis3}°</i></span>
                                        <br></br>
                                        <span style={{fontSize: '1vw'}}>Predicted residual refraction:</span> <i>{Result101}</i><i>{Result102}</i><i>{Result103}°</i>
                                    </span>
                                </Row>
                                <Row className="spansRow text-start">
                                    <b>According to Corneal Measurements 2:</b>
                                    <span>
                                        <span style={{fontSize: (AvgAxis4 !== "" || !Number.isNaN(parseFloat(AvgAxis4)))? '1.1vw' : '1vw'}}>Suggested Axis:&nbsp; 
                                        <i style={{display: (AvgAxis4 === "" || Number.isNaN(parseFloat(AvgAxis4)))? 'none' : null}}>{AvgAxis4}°</i>
                                        <i style={{fontSize: '0.8vw', display: (AvgAxis4 !== "" && !Number.isNaN(parseFloat(AvgAxis4)))? 'none' : null}}>No Measurements</i>
                                        </span>
                                        <br></br>  
                                        <span style={{fontSize: '1vw'}}>Predicted residual refraction:</span>
                                        <span style={{display: (Result121 === "NaN")? 'none' : null}}>
                                            <i>{Result121}</i><i>{Result122}</i><i>{Result123}°</i>&nbsp;
                                        </span>
                                        <i style={{fontSize: '0.8vw', display: (Result121 !== "NaN")? 'none' : null}}>
                                            No Measurements
                                        </i>
                                    </span>
                                </Row>
                            </Row>
                            <Row>
                                <div className='optionsDiv'>
                                    <span onClick={() => downloadPdf()}><AiOutlineFilePdf/> Download</span>
                                    <br></br>
                                    <span><FiMail/> Send by Email</span>
                                    <br></br>
                                    <span onClick={() => setShowResult(false)}><RiArrowGoBackLine/> Modify Input</span>
                                    <br></br>
                                    <span><FaRegFlag/> Report Error</span>
                                </div>
                            </Row>
                        </Col>
                    </Row>

                    <div className='resumeCloseBtn' 
                    onClick={() => setShowResult(false)}
                    style={{opacity: loading? '0': null}}>
                        <AiOutlineCloseCircle/>
                    </div>

                </Container>
            </div>
        )
    }
}
