import React,{useState,useEffect}from 'react'
import Drawer from "../Drawer"
import "./Header.css"
import Header2_mobile from "./Header2_mobile.js"

function Header() {
   const[New,setNew]=useState({matches: window.matchMedia("(max-width: 750px)").matches })
   useEffect(()=>{
    const handler = e =>setNew({matches:e.matches});
    window.matchMedia("(max-width: 750px)").addListener(handler);
   },[])
   console.log(New,"screen")
    return (
      
    <>

     

{!New.matches? 
          <div className="main_header">

     <div className="header_inside">
     <div style={{flex:.4,color:"white"}}><p>Transfer</p></div>
          <div style={{flex:.6,color:"white"}}><p>Sightseeing rides</p></div>
      
      </div>
    
      <div className="header_inside">
      <div style={{flex:.6,color:"white"}}><p>Share</p></div>
       <div style={{flex:.6,color:"white"}}><p>Subhan Akram</p></div>
      </div>

       </div>
      :<Header2_mobile />}
    


    </>
    
   

    )
}

export default Header
