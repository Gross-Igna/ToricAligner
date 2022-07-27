import React, {useState, useEffect} from 'react'
import {Form} from 'react-bootstrap';

export default function Lens({Val, setVal, setSt}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl colorgrey eyeInput')

    useEffect(() => {
        //Check validity and set class.
        if(changed){
          setSt(1);
          setClass('formControl controlValid');
        }
    },[Val]);

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Form.Group>
                <div className='inputDiv'>
                    <Form.Select 
                        className={Class} value={Val}
                        style={{fontSize: '5vw !important'}}
                        onChange={
                            (e) => {
                                setChanged(true);
                                //Update value State
                                setVal(e.target.value);
                            }
                        }>
                        <option value="Select" style={{display: 'none'}}>
                            Please select lens type to see models
                        </option>
                        <option value="Piggyback">Standard Piggyback IOL (Any Brand)</option>
                        <option value="Staar">STAAR Toric ICL</option>
                        <option value="IPCL">IPCL Toric</option>
                        <option value="Artiflex">Artiflex Toric</option>
                        <option value="Eyecril">Eyecril Phakic IOL</option>
                    </Form.Select>
                </div>  
            </Form.Group>
        </Form>
    )
}

