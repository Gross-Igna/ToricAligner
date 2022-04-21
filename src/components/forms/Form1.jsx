import React, {useState} from 'react'
import {Form} from 'react-bootstrap';

export default function Form1() {
  
  const [F11Cls, setF11Cls] = useState('formControl controlNeutral');

  return (
    <Form>
        <Form.Group>
          <div className='inputDiv'>
            <span className='controlLabel'>Label</span>
            <Form.Control type="number" placeholder='?' 
            min={1} max={5} step={0.1}
            onChange={() => console.log('')}
            className={F11Cls}
            />
          </div>  
        </Form.Group>
    </Form>
  )
}
