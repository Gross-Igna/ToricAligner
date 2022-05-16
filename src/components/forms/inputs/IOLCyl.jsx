import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

export default function IOLCyl({label, placeholder, min, max, step, readonly, VS, setVS, size, Mfact}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl controlNeutral numericInput');

    useEffect(() => {
        //Check validity and set class.
            if(VS[0] == undefined){
                setClass('formControl controlNeutral numericInput')
            }else{
                if(VS[0] < min || VS[0] > max){
                    setVS([VS[0],0]);
                    setClass('formControl controlInvalid numericInput');
                }else{
                    setVS([VS[0],1]);
                    setClass('formControl controlValid numericInput');
                }
            }

    }, [VS[0], Mfact]);

    return (
        <Form>
            <Form.Group>
                <div className='inputDiv'>
                    <span className='controlLabel' 
                    style={{display: (label==='')?'none': null}}>
                        {label}&nbsp;
                    </span>
                    <Form.Control type="number" placeholder={placeholder}
                    min={min} max={max} step={step} readOnly={readonly? true : false}
                    className={Class} style={{width: size}}
                    value={VS[0]}
                    onChange={(e) => 
                        {      
                            setChanged(true);
                            //Update value VSate
                            setVS([e.target.value, VS[1]]);
                        }}
                    />
                </div>  
            </Form.Group>
        </Form>
    )
}
