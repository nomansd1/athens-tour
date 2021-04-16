import React from "react"

import Stepper from "./StepperComponent"
import "./Section3.css"

const Section3=()=>{
    
    return(<>
    
    <div className="section3_main">

        <div className="section3_left">

            <h3 style={{color:"grey"}}>About the ride</h3>
            <div>
                <Stepper />
            </div> 
        </div>
        <div className="section3_right"></div>




    </div>
    
    
    
    </>)

   
}

export default Section3