import React, {useEffect} from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function CalculateBtn({setStage, validPreop}) {
  
  useEffect( () => {

    let calculateBtn = document.getElementById("calculateBtn")

      if(validPreop){
        calculateBtn.disabled = false;
      }else{
        calculateBtn.disabled = true;
      }

  }, [validPreop])

  return (
    <button className='calculateBtn' type="button" onClick={() => setStage(2)} id="calculateBtn">
        Continue To Postoperative Data<br></br>
        <BsFillArrowRightCircleFill/>
    </button>
  )
}
