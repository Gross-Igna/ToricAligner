import React, {useEffect, useState} from 'react'
import { getOctAverages } from '../../services/ToricCalculation';
import NumInput from '../../common/inputs/NumInput';
import Magnitude from '../../common/inputs/Magnitude';
import {Row, Col} from 'react-bootstrap';
import octicon from '../../img/oct-border4.png'
import {IoAddCircleOutline, IoCloseCircleOutline} from 'react-icons/io5'

export default function PreopMeasures({
    setValidPreOct,

    F21VS, setF21VS,
    F22VS, setF22VS,
    F23VS, setF23VS,
    F24VS, setF24VS,

    F31VS, setF31VS,
    F32VS, setF32VS,
    F33VS, setF33VS,
    F34VS, setF34VS,
    F35VS, setF35VS,
    F36VS, setF36VS,
    F37Val, setF37Val,
    F38Val, setF38Val,

    F41VS, setF41VS,
    F42VS, setF42VS,
    F43VS, setF43VS,
    F44VS, setF44VS,
    F45VS, setF45VS,
    F46VS, setF46VS,
    F47Val, setF47Val,
    F48Val, setF48Val
}) {
    
    //States and onclick functions for activating or desactivating additional OCT Measures
    const [oct1SwitchClass, setOct1SwitchClass] = useState('octSwitchOn vCenter')
    const [measure12Switch, setMeasure12Switch] = useState(false);
    const [measure13Switch, setMeasure13Switch] = useState(false);

    const [oct2SwitchClass, setOct2SwitchClass] = useState('octSwitchOn vCenter')
    const [measure22Switch, setMeasure22Switch] = useState(false);
    const [measure23Switch, setMeasure23Switch] = useState(false);

    function deleteById(divId){
        document.getElementById(divId).style.display = "none";
    }

    function handleClick(n){
        if (n == 1){
            setOct1SwitchClass('octSwitchOff vCenter');
            let del = setTimeout( () => deleteById('octSwitch1') , 200 );
        }else if(n == 2){
            if(oct1SwitchClass !== 'octSwitchOn vCenter'){
                setOct2SwitchClass('octSwitchOff vCenter');
                let del = setTimeout( () => deleteById('octSwitch2') , 200 );
            }
        }
    }

    function addMoreMeasures(formId){
        if (formId === 1){
            if(!measure12Switch){
                setMeasure12Switch(true);
            }else{
                setMeasure13Switch(true);
                //deleteById('addMore1');
            }
        }else if (formId === 2){
            if(!measure22Switch){
                setMeasure22Switch(true);
                setF45VS(["",-1])
                setF46VS(["",-1])
            }else{
                setMeasure23Switch(true);
                //deleteById('addMore2');
            }
        }
    }

    function deleteMeasure(formId){
        if(formId === 1){
            if(measure13Switch){
                setMeasure13Switch(false);
                setF35VS(["",-1])
                setF36VS(["",-1])
            }else if(measure12Switch){
                setMeasure12Switch(false);
                setF33VS(["",-1])
                setF34VS(["",-1])
            }else{
                document.getElementById("octSwitch1").style.display = null;
                setOct1SwitchClass('octSwitchOn vCenter');
                if(oct2SwitchClass !== 'octSwitchOn vCenter'){
                    document.getElementById("octSwitch2").style.display = null;
                    setOct2SwitchClass('octSwitchOn vCenter');
                }
                setF31VS(["",-1])
                setF32VS(["",-1])
                setF41VS(["",-1])
                setF42VS(["",-1])
                setF43VS(["",-1])
                setF44VS(["",-1])
                setF45VS(["",-1])
                setF46VS(["",-1])
            }
        }else{
            if(measure23Switch){
                setMeasure23Switch(false);
                setF45VS(["",-1])
                setF46VS(["",-1])
            }else if(measure22Switch){
                setMeasure22Switch(false);
                setF43VS(["",-1])
                setF44VS(["",-1])
            }else{
                document.getElementById("octSwitch2").style.display = null;
                setOct2SwitchClass('octSwitchOn vCenter');
                setF41VS(["",-1])
                setF42VS(["",-1])
            }
        }
    }

    //Validate OCTs
    useEffect(() => {

        let oct1isValid = false;

        setValidPreOct(false);

        if(oct1SwitchClass !== 'octSwitchOn vCenter'){
            if(!measure12Switch){
                if(F31VS[1] == 1 && F32VS[1] == 1){
                    setValidPreOct(true);
                    oct1isValid=true;
                }
            }else{
                if(!measure13Switch){
                    if(
                        F31VS[1] == 1 && F32VS[1] == 1 &&
                        F33VS[1] == 1 && F34VS[1] == 1 ){
                        setValidPreOct(true);
                        oct1isValid=true;
                    }
                }else{
                    if(
                        F31VS[1] == 1 && F32VS[1] == 1 &&
                        F33VS[1] == 1 && F34VS[1] == 1 &&
                        F35VS[1] == 1 && F36VS[1] == 1 ){
                        setValidPreOct(true);
                        oct1isValid=true;
                    }
                }
            }
        }

        if(oct2SwitchClass !== 'octSwitchOn vCenter' && oct1isValid){
            if(!measure22Switch){
                if(F41VS[1] == 1 && F42VS[1] == 1){
                    setValidPreOct(true);
                }else{
                    setValidPreOct(false);
                }
            }else{
                if(!measure23Switch){
                    if(
                        F41VS[1] == 1 && F42VS[1] == 1 &&
                        F43VS[1] == 1 && F44VS[1] == 1){
                        setValidPreOct(true);
                    }else{
                        setValidPreOct(false);
                    }
                }else{
                    if(
                        F41VS[1] == 1 && F42VS[1] == 1 &&
                        F43VS[1] == 1 && F44VS[1] == 1 &&
                        F45VS[1] == 1 && F46VS[1] == 1 ){
                        setValidPreOct(true);
                    }else{
                        setValidPreOct(false);
                    }
                }
            }
        }else if (oct1SwitchClass == 'octSwitchOn vCenter'){
                setValidPreOct(true);
        }

    },[F31VS[1],F32VS[1],F33VS[1],F34VS[1],F35VS[1],F36VS[1],F41VS[1],
        F42VS[1],F43VS[1],F44VS[1],F45VS[1],F46VS[1],
        measure12Switch, measure13Switch, measure22Switch, measure23Switch,
        oct1SwitchClass, oct2SwitchClass])


    //Automatic refresh for Magnitude F23 input 
    useEffect(() => {

        //Magnitude = K2-K1
        try {
            var magnitude = parseFloat(F22VS[0]) - parseFloat(F21VS[0]);
            setF23VS([ magnitude.toFixed(2) , F23VS[1] ]);
        }catch(error){}

    }, [ F21VS[0], F22VS[0] ])


    //Automatic refresh for OCT1 and OCT2 Average Magnitude and Average Axis F37, F38 inputs
    //OCT1
    useEffect(() => {

        var averagesArray = getOctAverages(F31VS[0], F33VS[0], F35VS[0], F32VS[0], F34VS[0], F36VS[0])

        try{
            //Average Magnitude
            setF37Val(averagesArray[0].toFixed(2))
            //Average Axis
            setF38Val(averagesArray[1])
        }catch(e){}
        
    }, [F31VS[0], F32VS[0], F33VS[0], F34VS[0], F35VS[0], F36VS[0]])
    //OCT2
    useEffect(() => {
        
        var averagesArray = getOctAverages(F41VS[0], F43VS[0], F45VS[0], F42VS[0], F44VS[0], F46VS[0])

        try{
            //Average Magnitude
            setF47Val(averagesArray[0].toFixed(2))
            //Average Axis
            setF48Val(averagesArray[1])
        }catch(e){}
        
    }, [F41VS[0], F42VS[0], F43VS[0], F44VS[0], F45VS[0], F46VS[0]])


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
                    <NumInput VS={F22VS} setVS={setF22VS}
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
                    <NumInput VS={F21VS} setVS={setF21VS}
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
                    <NumInput VS={F24VS} setVS={setF24VS}
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
                    <Magnitude VS={F23VS} setVS={setF23VS}/>
                </Col>
            </Row>
        </Col>

        <Col xs={3} className='vCenter formCol'>

            <div id='octSwitch1' className={oct1SwitchClass} 
                onClick={() => handleClick(1)}
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
                    OCT/Scheimpflug/Biometer 1
                </Col>
            </Row>
            <Row className='measureRow'>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    <span>
                        TCA 1:&nbsp;
                    </span>
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F31VS} setVS={setF31VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F32VS} setVS={setF32VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>

                <span className='deleteMeasureSpan'
                style={{display: (!measure12Switch&&!measure13Switch)? null : 'none'}}>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure(1)}/>
                </span>
            </Row>
            <Row className='measureRow' style={{display: measure12Switch ? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    TCA 2:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F33VS} setVS={setF33VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F34VS} setVS={setF34VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>


                <span className='deleteMeasureSpan'
                style={{display: (measure12Switch&&measure13Switch)? 'none' : null}}>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure(1)}/>
                </span>
            </Row>
            <Row className='measureRow' style={{display: measure13Switch? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    TCA 3:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F35VS} setVS={setF35VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F36VS} setVS={setF36VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <span className='deleteMeasureSpan'><IoCloseCircleOutline id='deleteButton'
                onClick={() => deleteMeasure(1)}/></span>
            </Row>
            <Row className='addMeasureRow' style={{display: measure13Switch? 'none' : null}}
            id='addMore1'>
                <span onClick={() => addMoreMeasures(1)}>
                    Add more&nbsp;<IoAddCircleOutline/>
                </span>
            </Row>
            <Row>
                <Col xs={12} className='averagesCol'>
                    <span style={{display: measure12Switch? null : 'none'}}>
                        Average Magnitude: {F37Val}
                        &nbsp;&nbsp;
                        Average Axis: {F38Val}
                    </span>
                </Col>
            </Row>
        </Col>

        <Col xs={3} className='vCenter formCol'>

            <div id='octSwitch2' className={oct2SwitchClass} 
                onClick={() => handleClick(2)}
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
                    OCT/Scheimpflug/Biometer 2
                </Col>
            </Row>
            <Row className='measureRow'>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    <span>
                        TCA 1:&nbsp;
                    </span>
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F41VS} setVS={setF41VS}
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
                    <NumInput VS={F42VS} setVS={setF42VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>

                <span className='deleteMeasureSpan'
                style={{display: (!measure22Switch&&!measure23Switch)? null : 'none'}}>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure(2)}/>
                </span>
            </Row>
            <Row className='measureRow' style={{display: measure22Switch ? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    TCA 2:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F43VS} setVS={setF43VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F44VS} setVS={setF44VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <span className='deleteMeasureSpan'
                style={{display: (measure22Switch&&measure23Switch)? 'none' : null}}>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure(2)}/>
                </span>
            </Row>
            <Row className='measureRow' style={{display: measure23Switch? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol'>
                    TCA 3:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F45VS} setVS={setF45VS}
                    label=""
                    placeholder="Magnitude"
                    min={0}
                    max={20}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F46VS} setVS={setF46VS}
                    label=""
                    placeholder="Axis"
                    min={1}
                    max={180}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <span className='deleteMeasureSpan'>
                    <IoCloseCircleOutline id='deleteButton' onClick={() => deleteMeasure(2)}/>
                </span>
            </Row>
            <Row className='addMeasureRow' style={{display: measure23Switch? 'none' : null}}
            id='addMore2'>
                <span onClick={() => addMoreMeasures(2)}>
                    Add more&nbsp;<IoAddCircleOutline/>
                </span>
            </Row>
            <Row>
                <Col xs={12} className='averagesCol'>
                    <span style={{display: measure22Switch? null : 'none'}}>
                        Average Magnitude: {F47Val}
                        &nbsp;&nbsp;
                        Average Axis: {F48Val}
                    </span>
                </Col>
            </Row>    
        </Col>

    </Row>
    )
}
