import React, {useState, useEffect} from 'react'
import {Row, Col} from 'react-bootstrap'

import { getOctAverages } from '../../services/ToricCalculation';

import octicon from '../../img/oct-border4.png'
import {IoAddCircleOutline, IoCloseCircleOutline} from 'react-icons/io5'

import NumInput from '../../common/inputs/NumInput';
import Magnitude from '../../common/inputs/Magnitude';

export default function PreopMeasures({
    setValidPreOct,

    F31VS, setF31VS,
    F32VS, setF32VS,
    F33VS, setF33VS,
    F34VS, setF34VS,

    F41VS, setF41VS,
    F42VS, setF42VS,
    F43VS, setF43VS,
    F44VS, setF44VS,

    F51VS, setF51VS,
    F52VS, setF52VS,
    F53VS, setF53VS,
    F54VS, setF54VS,
    F55VS, setF55VS,
    F56VS, setF56VS,
    F57Val, setF57Val,
    F58Val, setF58Val,
}) {

    //States and onclick functions for activating or desactivating additional OCT Measures
    const [octSwitchClass, setOctSwitchClass] = useState('octSwitchOn vCenter')
    const [measure2Switch, setMeasure2Switch] = useState(false);
    const [measure3Switch, setMeasure3Switch] = useState(false);

    function deleteById(divId){
        document.getElementById(divId).style.display = "none";
    }

    function handleClick(){
        setOctSwitchClass('octSwitchOff vCenter');
        let del = setTimeout( () => deleteById('octSwitch') , 200 );
    }

    function addMoreMeasures(formId){
        if(!measure2Switch){
            setMeasure2Switch(true);
        }else{
            setMeasure3Switch(true);
        }
    }

    function deleteMeasure(formId){
        if(measure3Switch){
            setMeasure3Switch(false);
            setF55VS(["",-1])
            setF56VS(["",-1])
        }else if(measure2Switch){
            setMeasure2Switch(false);
            setF53VS(["",-1])
            setF54VS(["",-1])
        }else{
            document.getElementById("octSwitch").style.display = null;
            setOctSwitchClass('octSwitchOn vCenter');
            if(octSwitchClass !== 'octSwitchOn vCenter'){
                document.getElementById("octSwitch").style.display = null;
                setOctSwitchClass('octSwitchOn vCenter');
            }
            setF51VS(["",-1])
            setF52VS(["",-1])
            setF53VS(["",-1])
            setF54VS(["",-1])
            setF55VS(["",-1])
            setF56VS(["",-1])
        }
    }

    //Automatic refresh for Magnitude F23 input 
    useEffect(() => {

        //Magnitude = K2-K1
        try {
            var magnitude = parseFloat(F31VS[0]) - parseFloat(F32VS[0]);
            setF34VS([ magnitude.toFixed(2) , F33VS[1] ]);
        }catch(error){}

    }, [ F31VS[0], F32VS[0] ])

    //Automatic refresh for OCT Average Magnitude and Average Axis
    //OCT1
    useEffect(() => {

        var averagesArray = getOctAverages(F51VS[0], F53VS[0], F55VS[0], F52VS[0], F54VS[0], F56VS[0])
        try{
            //Average Magnitude
            setF57Val(averagesArray[0].toFixed(2))
            //Average Axis
            setF58Val(averagesArray[1])
        }catch(e){}

    }, [F51VS[0], F52VS[0], F53VS[0], F54VS[0], F55VS[0], F56VS[0]])

    //Validate OCT
    useEffect(() => {

        setValidPreOct(false);

        if(octSwitchClass !== 'octSwitchOn vCenter'){
            if(!measure2Switch){
                if(F51VS[1] == 1 && F52VS[1] == 1){
                    setValidPreOct(true);
                }
            }else{
                if(!measure3Switch){
                    if(
                        F51VS[1] == 1 && F52VS[1] == 1 &&
                        F53VS[1] == 1 && F54VS[1] == 1 ){
                        setValidPreOct(true);
                    }
                }else{
                    if(
                        F51VS[1] == 1 && F52VS[1] == 1 &&
                        F53VS[1] == 1 && F54VS[1] == 1 &&
                        F55VS[1] == 1 && F56VS[1] == 1 ){
                        setValidPreOct(true);
                    }
                }
            }
        }else{
            setValidPreOct(true);
        }

    },[F51VS[1],F52VS[1],F53VS[1],F54VS[1],F55VS[1],F56VS[1],
        measure2Switch, measure3Switch, octSwitchClass])

    return (
    <Row className='bigBlock2 styledBox'>
        
        <Col xs={2} className='formIconDiv block4'>
            <Row>
                Measurements
            </Row>
            <Row>
                <img src={octicon} className='formIcon'/>
            </Row>
        </Col>

        <Col xs={3} className='vCenter formCol block3'>
            <Row className='title2'>
                Keratometric Astigmatism
            </Row>
            <Row>
                <Col xs={12} className='noPadding'>
                    <NumInput VS={F31VS} setVS={setF31VS}
                    label="K1 (steep):"
                    placeholder="K1"
                    min={20}
                    max={60}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='noPadding'>
                    <NumInput VS={F32VS} setVS={setF32VS}
                    label="K2 (flat):"
                    placeholder="K2"
                    min={20}
                    max={60}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row>
                <Col className='noPadding' style={{maxWidth: '36.5%'}}>
                    <NumInput VS={F33VS} setVS={setF33VS}
                    label="Axis:"
                    placeholder="..."
                    min={0}
                    max={180}
                    step={1}
                    readonly={false}
                    size={'0.8vw'}
                    />
                </Col>
                <Col className='noPadding' style={{paddingLeft: '0.4vw'}}>
                    <Magnitude VS={F34VS} setVS={setF34VS}/>
                </Col>
            </Row>
        </Col>

        <Col xs={3} className='vCenter formCol'>
            <Row className='title2'>
                Preoperative Refraction
            </Row>
            <Row>
                <Col style={{paddingRight: '0px'}}>
                    <NumInput VS={F41VS} setVS={setF41VS}
                    label="Sphere:"
                    placeholder=""
                    min={-15}
                    max={10}
                    step={0.1}
                    readonly={false}
                    className='octInput '
                    />
                </Col>
                <Col style={{paddingLeft: '2px'}}>
                    <NumInput VS={F42VS} setVS={setF42VS}
                    label="Cylinder:"
                    placeholder=""
                    min={-15}
                    max={10}
                    step={0.1}
                    readonly={false}
                    className='octInput '
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NumInput VS={F43VS} setVS={setF43VS}
                    label="Axis:"
                    placeholder=""
                    min={0}
                    max={180}
                    step={0.1}
                    readonly={false}
                    className='octInput '
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <NumInput VS={F44VS} setVS={setF44VS}
                    label="Vertex:"
                    placeholder=""
                    min={0}
                    max={180}
                    step={0.1}
                    readonly={false}
                    className='octInput '
                    />
                </Col>
            </Row>
        </Col>

        <Col xs={3} className='vCenter formCol'>

            <div id='octSwitch' className={octSwitchClass} 
                onClick={() => handleClick()}
                >
                    <span className='hCenter'>
                        <IoAddCircleOutline style={{fontSize: '3vw'}}/>
                        <br></br>
                        Add more measurements
                        <div style={{marginTop: '-0.5vh', fontSize: '0.8vw'}}>(For SICA calculation)</div>
                    </span>
            </div>

            <Row className='title2'>
                <Col xs={12} className='noPadding'>
                    OCT/Scheimpflug/Biometer
                </Col>
            </Row>
            <Row className='measureRow'>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    <span>
                        TCA 1:&nbsp;
                    </span>
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F51VS} setVS={setF51VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    className='octInput '
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F52VS} setVS={setF52VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>

                <span className='deleteMeasureSpan'
                style={{display: (!measure2Switch&&!measure3Switch)? null : 'none'}}>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure()}/>
                </span>
            </Row>
            <Row className='measureRow' style={{display: measure2Switch ? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    TCA 2:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F53VS} setVS={setF53VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F54VS} setVS={setF54VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <span className='deleteMeasureSpan'
                style={{display: (measure2Switch&&measure3Switch)? 'none' : null}}>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure()}/>
                </span>
            </Row>
            <Row className='measureRow' style={{display: measure3Switch? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    TCA 3:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F55VS} setVS={setF55VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F56VS} setVS={setF56VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <span className='deleteMeasureSpan'>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure()}/>
                </span>
            </Row>
            <Row className='addMeasureRow' style={{display: measure3Switch? 'none' : null}}
            id='addMore2'>
                <span onClick={() => addMoreMeasures()}>
                    Add more&nbsp;<IoAddCircleOutline/>
                </span>
            </Row>
            <Row>
                <Col xs={12} className='averagesCol'>
                    <span style={{display: measure2Switch? null : 'none'}}>
                        Average Magnitude: {F57Val}
                        &nbsp;&nbsp;
                        Average Axis: {F58Val}
                    </span>
                </Col>
            </Row>    
        </Col>

    </Row>
    )
}
