import React, {useState, useEffect} from 'react'
import { getOctAverages } from '../../services/ToricCalculation';
import NumInput from '../../common/inputs/NumInput';
import {Container, Row, Col} from 'react-bootstrap';
import octicon from '../../img/oct-border4.png';
import {IoAddCircleOutline, IoCloseCircleOutline} from 'react-icons/io5'

export default function PostopDataB({
    setValidPostOct,

    F81VS, setF81VS,
    F82VS, setF82VS,
    F83VS, setF83VS,
    F84VS, setF84VS,
    F85VS, setF85VS,
    F86VS, setF86VS,
    F87Val, setF87Val,
    F88Val, setF88Val,
}) {

    //Switch for measure numbers
    const [measure2Switch, setMeasure2Switch] = useState(false);
    const [measure3Switch, setMeasure3Switch] = useState(false);

    //Automatic refresh for OCT1 Average Magnitude and Average Axis
    //OCT1
    useEffect(() => {

        var averagesArray = getOctAverages(F81VS[0], F83VS[0], F85VS[0], F82VS[0], F84VS[0], F86VS[0])
        try{
            //Average Magnitude
            setF87Val(averagesArray[0].toFixed(2))
            //Average Axis
            setF88Val(averagesArray[1])
        }catch(e){}

    }, [F81VS[0], F82VS[0], F83VS[0], F84VS[0], F85VS[0], F86VS[0]])
    
    function deleteById(divId){
        document.getElementById(divId).style.display = "none";
    }

    function addMoreMeasures(){
        if(!measure2Switch){
            setMeasure2Switch(true);
        }else{
            setMeasure3Switch(true);
        }
    }

    function deleteMeasure(){
        if(measure3Switch){
            setMeasure3Switch(false);
            setF85VS(["",-1])
            setF86VS(["",-1])
        }else if(measure2Switch){
            setMeasure2Switch(false);
            setF83VS(["",-1])
            setF84VS(["",-1])
        }
    }

    //Automatic refresh for OCT Average Magnitude and Average Axis
    //OCT1
    useEffect(() => {
        
        var averagesArray = getOctAverages(F81VS[0], F83VS[0], F85VS[0], F82VS[0], F84VS[0], F86VS[0])
        try{
            //Average Magnitude
            setF87Val(averagesArray[0].toFixed(2))
            //Average Axis
            setF88Val(averagesArray[1])
        }catch(e){}

    }, [F81VS[0], F82VS[0], F83VS[0], F84VS[0], F85VS[0], F86VS[0]])

    //Validate OCT
    useEffect(() => {

            setValidPostOct(false);

            if(!measure2Switch){
                if(F81VS[1] == 1 && F82VS[1] == 1){
                    setValidPostOct(true);
                }
            }else{
                if(!measure3Switch){
                    if(
                        F81VS[1] == 1 && F82VS[1] == 1 &&
                        F83VS[1] == 1 && F84VS[1] == 1 ){
                            setValidPostOct(true);
                    }
                }else{
                    if(
                        F81VS[1] == 1 && F82VS[1] == 1 &&
                        F83VS[1] == 1 && F84VS[1] == 1 &&
                        F85VS[1] == 1 && F86VS[1] == 1 ){
                            setValidPostOct(true);
                    }
                }
            }
            
    })

    return (
        <Row className='styledBox hCenterRow'>

            <Col xs={3} className='formIconDiv block1' style={{marginLeft: 0}}>
                <Row>
                    Post Op<br></br>Measures
                </Row>
                <Row>
                    <img src={octicon} className='formIcon patient'/>
                </Row>
            </Col>
                
            <Col xs={9} className='vCenter formCol octForm' style={{marginLeft: '1vw'}}>

                <Row className='title2'>
                    Measured Corneal Astigmatism
                </Row>

                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        TCA 1:&nbsp;
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F81VS} setVS={setF81VS}
                            label=""
                            placeholder="Magnitude"
                            min={0}
                            max={20}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F82VS} setVS={setF82VS}
                            label=""
                            placeholder="Axis"
                            min={1}
                            max={180}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>


                </Row>

                <Row className='hCenterRow' style={{display: measure2Switch ? null : 'none'}}>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        TCA 2:&nbsp;
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F83VS} setVS={setF83VS}
                            label=""
                            placeholder="Magnitude"
                            min={0}
                            max={20}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F84VS} setVS={setF84VS}
                            label=""
                            placeholder="Axis"
                            min={1}
                            max={180}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>

                    <span className='deleteMeasureSpan2'
                    style={{display: (measure2Switch&&!measure3Switch)? null : 'none'}}>
                        <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure()}/>
                    </span>
                </Row>

                <Row className='hCenterRow' style={{display: measure3Switch ? null : 'none'}}>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        TCA 3:&nbsp;
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F85VS} setVS={setF85VS}
                            label=""
                            placeholder="Magnitude"
                            min={0}
                            max={20}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F86VS} setVS={setF86VS}
                            label=""
                            placeholder="Axis"
                            min={1}
                            max={180}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>

                    <span className='deleteMeasureSpan2'
                    style={{display: (measure3Switch)? null : 'none'}}>
                        <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure()}/>
                    </span>
                </Row>

                <Row className='addMeasureRow' style={{display: measure3Switch? 'none' : null}}>
                    <span onClick={() => addMoreMeasures()}>
                        Add more&nbsp;<IoAddCircleOutline/>
                    </span>
                </Row>

                <Row xs={12} className='averagesCol' style={{display: measure2Switch? null : 'none'}}>
                    <span className='averagesCol'>
                        Average Magnitude: {F87Val}
                        &nbsp;&nbsp;
                        Average Axis: {F88Val}        
                    </span>           
                </Row>

            </Col>

        </Row>
    )
}


