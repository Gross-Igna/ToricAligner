import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap';

export default function SurgeonName({Val, setVal, setSt}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl surgeonNameInput controlNeutral');


    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(Val.length < 1){
                setSt(0);
                setClass('formControl controlInvalid surgeonNameInput');
            }else{
                setSt(1);
                setClass('formControl controlValid surgeonNameInput');
            }
        }
    },[Val]);

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Form.Group>
                <div className='inputDiv'>
                    <span className='controlLabel'>Surgeon:&nbsp;&nbsp;</span>
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
