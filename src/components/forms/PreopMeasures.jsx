import React, {useEffect, useState} from 'react'
import NumInput from './inputs/NumInput';
import {Row, Col} from 'react-bootstrap';
import octicon from '../../img/oct-border4.png'
import {IoAddCircleOutline} from 'react-icons/io5'

export default function PreopMeasures({
    F21VS, setF21VS,
    F22VS, setF22VS,
    F23VS, setF23VS,
    F24VS, setF24VS,
    F25VS, setF25VS,
    F26VS, setF26VS,

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
    const [measure12Switch, seatMeasure12Switch] = useState(false);
    const [measure13Switch, seatMeasure13Switch] = useState(false);

    const [oct2SwitchClass, setOct2SwitchClass] = useState('octSwitchOn vCenter')
    const [measure22Switch, seatMeasure22Switch] = useState(false);
    const [measure23Switch, seatMeasure23Switch] = useState(false);

    function deleteById(divId){
        document.getElementById(divId).style.display = "none"
    }

    function handleClick(n){
        if (n == 1){
            setOct1SwitchClass('octSwitchOff vCenter');
            let del = setTimeout( () => deleteById('octSwitch1') , 200 );
        }else if(n == 2){
            setOct2SwitchClass('octSwitchOff vCenter');
            let del = setTimeout( () => deleteById('octSwitch2') , 200 );
        }
    }

    function addMoreMeasures(formId){
        if (formId === 1){
            if(!measure12Switch){
                seatMeasure12Switch(true);
            }else{
                seatMeasure13Switch(true);
                deleteById('addMore1');
            }
        }else if (formId === 2){
            if(!measure22Switch){
                seatMeasure22Switch(true);
            }else{
                seatMeasure23Switch(true);
                deleteById('addMore2');
            }
        }
    }

    //Automatic refresh for Magnitude F23 input 
    useEffect(() => {

        //Magnitude = K2-K1
        try {
            var magnitude = parseFloat(F22VS[0]) - parseFloat(F21VS[0]);
            setF23VS([ magnitude.toString().substring(0,4) , F23VS[1] ]);
        }catch(error){}

    }, [ F21VS[0], F22VS[0] ]);


    //Automatic refresh for Optimized Magnitude F25 input
    useEffect(() => {

        //Optimized magnitude = magnitude*0,836+0,103+0,457*COS(RADIANES(2*steepmeridian))
        try {
            var optimizedAstigmatism = 
            parseFloat(F23VS[0])*0.836 + 0.103 + 0.457*Math.cos( ( 2*parseFloat(F24VS[0]) ) * (Math.PI/180) );
            setF25VS([optimizedAstigmatism.toString().substring(0,5) , F25VS[1]])    
        }catch(error){}
        
    }, [ F21VS[0], F22VS[0], F23VS[0], F24VS[0] ])


    //Automatic refresh for OCT1 and OCT2 Average Magnitude and Average Axis F37, F38 inputs
    //OCT1
    useEffect(() => {

        try{
            //Average Magnitude
            if(F31VS[0] !== ""){
                if(F35VS[0] == "" ){
                    setF37Val(F31VS[0])
                }else{
                    var average = ( ( parseFloat(F31VS[0]) + parseFloat(F33VS[0]) +  parseFloat(F35VS[0]) ) / 3 )
                    setF37Val(average.toString().substring(0,4))
                }
            }
        }catch(e){}

        try{
            //Average Axis
            if(F32VS[0] !== ""){
                if(F36VS[0] == "" ){
                    setF38Val(F32VS[0])
                }else{
                    var average = ( ( parseFloat(F32VS[0]) + parseFloat(F34VS[0]) +  parseFloat(F36VS[0]) ) / 3 )
                    setF38Val(average.toString().substring(0,4))
                }
            }
        }catch(e){}
        
    }, [F31VS[0], F32VS[0], F33VS[0], F34VS[0], F35VS[0], F36VS[0]])
    //OCT2
    useEffect(() => {

        try{
            //Average Magnitude
            if(F41VS[0] !== ""){
                if(F45VS[0] == "" ){
                    setF47Val(F41VS[0])
                }else{
                    var average = ( ( parseFloat(F41VS[0]) + parseFloat(F43VS[0]) +  parseFloat(F45VS[0]) ) / 3 )
                    setF47Val(average.toString().substring(0,4))
                }
            }
        }catch(e){}

        try{
            //Average Axis
            if(F42VS[0] !== ""){
                if(F46VS[0] == "" ){
                    setF48Val(F42VS[0])
                }else{
                    var average = ( ( parseFloat(F42VS[0]) + parseFloat(F44VS[0]) +  parseFloat(F46VS[0]) ) / 3 )
                    setF48Val(average.toString().substring(0,4))
                }
            }
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
                <Col xs={6} className='noPadding'>
                    <NumInput VS={F22VS} setVS={setF22VS}
                    label="K1 (steep):"
                    placeholder="20~30"
                    min={0}
                    max={100}
                    step={1}
                    readonly={false}
                    />
                </Col>
                <Col xs={6} className='noPadding'>
                    <NumInput VS={F21VS} setVS={setF21VS}
                    label="K2 (flat):"
                    placeholder="20~30"
                    min={0}
                    max={100}
                    step={1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='noPadding'>
                <NumInput VS={F24VS} setVS={setF24VS}
                    label="Steep Meridian:"
                    placeholder="..."
                    min={0}
                    max={100}
                    step={1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row>
                <Col xs={12} className='noPadding'>
                    <NumInput VS={F23VS} setVS={setF23VS}
                    label="Magnitude:"
                    placeholder="..."
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={true}
                    />
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
                </span>
            </div>

            <Row className='title2'>
                <Col xs={12} className='noPadding'>
                    &nbsp;&nbsp;OCT1 / Scheimpflug / Biometer
                </Col>
            </Row>
            <Row className='measureRow'>
                <Col xs={4} className='vCenter noPadding measureCol1'>
                    <span>
                        Measurements 1:&nbsp;
                    </span>
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F31VS} setVS={setF31VS}
                    label=""
                    placeholder="Magnitude"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F32VS} setVS={setF32VS}
                    label=""
                    placeholder="Axis"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row className='measureRow' style={{display: measure12Switch ? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol1'>
                    Measurements 2:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F33VS} setVS={setF33VS}
                    label=""
                    placeholder="Magnitude"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F34VS} setVS={setF34VS}
                    label=""
                    placeholder="Axis"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row className='measureRow' style={{display: measure13Switch? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol1'>
                    Measurements 3:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F35VS} setVS={setF35VS}
                    label=""
                    placeholder="Magnitude"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F36VS} setVS={setF36VS}
                    label=""
                    placeholder="Axis"
                    min={20}
                    max={30}
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
                </span>
            </div>


            <Row className='title2'>
                <Col xs={12} className='noPadding'>
                    &nbsp;&nbsp;OCT2 / Scheimpflug / Biometer
                </Col>
            </Row>
            <Row className='measureRow'>
                <Col xs={4} className='vCenter noPadding measureCol1'>
                    <span>
                        Measurements 1:&nbsp;
                    </span>
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F41VS} setVS={setF41VS}
                    label=""
                    placeholder="Magnitude"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    className='octInput '
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F42VS} setVS={setF42VS}
                    label=""
                    placeholder="Axis"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row className='measureRow' style={{display: measure22Switch ? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol1'>
                    Measurements 2:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F43VS} setVS={setF43VS}
                    label=""
                    placeholder="Magnitude"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F44VS} setVS={setF44VS}
                    label=""
                    placeholder="Axis"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
            </Row>
            <Row className='measureRow' style={{display: measure23Switch? null : 'none'}}>
                <Col xs={4} className='vCenter noPadding measureCol1'>
                    Measurements 3:&nbsp;
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F45VS} setVS={setF45VS}
                    label=""
                    placeholder="Magnitude"
                    min={20}
                    max={30}
                    step={0.1}
                    readonly={false}
                    />
                </Col>
                <Col xs={4} className='noPadding'>
                    <NumInput VS={F46VS} setVS={setF46VS}
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
