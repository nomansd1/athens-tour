import React from 'react'
import "./Section6.css"
import Card from "./Card"
import Button from '@material-ui/core/Button';

function Section6() {
    return (
        <div className="section6">
            <div ><h1>Other rides in Athens</h1></div>
            <div className="section6_boxes" style={{display:"flex"}}>
               <div style={{margintop:"6px"}}> <Card  /></div>
               <div style={{margintop:"6px"}}> <Card  /></div>
               <div style={{margintop:"6px"}}> <Card  /></div>
              
         

             </div>
         
            <div style={{marginTop:"50px"}}>  <Button variant="contained" style={{fontSize:"19px",color:"grey",backgroundColor:"#FAFAFA",width:"290px",height:"50px"}}>All Rides</Button></div>
            <div style={{marginTop:"90px"}}><h1 style={{color:"gray"}}>Questions Left?</h1></div>
            <div style={{marginTop:"70px"}}>  <Button variant="contained" style={{fontSize:"19px",color:"grey",backgroundColor:"#FAFAFA",width:"290px",height:"50px"}}>Contact Support</Button></div>
        
        
        
        </div>
    )
}

export default Section6
