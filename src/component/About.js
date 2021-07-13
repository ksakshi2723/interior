import React from 'react';
import img from '../Images/about.jpg';
import img2 from '../Images/abo.jpg';
import "../../node_modules/aos/dist/aos.css";
import img3 from '../Images/about2.jpg';


const About=()=>{
    return(
        <>
        <div>

       <div>
       <img src={img} className="w-100" height='480px;'/>
       </div>
       
        <div className='row  my-5'>
           < div className='col w-100'>
           <div className='col'>
        <img src={img2} className='earth' />
        </div>
              </div>
<div className='col'>
<div className='col'>
   <p className='paraa my-4'>We are a team of highly-skilled and extremely prolific designers and interior space decor professionals. We get our highs from transforming our clients' vision into reality, even better than their imagination. We have a close knit team of interior designers and architects who are well-versed and highly skilled in building Residential Interior Spaces as well as Commercial Interior Spaces which works both practically and aesthetically. Our thoughtful and innovative interior design solutions are initiated by partnering closely with our clients. We aim at thoroughly understanding client's personal taste and likes and transforming them into the interior design solutions</p>

</div></div>
</div>

<div className="img-block my-5">
<img src={img3} className="w-100 " height='320px;'/>

<div class="text-block"><h2 className='hd '>OUR MISSION</h2>
<p>“To consolidate and expand contribution of the Interior Design Profession towards improving quality of life in contemporary and future societies by sharing of knowledge and experience and the understanding of responsibilities.”</p>
</div>
</div>
</div>

    </>
    )
}
export default About;