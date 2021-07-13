import React from 'react';

import { NavLink } from 'react-router-dom';
const Footer=()=>{
    return(
        <>
<section id="footer">
		<div className="container-fluid  my-4">
			<div className="row text-center text-xs-center text-sm-center text-md-center">
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5 className='yup'>Useful links</h5>
					<ul className="list-unstyled quick-links" >
						<li><NavLink to="/"><i className="fa fa-angle-double-right"></i>Home</NavLink></li>
						<li><NavLink to="/about"><i className="fa fa-angle-double-right"></i>About</NavLink></li>
						
						<li><NavLink to="/contact"><i className="fa fa-angle-double-right"></i>Contact</NavLink></li>
						
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4">
					<h5>Services</h5>
					<ul className="list-unstyled quick-links">
						<li><NavLink to="/digital"><i className="fa fa-angle-double-right"></i>Residential Interior</NavLink></li>
						<li><NavLink to="/appdevlopment"><i className="fa fa-angle-double-right"></i>Commercial Interior </NavLink></li>
						<li><NavLink to="/webdevlopment"><i className="fa fa-angle-double-right"></i>Projects</NavLink></li>
						
					</ul>
				</div>
				<div className="col-xs-12 col-sm-4 col-md-4 text-black">
					<h5>Address</h5>
					
                     <p className='yo mb-2'><i className="fa fa-angle-double-right ">Address:357/4,2nd Floor,<br/>Akshyanagar,Bangluru</i></p>
                    <p ><i className="fa fa-angle-double-right">Email:Aishanitechnology@gmail.com</i></p>
					<p><i className="fa fa-angle-double-right">Mobile:9304682015</i></p>
        
    </div>
				
			</div>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
					<ul className="list-unstyled list-inline social text-center">
						<li className="list-inline-item"><NavLink to="/"><i className="fa fa-facebook"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="/"><i className="fa fa-twitter"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="/"><i className="fa fa-instagram"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="/"><i className="fa fa-google-plus"></i></NavLink></li>
						<li className="list-inline-item"><NavLink to="/" target="_blank"><i className="fa fa-envelope"></i></NavLink></li>
					</ul>
				</div>
				<hr/>
			</div>	
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-black">
					<p><u><NavLink to="/">National Transaction Corporation</NavLink></u> is a Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]</p>
					<p className="h6">© All right Reversed.<NavLink className="text-green ml-2" to="/" target="_blank">Sunlimetech</NavLink></p>
				</div>
				<hr/>
			</div>	
		</div>
	</section>

        </>
    )
}
export default Footer;