import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap';

export default function EyeLR({Val, setVal, setSt}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl colorgrey eyeInput')

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(Val === "Select Eye"){
                setSt(0);
                setClass('formControl controlInvalid eyeInput');
            }else{
                setSt(1);
                setClass('formControl controlValid eyeInput');
            }
        }
    },[Val]);

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Form.Group>
                <div className='inputDiv eyeDiv'>
                    <span className='controlLabel'>Eye:&nbsp;&nbsp;</span>
                    <Form.Select 
                        style={{fontSize: '0.7vw'}}
                        className={Class} value={Val}
                        onChange={
                            (e) => {
                                setChanged(true);
                                //Update value State
                                setVal(e.target.value);
                            }
                        }>
                        <option value="Select Eye" style={{display: 'none'}}>
                            Select Eye
                        </option>
                        <option value="Left">Left Eye</option>
                        <option value="Right">Right Eye</option>
                    </Form.Select>
                </div>  
            </Form.Group>
        </Form>
    )
}
