import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function TravelCard(props) {
  return (
    <div className='travel'>
        <div className='travelpallete' style={{display:"flex"}}>
        <img  className='travelimage' src={props.travel.Image_link} alt=''/>
        <div className='travelDescption'>
           <FontAwesomeIcon icon=" fa-solid fa-location-dot" />  
            <p><span>{props.travel.location}</span>  <span className='maplink'><a href={props.travel.Map_link}>View Location on Map</a></span></p>
            <h1>{props.travel.Title}</h1>
            <p className='dates'>{props.travel.Start_date}-{props.travel.End_date}</p>
            <p className='description'>{props.travel.Description}</p>
        </div>


        </div>
    </div>
  )
}
// npm i --save @fortawesome/pro-solid-svg-icons
// npm i --save @fortawesome/pro-regular-svg-icons