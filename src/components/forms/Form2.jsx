import React, {useState} from 'react'
import {Form} from 'react-bootstrap';

export default function Form2() {
  
  //Form 1 inputs states: Value, Status, Class and Limits for each one.
  //Status: -1=neutral, 0=unvalid, 1=valid
  const [F11Val, setF11Val] = useState(NaN);
  const [F11Sts, setF11Sts] = useState(-1);
  const [F11Cls, setF11Cls] = useState('formControl controlNeutral');

  return (
    <Form>
        <Form.Group>
          <div className='inputDiv'>
            <Form.Control type="number" placeholder='?' 
            min={1} max={5} step={0.1}
            onChange={() => console.log('armoso')}
            className={F11Cls}
            />
          </div>  
        </Form.Group>
    </Form>
  )
}
