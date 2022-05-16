import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

export default function Manufacturer({VS, setVS}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl controlNeutral');

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(VS[0] === "Manufacturer"){
                setVS([VS[0],0]);
                setClass('formControl controlInvalid eyeInput');
            }else{
                setVS([VS[0],1]);
                setClass('formControl controlValid eyeInput');
            }
        }
    }, [VS[0]]);

    return (
        <Form>
            <Form.Group>
                <div className='inputDiv'>
                    <Form.Select placeholder={'Manufacturer'}
                    className={Class} value={VS[0]}
                    onChange={(e) => 
                        {      
                            setChanged(true);
                            //Update value VSate
                            setVS([e.target.value, VS[1]]);
                        }}
                    >
                        <option value="Manufacturer" style={{display: 'none'}}>
                            Manufacturer
                        </option>
                        <option value="Custom">Custom IOL</option>
                        <option value="Alcon">Alcon</option>
                        <option value="B+L">Bausch+Lomb</option>
                        <option value="JandJ">J&amp;J</option>
                        <option value="Physiol">Physiol</option>
                        <option value="Rayner">Rayner</option>
                    </Form.Select>
                </div>  
            </Form.Group>
        </Form>
    )
}
