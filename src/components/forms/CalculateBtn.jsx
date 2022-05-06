import React, {useEffect} from 'react'
import {IoCalculator} from 'react-icons/io5'

export default function CalculateBtn({validPostop}) {

  useEffect( () => {

    let calculateBtn = document.getElementById("calculateBtn")

      if(validPostop){
        calculateBtn.disabled = false;
      }else{
        calculateBtn.disabled = true;
      }

  }, [validPostop])

  return (
    <button className={validPostop? 'calculateBtn styledBox' : 'calculateBtnDisabled styledBox'} type="button" 
    id='calculateBtn'>
        Calculate!<br></br>
        <IoCalculator className='calculatorIcon'/>
    </button>
  )
}
