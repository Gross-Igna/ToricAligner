import React, {useState} from 'react'
import './disclaimer.css'
import {AiFillAlert} from 'react-icons/ai'
import toricLogo from '../img/toric-logo.png'

export default function Disclaimer({showDisclaimer, setShowDisclaimer}) {

    function handleClick2(){
      setShowDisclaimer(false);
      setTimeout( () => document.getElementById('disclaimer').style.display= 'none', 250);
    }

    return (
      <div className={(showDisclaimer)? 'disclaimerOn vCenter' : 'disclaimerOff vCenter'}
      id='disclaimer'>
          <div className='discText vCenter'>
              <span className='discTitle'><AiFillAlert className='discIcon'/> Disclaimer<img src={toricLogo} alt='toric-logo' id='toricLogo'></img></span>
              <br></br>
              <p>
                  Toricaligner.com is a free online tool that intends to help the 
                  clinician to determine the correct axis for toric IOL placement.
                  <br></br>
                  The results are based on pre and post op corneal and refractive 
                  measurements made by the surgeon or clinician and are not more than a suggestion. 
                  <br></br>
                  The accuracy of the analysis depends on reliable corneal measurements, 
                  refractive measurements and surgical technique.
                  <br></br>
                  The results and final outcomes of the patient are solely responsability 
                  of the surgeon and surgical planning.
                  We do not store any patient data.
                  <br></br>
                  This site uses google reCAPTCHA.
                  <br></br>
              </p>
              <br></br>
              <span className='italic'>
                  By using toricaligner.com the user agrees to waive all claims against and 
                  hold the authors (Dr Giacomo Savini and Dr Buonsanti Dante) harmless from any 
                  claims arising out of his/her use of the tool.
              </span>
          </div>
          <br></br>
          <span className='discButton styledBox' onClick={() => handleClick2()}>Accept</span>
      </div>
    )
}
