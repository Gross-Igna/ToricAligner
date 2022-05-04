import React, {useEffect} from 'react'
import NumInput from './inputs/NumInput';
import {Container, Row, Col} from 'react-bootstrap';
import octicon from '../../img/oct-border4.png';

export default function PostopDataB({
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

    //Automatic refresh for OCT1 and OCT2 Average Magnitude and Average Axis F37, F38 inputs
    //OCT1
    useEffect(() => {

        console.log("F86VS", F86VS[0])

        try{
            if(F81VS[0] === undefined){
                console.log("TRUEEEEEEEEEE");
            }

            //Average Magnitude
            if(F81VS[0] !== undefined){
                if(F85VS[0] === undefined ){
                    setF87Val(F81VS[0])
                }else{
                    var average = ( ( parseFloat(F81VS[0]) + parseFloat(F83VS[0]) +  parseFloat(F85VS[0]) ) / 3 )
                    setF87Val(average.toString().substring(0,4))
                }
            }
        }catch(e){}

        try{
            //Average Axis
            if(F82VS[0] !== undefined){
                if(F86VS[0] == undefined ){
                    setF88Val(F82VS[0])
                }else{
                    var average = ( ( parseFloat(F82VS[0]) + parseFloat(F84VS[0]) +  parseFloat(F86VS[0]) ) / 3 )
                    setF88Val(average.toString().substring(0,4))
                }
            }
        }catch(e){}

    }, [F81VS[0], F82VS[0], F83VS[0], F84VS[0], F85VS[0], F86VS[0]])
    //OCT2
    useEffect(() => {

        try{
            //Average Magnitude
            if(F91VS[0] !== undefined){
                if(F95VS[0] == undefined ){
                    setF97Val(F91VS[0])
                }else{
                    var average = ( ( parseFloat(F91VS[0]) + parseFloat(F93VS[0]) +  parseFloat(F95VS[0]) ) / 3 )
                    setF97Val(average.toString().substring(0,4))
                }
            }
        }catch(e){}

        try{
            //Average Axis
            if(F92VS[0] !== undefined){
                if(F96VS[0] == undefined ){
                    setF98Val(F92VS[0])
                }else{
                    var average = ( ( parseFloat(F92VS[0]) + parseFloat(F94VS[0]) +  parseFloat(F96VS[0]) ) / 3 )
                    setF98Val(average.toString().substring(0,4))
                }
            }
        }catch(e){}
        
    }, [F91VS[0], F92VS[0], F93VS[0], F94VS[0], F95VS[0], F96VS[0]])

    return (
        <Row className='styledBox bigBlock3 hCenterRow'>

            <Col xs={3} className='formIconDiv block1'>
                <Row>
                    (Title 4)
                </Row>
                <Row>
                    <img src={octicon} className='formIcon patient'/>
                </Row>
            </Col>
                
            <Col xs={4} className='vCenter formCol octForm'>

                <Row className='title2'>
                    Scheimpflug / OCT1
                </Row>

                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measure 1:
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F81VS} setVS={setF81VS}
                            label=""
                            placeholder="Magnitude"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F82VS} setVS={setF82VS}
                            label=""
                            placeholder="Axis"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>

                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measure 2:
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F83VS} setVS={setF83VS}
                            label=""
                            placeholder="Magnitude"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F84VS} setVS={setF84VS}
                            label=""
                            placeholder="Axis"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>

                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measure 3:
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F85VS} setVS={setF85VS}
                            label=""
                            placeholder="Magnitude"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F86VS} setVS={setF86VS}
                            label=""
                            placeholder="Axis"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>
                <Row xs={12} className='averagesCol'>
                    <span className='averagesCol'>
                        Average Magnitude: {F87Val}
                        &nbsp;&nbsp;
                        Average Axis: {F88Val}        
                    </span>           
                </Row>
            </Col>

            <Col xs={4} className='vCenter formCol octForm'>

                <Row className='title2'>
                    Scheimpflug / OCT2
                </Row>
                
                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measure 1:
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F91VS} setVS={setF91VS}
                            label=""
                            placeholder="Magnitude"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F92VS} setVS={setF92VS}
                            label=""
                            placeholder="Axis"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>

                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measure 2:
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F93VS} setVS={setF93VS}
                            label=""
                            placeholder="Magnitude"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F94VS} setVS={setF94VS}
                            label=""
                            placeholder="Axis"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>
                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measure 3:
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F95VS} setVS={setF95VS}
                            label=""
                            placeholder="Magnitude"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                    <Col xs={4} className='noPadding'>
                        <NumInput VS={F96VS} setVS={setF96VS}
                            label=""
                            placeholder="Axis"
                            min={20}
                            max={30}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>
                <Row xs={12} className='averagesCol'>
                    <span className='averagesCol'>
                        Average Magnitude: {F97Val}
                        &nbsp;&nbsp;
                        Average Axis: {F98Val}        
                    </span>           
                </Row>

            </Col>
        </Row>
    )
}

