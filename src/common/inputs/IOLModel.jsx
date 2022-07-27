import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

import { types } from '../../helpers/enums/IOLModels';

export default function Model({VS, setVS, Mfact}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl controlNeutral');

    const [ selectedOption, setSelectedOption ] = useState(null);
    const [ options, setOptions ] = useState([{name:'', manufacturer:['','']}]);

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            if(VS[0] !== ''){
                setVS([VS[0],1]);
                setClass('formControl controlValid');
            }else{
                setVS([VS[0],-1]);
                setClass('formControl controlNeutral');
            }}
    },[VS[0], Mfact]);

    useEffect(() => {
        const recognizeOptions = () => {
            let tempVal = [];
            tempVal = types.filter((type) => type.manufacturer.includes(Mfact));
            setOptions(tempVal);
        };
        recognizeOptions();
    }, [Mfact])

    return (
        <Form onSubmit={e => { e.preventDefault(); }}>
            <Form.Group>
                <div className='inputDiv'>
                    <Form.Select id='modelSelector'
                    readOnly={(Mfact == 'Manufacturer' || Mfact == 'Other')? true : false}
                    className={Class} value={VS[0]}
                    onChange={(e) => 
                        {      
                            setChanged(true);
                            //Update value VSate
                            setVS([e.target.value, VS[1]]);
                        }}
                    >
                        {/* Aca va el input */}
                        {options.map((option) => (
                           <option value={option.code}>{option.name}</option>
                        ))}
                    </Form.Select>
                </div>  
            </Form.Group>
        </Form>
    )
}