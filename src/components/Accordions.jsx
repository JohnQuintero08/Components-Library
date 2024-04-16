import React from "react";
import data from '../data'
import { IoIosArrowDown } from "react-icons/io";
import '../index.css'
import '../styling/accordions.css'
/* THE DATA THAT WILL BE PASSED TO THE ACCORDION  MUST HAVE THIS STRUCTURE
    accordionsData: [
        {
            id: "",
            isOpen: false,
            header: "",
            answer: ""
        },*/

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

function ArrayOfAccordionText({object, handleChange}){
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
                >{item.header}
                </AccordionHeader> 
                <AccordionInformation
                    isOpen={item.isOpen}
                >{item.answer}
                </AccordionInformation>
            </div>
        )
    })
    return allAcordions
}
/* TWO OR MORE ELEMENTS OF THE ACCORDION CAN REMAIN OPENED AT THE SAME TIME*/
function AccordionMultipleSelection({data}){
    const [elements, setElements] = React.useState(data)
    
    function handleChangeMultiple(id){
        setElements( prevItem => {
            return (
                prevItem.map(item => item.id === id ? {...item, isOpen: !item.isOpen}: item)
            )
        })
    }
    
    return (
        <ArrayOfAccordionText object={elements} handleChange={handleChangeMultiple}/>
    )
}
/* ONLY ONE ELEMENT OF THE ACCORDION CAN REMAIN OPENED, THE REST WILL BE CLOSED AUTOMATICALLY */
function AccordionSingleSelection({data}){
    const [elements, setElements] = React.useState(data)
    
    function handleChangeSingle(id){
        setElements( prevItem => {
            return (
                prevItem.map(item => item.id === id ? {...item, isOpen: !item.isOpen}: {...item, isOpen: false})
            )
        })
    }
    
    return (
        <ArrayOfAccordionText object={elements} handleChange={handleChangeSingle}/>
    )
}

export default function Accordions(){
    
    return (
        <div className="page-element page-accordions">
            <h1>Accordions</h1>
            <p>An accordion is a user interface element that organizes content into collapsible sections, 
                allowing users to expand or collapse sections to view or hide additional information.</p>
            <div className="sections-accordions">
                <section className="section-multiple">
                    <h3>Multiple selection</h3>
                    <h4>Why Using Accordions</h4>
                    <AccordionMultipleSelection data={data.accordionsData}/>
                </section>
                <section className="section-single">
                    <h3>Single selection</h3>
                    <h4>FAQs</h4>
                    <AccordionSingleSelection data={data.faqs}/>
                </section>
            </div>
        </div>
    )
}
