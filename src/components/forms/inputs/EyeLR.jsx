import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap';

export default function EyeLR({Val, setVal, setSt}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl colorgrey')

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(Val === "Select Eye"){
                setSt(0);
                setClass('formControl controlInvalid');
            }else{
                setSt(1);
                setClass('formControl controlValid');
            }
        }
    });

    return (
        <Form>
            <Form.Group>
                <div className='inputDiv'>
                    <span className='controlLabel'>Eye:</span>
                    <Form.Select 
                        className={Class} value={Val}
                        onChange={
                            (e) => {
                                setChanged(true);
                                //Update value State
                                setVal(e.target.value);
                            }
                        }>
                        <option value="Select Eye">Select Eye</option>
                        <option value="Left eye">Left eye</option>
                        <option value="Right eye">Right eye</option>
                    </Form.Select>
                </div>  
            </Form.Group>
        </Form>
    )
}
