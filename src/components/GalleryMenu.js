import * as React from "react"
// import { Layout } from "../components/layout"
// import GoBack from "./goBack"
import { Link } from "gatsby"
// import { AnchorLink } from "gatsby-plugin-anchor-links"
// import { StaticImage } from "gatsby-plugin-image"
// import { Seo } from "./seo"
// import CasePanels from "./casepanels"
// import { SRLWrapper } from "simple-react-lightbox"
import HideShow from "./galleryMenuArchive"
import styled from "styled-components"
const CustomBox = styled.div`







`
export default function testPage() {
   return (
    <CustomBox>


      
<div className="sliderholder1" style={{height:'65px', overflow:'hidden', width:'', margin:'0 auto 0 auto', padding:'0', objectFit:'contain', borderBottom:'1px solid #333', borderRadius:'0', position:'relative', top:'0', background:'#080808', borderTop:'0px'}}>

  

<div className="horizontal-scroll-wrapper spares menurapper" style={{margin:'20px'}}>



<div style={{width:'100px', height:'100px', display:'inline-block', border:'0px solid blue', padding:'0 0 0 0', marginTop:'0'}}></div>

<div name="limitededitions" style={{border:'0px solid dotted', borderRadius:'0 12px 0 0', background:'', paddingTop:'12px', paddingBottom:'10px',
//  paddingLeft:'-40px', 
 marginLeft:'-60px', textShadow:'0px 0px 16px #fff', color:'#fff'}}>
  Themed Galleries:
</div>



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


<HideShow />


<ul className="galmenu fullarchive masonry" style={{borderTop:'2px dotted #222', padding:'2%', display:'none'}}>
      {/* <li style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 1rem', borderRight:'1px dotted #666', margin:'0 1rem 1rem 0',}}>Bonus Galleries</li> */}

      <li className="mobilehide" style={{width:'120px', textAlign:'', fontSize:'80%', padding:'0 0 0 0', borderRight:'0px dotted #666', margin:'0 20px 5px 15px', fontWeight:'bold', textShadow:'0px 0px 16px #fff', color:'#fff'}}>Full Archives:</li>



      <li className="galmenu-item"><Link to="/photos/gallery1/" className=""  title="Gallery 1" >I</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery2/" className=""   title="Gallery 2">II</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery3/" className=""   title="Gallery 3">III</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery4/" className=""   title="Gallery 4">IV</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery5/" className=""   title="Gallery 5">V</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery6/" className=""   title="Gallery 6">VI</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery7/" className=""   title="Gallery 7">VII</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery8/" className=""   title="Gallery 8">VIII</Link></li>
      <li className="galmenu-item"><Link to="/photos/gallery9/" className=""   title="Gallery 9">IV</Link></li>
      </ul>








    </CustomBox>
  )
}
