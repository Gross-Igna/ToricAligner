import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

export default function NumInput({label, placeholder, min, max, step, readonly, VS, setVS, size}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('');

    function handleBlur(){
        setVS([VS[0].replace(/,/g , "."), VS[1]]);
    }

    useEffect(() => {
        //Check validity and set class.
        if(readonly){
                setClass('formControl controlValid numericInput')
            }else{
                if(changed){
                    if(VS[0] < min || VS[0] > max || VS[0] === "" || VS[0] === undefined){
                        setVS([VS[0],0]);
                        setClass('formControl controlInvalid numericInput');
                    }else{
                        setVS([VS[0].replace(/,/ , "."),1]);
                        setClass('formControl controlValid numericInput');
                    }
                }else{
                    setClass('formControl controlNeutral')
                }
            }
    }, [VS[0]]);

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
                    pattern={"^([0-9]*[.])?[0-9]*$"}
                    value={VS[0]} onBlur={() => handleBlur()}
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
