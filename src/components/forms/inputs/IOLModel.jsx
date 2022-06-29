import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

export default function Model({VS, setVS, Mfact}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl controlNeutral');

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            setVS([VS[0],1]);
            setClass('formControl controlValid eyeInput');
        }
    },[VS[0]]);

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Form.Group>
                <div className='inputDiv'>
                    <Form.Select
                    readOnly={(Mfact == 'Manufacturer' || Mfact == 'Other')? true : false}
                    className={Class} value={VS[0]}
                    onChange={(e) => 
                        {      
                            setChanged(true);
                            //Update value VSate
                            setVS([e.target.value, VS[1]]);
                        }}
                    >
                        <option value="Model" style={{display: 'none'}}>Model</option>
                        
                        {/*Options for Alcon*/}
                        <option value="T2"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T2
                        </option>
                        <option value="T3"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T3
                        </option>
                        <option value="T4"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T4
                            </option>
                        <option value="T5"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T5
                        </option>
                        <option value="T6"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T6
                        </option>
                        <option value="T7"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T7
                        </option>
                        <option value="T8"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T8
                        </option>
                        <option value="T9"
                        style={{display: (Mfact==="Alcon")? null : 'none'}}>
                            T9
                        </option>

                        {/*Options for B+L*/}
                        <option value="1.25" 
                        style={{display: (Mfact==="B+L")? null : 'none'}}>
                            1.25
                        </option>
                        <option value="2"
                        style={{display: (Mfact==="B+L")? null : 'none'}}>
                            2
                        </option>
                        <option value="2.75" 
                        style={{display: (Mfact==="B+L")? null : 'none'}}>
                            2.75
                        </option>
                        <option value="3.5"
                        style={{display: (Mfact==="B+L")? null : 'none'}}>
                            3.5
                        </option>
                        <option value="4.25" style={{display: (Mfact==="B+L")? null : 'none'}}>
                            4.25
                        </option>
                        <option value="5"
                        style={{display: (Mfact==="B+L")? null : 'none'}}>
                            5
                        </option>
                        <option value="5.75" style={{display: (Mfact==="B+L")? null : 'none'}}>
                            5.75
                        </option>

                        {/*Options for J&J and Physiol*/}
                        <option value="150"
                        style={{display: (Mfact==="J&J" || Mfact==="Physiol")? null : 'none'}}>
                            150
                        </option>
                        <option value="225"
                        style={{display: (Mfact==="J&J" || Mfact==="Physiol")? null : 'none'}}>
                            225
                        </option>
                        <option value="300"
                        style={{display: (Mfact==="J&J" || Mfact==="Physiol")? null : 'none'}}>
                            300
                        </option>
                        <option value="375"
                        style={{display: (Mfact==="J&J" || Mfact==="Physiol")? null : 'none'}}>
                            375
                        </option>
                        <option value="450"
                        style={{display: (Mfact==="J&J" || Mfact==="Physiol")? null : 'none'}}>
                            450
                        </option>
                        <option value="525"
                        style={{display: (Mfact==="J&J" || Mfact==="Physiol")? null : 'none'}}>
                            525
                        </option>
                        <option value="600"
                        style={{display: (Mfact==="J&J" || Mfact==="Physiol")? null : 'none'}}>
                            600
                        </option>

                        <option value="100"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            100
                        </option>
                        <option value="150"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            150
                        </option>
                        <option value="200"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            200
                        </option>
                        <option value="250"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            250
                        </option>
                        <option value="300"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            300
                        </option>
                        <option value="350"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            350
                        </option>
                        <option value="400"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            400
                        </option>
                        <option value="450"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            450
                        </option>
                        <option value="500"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            500
                        </option>
                        <option value="550"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            550
                        </option>
                        <option value="600"
                        style={{display: (Mfact==="Rayner")? null : 'none'}}>
                            600
                        </option>
                    </Form.Select>
                </div>  
            </Form.Group>
        </Form>
    )
}
