import React from 'react'
import "./Section2.css"
import Cards from "./Card"
import Card from '@material-ui/core/Card';
import InputTextField from "./InputTextField"
import InputTextField2 from "./InputTextFiled2"
import Button from '@material-ui/core/Button'
function Section2() {
    return (
        <div  className="section2_main">
           <div className="section2_components" id="section_component_left">
                
                {[0,1,2,3].map((val)=><Cards />)}

               
                                 
           </div>    
             
               
         
           <div className="section2_components"  id="section_component_right">
                
                <Card className="right_card">

                    <h4 style={{color:"gray"}}>Book A Transfer</h4>

                    <InputTextField input_data="From (airport,port,address)" />
                    <InputTextField input_data="To (airport,port,address)" />
                    <InputTextField2 />

                </Card>
               
               
               
               
          </div>
            
        </div>
    )
}

export default Section2
