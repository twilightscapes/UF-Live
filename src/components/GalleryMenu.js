import React from 'react'
// import { navigate } from 'gatsby-link'
// import { FiShare } from 'react-icons/fi';
import { FaRegPlusSquare } from 'react-icons/fa';
import { IoShareOutline } from 'react-icons/io5';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Link } from "gatsby"
// import ScrollAnimation from 'react-animate-on-scroll'
// import CookieConsent from "react-cookie-consent"
// import styled from "styled-components";
// import { StaticImage } from "gatsby-plugin-image"

export default class Installer extends React.Component {

  state = {
     isActive:false
  }

  handleShow = ()=>{
      this.setState({
          isActive: true
      })
  }

  handleHide = () =>{
      this.setState({
          isActive: false
      })
  }

   render(){
       return(
           <div className="no-app">
       
       <div className="sliderholder1" style={{height:'65px', overflow:'hidden', width:'', margin:'0 auto 0 auto', padding:'0', objectFit:'contain', borderBottom:'1px solid #333', borderRadius:'0', position:'relative', top:'0', background:'#080808', borderTop:'0px'}}>

  

<div className="horizontal-scroll-wrapper spares menurapper" style={{margin:'20px'}}>



<div style={{width:'100px', height:'100px', display:'inline-block', border:'0px solid blue', padding:'0 0 0 0', marginTop:'0'}}></div>

<div name="limitededitions" style={{border:'0px solid dotted', borderRadius:'0 12px 0 0', background:'', paddingTop:'12px', paddingBottom:'10px',
//  paddingLeft:'-40px', 
 marginLeft:'-60px', textShadow:'0px 0px 16px #fff', color:'#fff'}}>
  Themed Galleries:
</div>

<div><Link className="button" to="/photos/dive-bars">
  Dive Bars (new!)
</Link></div>


  <div><Link className="button" to="/photos/still-life">
  Still Life
</Link></div>

<div><Link className="button" to="/photos/door-ways">
  Door Ways
</Link></div>

<div><Link className="button" to="/photos/modern-industrial">
  Modern Industrial
</Link></div>


<div>
  <Link className="button" to="/photos/icons-of-rust">
  Icons of Rust
</Link>
</div>

<div><Link className="button" to="/photos/spooky"
>
  Spooky
</Link></div>



{/* <div><a className="button disabled" >
  Churches
</a></div> */}



</div>
<div className="RArrow" style={{textAlign:'center', position:'absolute', left:'20px', bottom:'20px', width:'', zIndex:'-1'}}> <span></span> </div>


</div>

       <ul className="galmenu fullarchive masonry" style={{borderTop:'0 dotted #222', padding:'10px 0'}}>

           {/* <div className="button" onClick={this.handleShow} style={{borderBottom:'1px solid', textAlign:'left', margin:'10px 0', position:'relative', left:'0', width:''}}>Enter Vault</div> */}

       <li className="galmenu-item33" onClick={this.handleShow} style={{borderBottom:'1px solid', textAlign:'left', position:'relative', top:'0', cursor:'pointer', color:'#fff'}}>Full Archives:</li>


{this.state.isActive ? 
<>

{/* <div className="galmenu-item33" onClick={this.handleShow} style={{borderBottom:'px solid', textAlign:'left', position:'relative', left:'0'}}>Full Archives:</div> */}


      
{/* <li aria-label="Close this popup" onClick={this.handleHide} style={{position:'absolute', right:'-5px', top:'-5px', fontSize:'24px'}}><AiOutlineCloseCircle /></li> */}


      <li className="galmenu-item"><Link to="/photos/gallery1/" className=""  title="Gallery 1" >I</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery2/" className=""   title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery3/" className=""   title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery4/" className=""   title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery5/" className=""   title="Gallery 5">V</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery6/" className=""   title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery7/" className=""   title="Gallery 7">VII</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery8/" className=""   title="Gallery 8">VIII</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery9/" className=""   title="Gallery 9">IV</Link></li>



</>
  : null }
      </ul>       
           </div>
)
}
}