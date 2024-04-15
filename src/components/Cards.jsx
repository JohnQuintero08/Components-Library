import React, { useState } from 'react';
import '../index.css'; 
import { AiFillFile } from "react-icons/ai";
import {Button} from './Buttons';

function CardV1(){
  return(
    <div className='container-card v1'>
      <AiFillFile className='icon-v1'/>
      <h3>Highligh valuable information</h3>
      <p>Show valueable information together with an Icon.</p>
    </div>
  )
}

function CardV2(){
  return(
    <div className='container-card v2'>
      <img src='https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
      <div className='card-badge'>Available</div>
      <div>
        <h3>Describe your product</h3>
        <p className='card-company'>Your Company's name</p>
        <p className='card-cost'>$10.000</p>
        <p className='card-discount'>$3.000</p>
        <Button className={'btn button-9 card-btn'}>ADD TO CART</Button>
      </div>
    </div>
  )
}
function CardComments(){

}

export default function Cards(){
  return (
    <div className='page-element page-cards'>
      <h1>Cards</h1>
      <p>Cards are a versatile UI component 
        used to present concise and visually appealing information. </p>
        <div className='container-all-cards'>
          <CardV1></CardV1>
          <CardV2></CardV2>
        </div>
    </div>

  )

}

