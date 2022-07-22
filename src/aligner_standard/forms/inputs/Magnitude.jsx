import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

export default function Magnitude({VS, setVS}) {

    const [Class, setClass] = useState('');

    function handleBlur(){
        var p = VS[0];
        setVS([p.replace(/,/g , "."), VS[1]]);
    }

    useEffect(() => {
        //Check validity and set class.
            if(VS[0] !== ""){
                if(parseFloat(VS[0]) < 0 || VS[0] > 100 || VS[0] === "" || VS[0] === undefined){
                    setVS([VS[0],0]);
                    setClass('formControl controlInvalid numericInput');
                }else{
                    setVS([VS[0],1]);
                    setClass('formControl controlValid numericInput');
                }
            }else{
                setClass('formControl controlNeutral')
            }
    }, [VS[0]]);

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Form.Group>
                <div className='inputDiv'>
                    <span className='controlLabel'>
                        Magnitude:&nbsp;
                    </span>
                    <Form.Control type="number" placeholder={"..."}
                    min={0} max={100} step={1} readOnly={true}
                    className={Class}
                    pattern={"^([0-9]*[.])?[0-9]*$"}
                    value={VS[0]} onBlur={() => handleBlur()}
                    />
                </div>  
            </Form.Group>
        </Form>
    )
}
