import React from 'react';
import {NavLink} from "react-router-dom";
import card1 from "../Images/res.jpg";
import card2 from "../Images/com.jpg";

const Cards=()=>{
    return(
        <>
        
        <h1 className='text-center text-danger text-capitalize my-5'> Services</h1>
        
        <div className='hr2'></div>
        <div className='row'>
            <div className='col'>
        <div class="card" >
  <img src={card1} class="card-img-top" height="250px"  alt="..."/>
  <div class="card-body">
    <h5 class="card-title">RESIDENTIAL INTERIORS</h5>
    <p class="card-text">Home is where we go after the whole day work.We want to release all stress.We will design your home like yor compatibility and desire. </p>
    </div>
  </div>
</div>      
 
     <div className='col'>
<div class="card1" >
  <img src={card2} class="card-img-top"height='250px' alt="..."/>
  <div class="card-body">
    <h5 class="card-title ">COMMERCIAL INTERIORS</h5>
    <p class="card-text">Bloom Decores design commercial appartment like highly professional design.we have a group of expert designers.</p>
    
  </div>
</div>   
</div></div>
        </>
    )
}
export default Cards;
