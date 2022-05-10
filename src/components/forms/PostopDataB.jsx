import React, {useState, useEffect} from 'react'
import NumInput from './inputs/NumInput';
import {Container, Row, Col} from 'react-bootstrap';
import octicon from '../../img/oct-border4.png';
import {IoAddCircleOutline} from 'react-icons/io5'

export default function PostopDataB({
    setValidPostOct,

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

    //Switch for measure numbers
    const [measure12Switch, setMeasure12Switch] = useState(false);
    const [measure13Switch, setMeasure13Switch] = useState(false);

    const [oct2SwitchClass, setOct2SwitchClass] = useState('octSwitchOn vCenter')
    const [measure22Switch, setMeasure22Switch] = useState(false);
    const [measure23Switch, setMeasure23Switch] = useState(false);
    
    function deleteById(divId){
        document.getElementById(divId).style.display = "none";
    }

    function handleClick(){
            setOct2SwitchClass('octSwitchOff vCenter');
            let del = setTimeout( () => deleteById('octSwitch3') , 200 );
        }

    function addMoreMeasures(formId){
        if (formId === 1){
            if(!measure12Switch){
                setMeasure12Switch(true);
            }else{
                setMeasure13Switch(true);
                deleteById('addMore3');
            }
        }else if (formId === 2){
            if(!measure22Switch){
                setMeasure22Switch(true);
            }else{
                setMeasure23Switch(true);
                deleteById('addMore4');
            }
        }
    }

    //Validate OCTs
    useEffect(() => {
        
            let valid1 = false;
            let valid2 = false;

            if(!measure12Switch){
                if(F81VS[1] == 1 && F82VS[1] == 1){
                    valid1 = true;
                }
            }else{
                if(!measure13Switch){
                    if(
                        F81VS[1] == 1 && F82VS[1] == 1 &&
                        F83VS[1] == 1 && F84VS[1] == 1 ){
                        valid1 = true;
                    }
                }else{
                    if(
                        F81VS[1] == 1 && F82VS[1] == 1 &&
                        F83VS[1] == 1 && F84VS[1] == 1 &&
                        F85VS[1] == 1 && F86VS[1] == 1 ){
                        valid1 = true;
                    }
                }
            }

            if(oct2SwitchClass !== 'octSwitchOn vCenter'){
                if(!measure22Switch){
                    if(F91VS[1] == 1 && F92VS[1] == 1){
                        valid2 = true;
                    }
                }else{
                    if(!measure23Switch){
                        if(
                            F91VS[1] == 1 && F92VS[1] == 1 &&
                            F93VS[1] == 1 && F94VS[1] == 1){
                            valid2 = true;
                        }
                    }else
                        if(
                            F91VS[1] == 1 && F92VS[1] == 1 &&
                            F93VS[1] == 1 && F94VS[1] == 1 &&
                            F95VS[1] == 1 && F96VS[1] == 1 ){
                            valid2 = true;
                        }
                }
            }else{
                valid2 = true;
            }

            if (valid1 && valid2){
                setValidPostOct(true);
            }else{
                setValidPostOct(false);
            }
            
    })

    return (
        <Row className='styledBox bigBlock4 hCenterRow'>

            <Col xs={3} className='formIconDiv block1' style={{marginLeft: 0}}>
                <Row>
                    Post Op<br></br>Measures
                </Row>
                <Row>
                    <img src={octicon} className='formIcon patient'/>
                </Row>
            </Col>
                
            <Col xs={4} className='vCenter formCol octForm'>

                <Row className='title2'>
                    Measured Corneal Astigmatism 1
                </Row>

                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measurements 1:&nbsp;
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
                            min={0}
                            max={180}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>

                <Row className='hCenterRow' style={{display: measure12Switch ? null : 'none'}}>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measurements 2:&nbsp;
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
                            min={0}
                            max={180}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>

                <Row className='hCenterRow' style={{display: measure13Switch ? null : 'none'}}>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measurements 3:&nbsp;
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
                            min={0}
                            max={180}
                            step={0.1}
                            readonly={false}
                        />
                    </Col>
                </Row>

                <Row className='addMeasureRow' style={{display: measure13Switch? 'none' : null}}>
                    <span onClick={() => addMoreMeasures(1)}>
                        Add more&nbsp;<IoAddCircleOutline/>
                    </span>
                </Row>

                <Row xs={12} className='averagesCol' style={{display: measure12Switch? null : 'none'}}>
                    <span className='averagesCol'>
                        Average Magnitude: {F87Val}
                        &nbsp;&nbsp;
                        Average Axis: {F88Val}        
                    </span>           
                </Row>

            </Col>

            <Col xs={4} className='vCenter formCol octForm'>

                <div id='octSwitch3' className={oct2SwitchClass} 
                onClick={() => handleClick()}
                >
                    <span className='hCenter'>
                        <IoAddCircleOutline style={{fontSize: '3vw'}}/>
                        <br></br>
                        Add more measurements
                    </span>
                </div>

                <Row className='title2'>
                    Measured Corneal Astigmatism 2
                </Row>
                
                <Row className='hCenterRow'>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measurements 1:&nbsp;
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

                <Row className='hCenterRow' style={{display: measure22Switch ? null : 'none'}}>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measurements 2:&nbsp;
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
                <Row className='hCenterRow' style={{display: measure23Switch ? null : 'none'}}>
                    <Col xs={3} className='vCenter measureCol noPadding'>
                        Measurements 3:&nbsp;
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

                <Row className='addMeasureRow' style={{display: measure23Switch? 'none' : null}}>
                    <span onClick={() => addMoreMeasures(2)}>
                        Add more&nbsp;<IoAddCircleOutline/>
                    </span>
                </Row>

                <Row xs={12} className='averagesCol' style={{display: measure22Switch? null : 'none'}}>
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


