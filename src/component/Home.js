import React, { useState } from 'react';
import Crowsal from './Crowsal';
import "../../node_modules/aos/dist/aos.css";
import Cards from './Cards';


function Home() {

  return (<>
    
    <Crowsal/>
    <h1 className='head  text-center'>WELCOME TO BLOOM DECORS</h1>
        <div className='hr'></div>
        <div className='container-fluid mb-5'>
        <div className='row'>
                <div className='col'data-aos>
                    <p className='pad '>We are a team of highly-skilled and extremely prolific designers and interior space decor professionals. We get our highs from transforming our clients' vision into reality, even better than their imagination. We get our highs from transforming our clients' vision into reality, even better than their imagination.Being the prime mover in this market; we have moved past the notion of considering interiors to be just a decor addition to your home and entered a realm where we now understand how your home can be turned into an abode where you and your family does not just live; but are able to thrive, rejuvenate and eventually get in touch with their blissful self for a much more meaningful life. We are the best interior designers in <strong>Banglore</strong> on golf course extension road who work hard to make your dream house into a reality.</p></div>
                    <div className='col'>
                      <h5 className='query'>ENQUIRY</h5>

                    <form class="row g-10 "id='cola'>
                <div class="col-md-5 ">
                    <label for="inputEmail4" class="form-label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4"/>
                </div>
                <div class="col-md-5">
                    <label for="inputPassword4" class="form-label">Name</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div> 
                
                   <div class="col-md-10">
                    <label for="inputPassword4" class="form-label">Phone</label>
                    <input type="password" class="form-control" id="inputPassword4"/>
                </div>
                <div class="col-md-10 mb-3 ">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
</div>
<div class="col-md-10  ">
    <button class="btn btn-primary w-100" type="submit">Submit form</button>
  </div>
            </form>
                    </div>
                    </div>
                    <div  id="fadeInDown">
                      <h1 className='heada text-danger text-center my-5 '>Why Go Us?</h1>
                      <ul className='lista'><li>Our design obsession and international experience
 we don’t just turn our customers’ dreams to reality.</li> 
 <li>100% control over production and execution
With knowledge of production and execution that supersedes many in the industry and proof of delivery with 1500+ homes.</li>
 <li>We understand you and your needs
Understanding your personality, lifestyle, design preference and specific needs</li>
 
 <li>Materials, finishes, brands – we use only the best
Superior quality materials for the best design output and built with the best brand associations - Hettich, Havells, Saint Gobain, etc with a team ensuring special products at best prices</li></ul>
                   
                    </div>
                    <Cards/>
                    
                    
        </div>
      </>
  );
}

export default Home;
