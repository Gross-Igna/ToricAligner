import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap';

export default function Date({Val, setVal, setSt}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl colorgrey controlNeutral')

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            setSt(1);
            setClass('formControl controlValid');
        }
    });

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Form.Group>
                <div className='inputDiv'>
                    <span className='controlLabel'>Date of surgery:</span>
                    <Form.Control 
                        type="date" placeholder='Enter date'
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
                </div>  
            </Form.Group>
        </Form>
    )
}
