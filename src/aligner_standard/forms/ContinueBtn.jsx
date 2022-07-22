import React, {useEffect} from 'react'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'

export default function ContinueBtn({setStage, validPreop}) {
  
  useEffect( () => {

    let continueBtn = document.getElementById("continueBtn")

      if(validPreop){
        continueBtn.disabled = false;
      }else{
        continueBtn.disabled = true;
      }

  }, [validPreop])

  return (
    <button className={validPreop? 'continueBtn styledBox title2' : 'continueBtnDisabled styledBox'} 
    type="button" onClick={() => setStage(1)} id="continueBtn">
        Postoperative Data<br></br>
        <BsFillArrowRightCircleFill className='arrowIcon'/>
    </button>
  )
}
