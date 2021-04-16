import React from 'react'
import "./Section4.css"
function Section4() {
    return (
        <div className="section4">
              <div>
                  <h3 style={{marginLeft:"5px",paddingBottom:'18px'}}>Travelere's review</h3>
                 <div className="main_box">
                 <div className="box"><img style={{width:"120px"}} src="https://determined-hypatia-46ceff.netlify.app/static/media/awrd.b7451455.png"></img></div>
                  <div className="box"><img style={{width:"120px"}} src="https://determined-hypatia-46ceff.netlify.app/static/media/awrd.b7451455.png"></img></div>
                 </div>
                 <p style={{color:"grey",fontSize:"18px",marginTop:"20px",marginLeft:"5px"}}>Friendly and informative. So passionate about Athens and a pleasure to have as a<br></br> driver, We had an amazing time!</p>
              

                <div style={{paddingTop:"10px"}}><img style={{width:"80px"}} src="https://determined-hypatia-46ceff.netlify.app/static/media/awrd.b7451455.png"></img></div>
                <p style={{paddingTop:"10px",color:"grey"}}>We had a great time with Manos. He is knowledgeable and entertaining. Ile<br></br>could easily switch languages to explain things to my husband in Italian.</p>
              <hr></hr>

              <div className="price">
                  <div><h3>Price included</h3>
                    <ul style={{color:"grey"}}>
                  <li>Hotel pickup and dropoffWell maintained<br></br>car with an English speaking driver</li>
                  <li>Personal English-Speaking professional</li>
                  <li>Free wifi onboard</li>
<li>Fuel and Tolls</li>
<li>All taxes, fees and handling charge</li>
</ul>
                  </div>
                  <div className="NOT" style={{ filter:"blur('8px')"}}>
                      <h3> Not included</h3>
                      <ul style={{color:"grey"}}>
                  <li>Hotel pickup and dropoffWell maintained<br></br>car with an English speaking driver</li>
                  <li>Personal English-Speaking professional</li>
                  <li>Free wifi onboard</li>
<li>Fuel and Tolls</li>
<li>All taxes, fees and handling charge</li>
</ul>
                  
                  
                  </div>
               </div>
              </div>
              <div></div> 
        </div>
    )
}

export default Section4
