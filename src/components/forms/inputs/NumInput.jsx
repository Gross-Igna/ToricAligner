import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

export default function NumInput({label, placeholder, min, max, step, VS, setVS}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl');

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(VS[0].length < 4){
                setVS=[VS[0],0];
                setClass('formControl controlInvalid');
            }else{
                setVS=[VS[0],1];
                setClass('formControl controlValid');
            }
        }
    });

    return (
        <Form>
            <Form.Group>
                <div className='inputDiv'>
                    <span className='controlLabel'>{label}</span>
                    <Form.Control type="number" placeholder={placeholder}
                    min={min} max={max} step={step}
                    className={Class} value={VS}
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
