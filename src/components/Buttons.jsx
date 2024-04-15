import React from 'react'

function Button({className, children}){
    return(
        <button className={className}>{children}</button>
    )
}

export default function Buttons(){
    return(
        <div className='page-element page-buttons'>
            <h1>Buttons</h1>
            <h2>Select your buttons depending on your style</h2>
            <p>Play with a huge variety of colors and shadows</p>
            <div className='container-buttons'>
                <Button className={'btn button-1'}>Simple</Button>
                <Button className={'btn button-2'}>Amazing</Button>
                <Button className={'btn button-3'}>Attractive</Button>
                <Button className={'btn button-4'}>Easy</Button>
            </div>
            <p>Create unique gradients</p>
            <div className='container-buttons'>
                <Button className={'btn button-5'}>Click me</Button>
                <Button className={'btn button-6'}>Click me</Button>
                <Button className={'btn button-7'}>Click me</Button>
                <Button className={'btn button-8'}>Click me</Button>
            </div>
            <p>Animate your website</p>
            <div className='container-buttons'>
                <Button className={'btn button-9'}>Hover me</Button>
                <Button className={'btn button-10'}>Hover me</Button>
                <Button className={'btn button-11'}>Hover me</Button>
                <Button className={'btn button-12'}>Hover me</Button>
            </div>
        </div>
    )
}

export {Button}