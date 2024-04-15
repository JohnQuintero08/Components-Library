import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { IoInformation, IoWarning } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoInformationCircle } from "react-icons/io5";

function Banner({children, mode, header}){
    const [content, setContent] = React.useState(
        {
            image: <AiFillCheckCircle/>,
            header: ''
        }
    )

    const iconStyle= {width: '100%',height: '100%'}
    
    React.useEffect(()=>{
        if(mode === 'congratulations'){
            setContent({
                image: <AiFillCheckCircle style={iconStyle}/>, 
                header: header,
            })
        }else if(mode === 'warning'){
            setContent({
                image: <IoWarning style={iconStyle}/>, 
                header: header,
            })
        }else if(mode === 'problem'){
            setContent({
                image: <IoIosCloseCircleOutline style={iconStyle}/>, 
                header: header,
            })
        }else if(mode === 'information'){
            setContent({image: <IoInformationCircle style={iconStyle}/>,
            header: header,
        })
        }

    }, [])
    
    return(
        <div className={`container-banner ${mode}`}>
            <div className="icon-banner">{content.image}</div>
            <div className="container-banner-text">
                <h3>{content.header}</h3>
                <p>{children}</p>
            </div>
        </div>
    )
}

export default function Banners(){
    return (
    <div className="page-element">
        <h1>Banners</h1>
        <p>These dynamic notifications seamlessly blend style and function, offering a captivating way to relay 
            important messages or updates to our valued visitors. Whether it's highlighting special offers, 
            conveying urgent notices, or sharing exciting news, our alert banners ensure that every message is delivered 
            with impact and clarity.</p>
        <div className="container-banners">
            <Banner 
                mode='congratulations'
                header='Congratulations!'
            >   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam.
            </Banner>
            <Banner 
                mode='warning'
                header='Warning!'
            >   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam.
            </Banner>
            <Banner 
                mode='problem'
                header='There is a problem with your application!'
            >   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam.
            </Banner>
            <Banner 
                mode='information'
                header='Update available!'
            >   Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Aliquid pariatur, ipsum similique veniam.
            </Banner>
        </div>
        
    </div>
    )
}