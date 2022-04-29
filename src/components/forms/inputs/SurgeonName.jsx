import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap';

export default function SurgeonName({Val, setVal, setSt}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl surgeonNameInput controlNeutral');


    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(Val.length < 4){
                setSt(0);
                setClass('formControl controlInvalid surgeonNameInput');
            }else{
                setSt(1);
                setClass('formControl controlValid surgeonNameInput');
            }
        }
    });

    return (
        <Form>
            <Form.Group>
                <div className='inputDiv'>
                    <span className='controlLabel'>Surgeon:</span>
                    <Form.Control type="text" placeholder='Enter surgeon name' 
                    className={Class} value={Val}
                    onChange={(e) => 
                        {      
                            setChanged(true);
                            //Update value State
                            setVal(e.target.value);
                        }}
                    />
                </div>  
            </Form.Group>
        </Form>
    )
}
