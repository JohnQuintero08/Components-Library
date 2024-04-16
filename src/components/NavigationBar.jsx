import React from 'react'
import {NavLink} from 'react-router-dom'
import { FaAngleDoubleDown } from "react-icons/fa";
import { MdOutlineSmartButton } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { GiCarousel } from "react-icons/gi";
import { AiOutlineInsertRowBelow } from "react-icons/ai";
import { AiOutlinePicture } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import '../styling/navigationBar.css'

export default function NavigationBar(){
    const [isRetracted, setIsRetracted] = React.useState(false)
    /* React.useEffect(()=>console.log(window.innerWidth),[isRetracted]) */
    function toggleMenu(){
        setIsRetracted(prevState => !prevState)
    }

    return(
        <nav className='nav-bar'> 
            <div className='container-menu-button'>
                <NavLink 
                    className={({isActive})=> 'link-home ' + (isActive ? ' link-home-transition': null)}
                    to='/'> Home</NavLink>
                <TiThMenu 
                    onClick={toggleMenu} 
                    className='button-menu'
                />
            </div>
            <div className={isRetracted ? 'container-options-closed' : 'container-options'}>
                <NavLink 
                    className={({isActive})=> 'link ' + (isActive ? ' isActiveStyle': null)}
                    to='accordions' ><FaAngleDoubleDown /> Accordions</NavLink>
                <NavLink 
                    className={({isActive})=> 'link '+ (isActive ? ' isActiveStyle': null)}
                    to='banners' ><AiOutlinePicture /> Banners </NavLink>
                <NavLink 
                    className={({isActive})=> 'link '+ (isActive ? ' isActiveStyle': null)}
                    to='buttons' ><MdOutlineSmartButton /> Buttons </NavLink>
                <NavLink 
                    className={({isActive})=> 'link '+ (isActive ? ' isActiveStyle': null)}
                    to='cards' ><FaAddressCard /> Cards </NavLink>
                <NavLink 
                    className={({isActive})=> 'link '+ (isActive ? ' isActiveStyle': null)}
                    to='carousels' ><GiCarousel /> Carousels</NavLink>
                <NavLink 
                    className={({isActive})=> 'link '+ (isActive ? ' isActiveStyle': null)}
                    to='footers' ><AiOutlineInsertRowBelow /> Footers </NavLink>
                <NavLink 
                    className={({isActive})=> 'link '+ (isActive ? ' isActiveStyle': null)}
                    to='ratings' ><FaRegStar /> Ratings </NavLink>
            </div>
        </nav>
    )
}
