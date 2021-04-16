import React from 'react'
import "./Footer.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
function Footer() {
    return (
        <div className="footer">
         <div style={{color:"white",flex:.2}}>< AccountCircleIcon  style={{fontSize:"30px"}} /></div>
         <div>
             <p style={{color:"white",fontSize:"16px",marginTop:"10px"}}>Company  &nbsp;&nbsp;Terms of Use  &nbsp;&nbsp;Privacy Policy</p>
         </div>
         <div>  <Button variant="contained" style={{border:"1px solid white",fontSize:"19px",color:"white",backgroundColor:"#4D5A6C",width:"250px",height:"40px"}}>Contact Support</Button></div>
        </div>
    )
}

export default Footer
