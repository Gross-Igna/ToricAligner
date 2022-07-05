import React, {useState, useEffect} from 'react';
import {Form} from 'react-bootstrap';

import { types } from '../../../helpers/enums/IOLModels';
import { types as ManufacterersTypes } from '../../../helpers/enums/IOLManufacturers';

export default function Model({VS, setVS, Mfact}) {

    const [changed, setChanged] = useState(false);
    const [Class, setClass] = useState('formControl controlNeutral');

    const [ selectedOption, setSelectedOption ] = useState(null);
    const [ options, setOptions ] = useState(null);

    useEffect(() => {
        //Check validity and set class.
        if(changed){
            setVS([VS[0],1]);
            setClass('formControl controlValid eyeInput');
        }
    },[VS[0]]);

    useEffect(() => {
        const recognizeOptions = () => {
            let tempVal = [];
            tempVal = types.filter((type) => type.manufacturer === Mfact);
            setOptions(tempVal);
        };
        recognizeOptions();
    }, [, Mfact])

    // const [models, setModels] = {
    //     Id: ['']
    //   };
      
    // $('#modelSelector').append(
    // data.Id.map(function(v) {
    //     return $('<option/>', {
    //     value: v,
    //     text: v
    //     })
    // })
    // ).change(function() {
    // console.log(this.value);
    // });



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