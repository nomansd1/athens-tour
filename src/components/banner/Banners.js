import React,{useEffect,useState} from 'react'
import "./Banner.css"
import Button from '@material-ui/core/Button';

function Banners() {
    useEffect(
        async()=>{
            const api=await fetch("api/backend/v1/order/orderbyadmin/431")
            const r=await api.json()
            console.log(r,"api")




    },[])
    return (
        <div className="banner">
             <div>
                 <p className="banner_text" data-aos="fade-left" style={{fontSize:"20px"}}>UP TO 6 STOPS</p>
                 <h1 className="banner_text" data-aos="fade-left"  >Athens By Night Tour</h1>
<p className="banner_text" style={{fontSize:"20px",fontWeight:"lighter"}}>Fall In Love With Athens On A Personalized Evening Ride <br></br> Of Its Famous Sites And Illuminated Landmarks</p>



             </div>
             <div>
                 <p className="banner_text">From</p>
                 <h1 className="banner_text">$ 130</h1>
                 <p className="banner_text">For 1-4 Persons</p>
                 <br>
                 </br>
                 <div  className="banner_text" style={{border:"1px solid white"}}>
                     we are rated Excelletent on<br></br>Tripadvisor 400+<br></br>reviews
                 </div>
                 <br></br>
                 <div ><Button style={{color:"#5894A1",width:"200px",backgroundColor:"white",padding:"10px"}} variant="contained" >See the route</Button></div>

             </div>
            
        </div>
    )
}

export default Banners
