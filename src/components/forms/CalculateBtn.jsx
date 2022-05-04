import React from 'react'
import {IoCalculator} from 'react-icons/io5'

export default function continueBtn() {
  return (
    <button className='calculateBtn styledBox' type="button">
        Calculate!<br></br>
        <IoCalculator className='calculatorIcon'/>
    </button>
  )
}
