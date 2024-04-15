import React from "react";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";


function StarRating(){
    const [starPosition, setStarPosition] = React.useState(-1)

    function handleClick(index){
        setStarPosition(index)
    }
    
    const starFilled = {color: 'rgb(253, 253, 128)'}

    const arrayOfStars = new Array(5).fill(0).map((item ,index) => {
        return (<button
                    className="button-star"
                    onClick={()=>handleClick(index)}
                >
                    {starPosition >= 0 ?  
                        index <= starPosition ? <FaStar className="star" style={starFilled}/> : <FaRegStar className="star"/>
                        : <FaRegStar className="star"/> }
                </button>)
    })

    return(
        <div>
            {arrayOfStars}
        </div>
    )
}

export default function Ratings(){
    return (
        <div className='page-element'>
            <h1>Ratings</h1>
            <h3>Effortlessly express your satisfaction and preferences with a simple click or tap. 
                Let your voice be heard as we strive for excellence together. </h3>
            <StarRating/>
        </div>
    )
}