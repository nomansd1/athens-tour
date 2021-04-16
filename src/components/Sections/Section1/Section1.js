import React,{useState,useEffect} from 'react'
import "./Section1.css"
import $ from 'jquery';



function Section1() {
  // hs
    // const[New,setNew]=useState({matches: window.matchMedia("(max-width: 400px)").matches })
    const [show, handleShow] = useState(false);

  //   useEffect(()=>{
  //   const handler = e =>setNew({matches:e.matches});
  //   window.matchMedia("(max-width: 400px)").addListener(handler);
  // },[])

  const handleScroll = () => {
    const offset= window.scrollY;
    if (offset > 480) {
      handleShow(true);
    } 
    else {
      handleShow(false);
    }
  }

  useEffect(()=>{
      window.addEventListener("scroll",handleScroll);  
  },[])
  let navbarClasses= ['section1_menu'];
  if (show) {
    navbarClasses.push('scrolled')
  }

    return (
      <>
      
      {/* {!New.matches?    */}
      <div className={navbarClasses.join(" ")} >
        <div className="left_section1_menu" >
          <a href="#" className="s1"><span>Stops</span></a>
          <a href="#" className="s2"><span >About</span></a>
          <a href="#" className="s3"><span>Reviews</span></a>
          <a href="#" className="s4"><span>Questions</span></a>
        </div>
        <span className="section1_right">Share</span>
      </div>
        
        {/* : */}
{/*         
        <div className="left_section1_menu" 
        style={{
          paddingTop:"10px",
          borderBottom:"1px solid lightgray",
          paddingBottom:"7px"
          }}>
        <span>Stops</span>
        <span>About</span>
        <span>Reviews</span>
        <span>Questions</span>
    </div> */}
    {/* }  */}
      </>
    )
}

export default Section1
