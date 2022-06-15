import React, {useState, useEffect} from 'react'
import {Form, Row, Col} from 'react-bootstrap';

export default function PatientName({Val, setVal, setSt}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl nameInput controlNeutral')

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(Val.length < 4){
                setSt(0);
                setClass('formControl controlInvalid nameInput');
            }else{
                setSt(1);
                setClass('formControl controlValid nameInput');
            }
        }
    },[Val]);

    return (
        <Form>
            <Form.Group className='inputDiv patientNameDiv'>
                    <span className='controlLabel'>Patient:&nbsp;&nbsp;</span>
                    <Form.Control 
                        type="text" placeholder='Enter patient name / ID'
                        className={Class} value={Val}
                        onChange={
                            (e) => 
                                {
                                setChanged(true);
                                //Update value State
                                setVal(e.target.value);
                            }
                        }
                    />
            </Form.Group>
        </Form>
    )
}
