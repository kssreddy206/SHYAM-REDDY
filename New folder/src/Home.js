import React, { Fragment } from 'react';
import Images from './Images/two.jpg';
import Ro from'./Images/Ro.jpg';
import UV from'./Images/UV.jpg';
import Water from './Images/Water.jpg';


function Home(){
    return(
      <Fragment>
 <div className="card body">
              <img src={Images} id='img'  alt='Background' />
                  </div>
                    <div className='heading-banner'>
                      <h2>Why To Choose Us?</h2>
                      </div>


            <div class="card" >
          <div class="container text-center">
          <div class="row">
          <div class="col">
        <div class="card-body">
    <h5 class="card-title">Genuine</h5> 
    <p class="card-text">We are the best ro service provider & use only genuine spare parts for long lasting</p>
    </div>
  </div>
</div>

<div class="card" >
 <div class="col">
      <div class="card-body">
    <h5 class="card-title">Same Day service</h5>
    <p class="card-text">Just give us call back so that we'll serve you on same day for your urgency</p>
  </div>
  </div>
</div>
 <div class="card" >
 <div class="col">
  <div class="card-body">
    <h5 class="card-title">Qualified Technician</h5>
    <p class="card-text">We have a qualified & certified technician team that ensures best service.</p>
</div>
 </div>
 </div>
 </div>
 </div>
    
               <div>      
                <h1>Our Services</h1>
                </div>
        <div class="container text-center">
        
  <div class="row">
    <div class="col-md-4">
    <div class="card">
  <img src={Ro} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Ro Water Purifier</h5>
    <p class="card-text">Are you trying to seek out RO water purifier repair and repair in Hyderabad?
     Then you’ve 
    landed on the right page of Best RO Water Purifier..</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
    </div>
  
    
    <div class="col-md-4">
    <div class="card">
  <img src={UV} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Uv Water Purifier</h5>
    <p class="card-text">UV technology is just capable of removing microbes from water,
     RO purification technology effectively kills not just micro-level</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
  </div>

    </div>
    
    <div class="col-md-4">
    <div class="card ">
  <img src={Water} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Water Purifier Installation</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Read more</a>
  </div>
</div>
    </div>
    </div>
    </div>
    
  

  <div className='heading'>
  <h1>Know Who We Are </h1>
  <h2>PURE FIRST 24/7 </h2>
  <p>We offer an entire range of water purifier services in Hyderabad,<br/> such as water purifier repair,
     installation/reinstallation & maintenance <br/>service also centralized filter system for home and office.<br/> </p>
<p>
Our RO repairing service & maintenance having an excellent demand <br/>especially in Hyderabad. 
Rather than Ro installation or UV<br/> water purifier service is in a position to save lots of the<br/>
 value for you. We serve for only our won Product.<br/></p>
  <p>You can easily contact us any day of the week on phone or<br/> by filling up the inquiry form.</p>
</div>

</Fragment>
   )
}
export default Home;