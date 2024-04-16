import React, { useState } from 'react';
import '../index.css'; 
import '../styling/buttons.css'
import '../styling/cards.css'
import { AiFillFile } from "react-icons/ai";
import {Button} from './Buttons';

function CardV1({icon, title, content}){
  return(
    <div className='container-card v1'>
      <AiFillFile className='icon-v1'/>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  )
}

function CardV2({image, badge, product, company, cost, discount, btn}){
  return(
    <div className='container-card v2'>
      <img src={image}/>
      <div className='card-badge'>{badge}</div>
      <div>
        <h3>{product}</h3>
        <p className='card-company'>{company}</p>
        <p className='card-cost'>{cost}</p>
        <p className='card-discount'>{discount}</p>
        <Button className={'btn button-9 card-btn'}>{btn}</Button>
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
          <CardV1
            title={'Highligh valuable information'}
            content={'Show valueable information together with an Icon.'}
          />
          <CardV2
            image={'https://images.unsplash.com/photo-1516542076529-1ea3854896f2?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
            badge={'Available'}
            product={'Describe your product'}
            company={'Your Company`s name'}
            cost={'$10.000'}
            discount={'$3.000'}
            btn={'ADD TO CART'}
          />
        </div>
    </div>

  )

}

