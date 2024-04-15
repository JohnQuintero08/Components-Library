import React from "react";
import data from '../data'
import { IoIosArrowDown } from "react-icons/io";
import '../index.css'

function AccordionHeader({children, onChange, id, isOpen}){
    return(
        <div 
            className="accordion-header" 
            key={id}
            onClick={()=>onChange(id)}
        >
            <p>{children}</p>
            <IoIosArrowDown 
                className= {`icon-arrow ${isOpen ? ' rotate': ''}`} 
            />
        </div>
    )
}

function AccordionInformation({children, isOpen, id}){
    return(
        <div key={id} className={`accordion-information ${isOpen ? ' active': ''}`}>
            <p>{children}</p>
        </div>
    )
}

function ArrayOfAccordions({object, handleChange}){
    const allAcordions = object.map(item => {
        return (
            <div 
                className="container-accordion" 
                key={item.id}
            >
                <AccordionHeader 
                    id={item.id}
                    onChange={handleChange}
                    isOpen={item.isOpen}
                >{item.header}</AccordionHeader> 
                <AccordionInformation
                    isOpen={item.isOpen}
                >{item.answer}</AccordionInformation>
            </div>
        )
    })
    return allAcordions
}

const Accordions = ()=>{
    const [accordions, setAccordions] = React.useState(data.accordionsData)
    const [faq, setFaq] = React.useState(data.faqs)

    function handleChangeAccordion(id){
        setAccordions( prevItem => {
            return (
                prevItem.map(item => item.id === id ? {...item, isOpen: !item.isOpen}: item)
            )
        })
    }
    function handleChangeFaq(id){
        setFaq( prevItem => {
            return (
                prevItem.map(item => item.id === id ? {...item, isOpen: !item.isOpen}: {...item, isOpen: false})
            )
        })
    }
    
    return (
        <div className="page-element page-accordions">
            <h1>Accordions</h1>
            <p>An accordion is a user interface element that organizes content into collapsible sections, 
                allowing users to expand or collapse sections to view or hide additional information.</p>
            <div className="sections-accordions">
                <section className="section-multiple">
                    <h3>Multiple selection</h3>
                    <h4>Why Using Accordions</h4>
                    <ArrayOfAccordions object={accordions} handleChange={handleChangeAccordion}/>
                </section>
                <section className="section-single">
                    <h3>Single selection</h3>
                    <h4>FAQs</h4>
                    <ArrayOfAccordions object={faq} handleChange={handleChangeFaq}/>
                </section>
            </div>
        </div>
    )
}

export default Accordions