/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
// import './Upcoming.css';
import '../Blogger.css';
import { Container, Row, Col } from 'react-bootstrap';

import { Link} from 'react-router-dom';
import blogger1 from './imagegallery/Piyush-1.jpg'
import group1 from './images/group1 (1).jpeg'
import group2 from './images/group1 (2).jpeg'
import group3 from './images/group1 (3).jpeg'
import group4 from './images/group1 (4).jpeg'
import group5 from './images/Goa (1).jpeg'
import group7 from './images/group7.jpeg'



import blogger2 from './imagegallery/Sumedha-1.jpg'
import blogger3 from './imagegallery/Simran-2.jpg'
import blogger4 from './imagegallery/anmol.jpg'
import blogger5 from './imagegallery/img8.jpg'
import blogger6 from './imagegallery/ishani.jpg'
import blogger7 from './imagegallery/Huma.jpg'
import blogger8 from './imagegallery/vishnu.jpg'
import fashion from './imagegallery/AT-Fashion-Logo.png.webp';

import Upcoming from './Upcoming';
// import bloger from '../components/imagegallery/blogger.png';
import vedio1 from './images/videos/Blogger.mp4'


const Blogger = () => {

  


  return (
    
    <div className='bg-white text-warning'>
      <div className='blog-heading1'><h1>Bloogers' Mela</h1></div>
      <div className='container-fluid blogger-1'>
        <video controls autoPlay muted>
          <source src={vedio1}></source>
        </video>
      {/* <video preload="auto" class="videot" id="videot" height="100%" preload />
    <source src="BESTANDEN/video/tible.mp4" type="video/mp4"/>
    <object data="BESTANDEN/video/tible.mp4" height="1080">
        <param name="wmode" value="transparent"/>
        <param name="autoplay" value="false"/>
        <param name="loop" value="false"/>
    </object> */}

      </div>
    <div>
      {/* <h1 className="text-center  text-warning " style={{ margin: '20px' }}>Blogger's Mela</h1>
      <h3 className="text-center  text-warning" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3> */}




      <div className='blogger-4 container-fluid mt-5'>
      <Container className='py-5' >
      <h1 className="text-center  text-white fs-1" style={{ margin: '20px',fontWeight:"600"  }}>Blogger's Mela</h1>
      <h3 className="text-center  text-white" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3>

        
      <Row>
        <Col md={6}>
          <Row>
          <Col md={6} className="gallery-col">
              <img src={blogger1} alt="Image 1" />
              <div className="image-overlay ">
                  <span className="image-title">PIYUSH RATHI</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger2} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">SUMEDHA SHARMA</span>
              </div>
            </Col>
          </Row>
          <Row>
          <Col md={6} className="gallery-col">
            <img src={blogger3} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">PRARTHANA JAGAN</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger4} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">ISHANI MITRA</span>
              </div>
            </Col>
          </Row>
        </Col>
        <Col md={6}>
          <Row>
          <Col md={6} className="gallery-col">
            <img src={blogger5} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">SIMRAN POPTANI</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger6} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">ANMOL WADHWANI</span>
              </div>
            </Col>
          </Row>
          <Row>
          <Col md={6} className="gallery-col">
            <img src={blogger7} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">HUMA JOAD</span>
              </div>
            </Col>
            <Col md={6} className="gallery-col">
            <img src={blogger8} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">VISHNU KAUSHAL</span>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
    </div>


      {/* <div class="bgallery">
        <div class="bgallery-item">
          <img src={blogger1} alt="Image 1" />
          <div class="image-popups">PIYUSH RATHI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger2} alt="Image 2" />
          <div class="image-popups">SUMEDHA SHARMA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger3} alt="Image 3" />
          <div class="image-popups">SIMRAN POPTANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger4} alt="Image 4" />
          <div class="image-popups">ANMOL WADHWANI</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger5} alt="Image 5" />
          <div class="image-popups">PRARTHANA JAGAN</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger6} alt="Image 6" />
          <div class="image-popups">ISHANI MITRA</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger7} alt="Image 7" />
          <div class="image-popups">HUMA JOAD</div>
        </div>
        <div class="bgallery-item">
          <img src={blogger8} alt="Image 8" />
          <div class="image-popups">VISHNU KAUSHAL</div>
        </div>
      </div> */}
      {/* Gallery  */}
      
   {/* // */}
   {/* <div>
   <Upcoming />
   </div> */}
   {/* //    */}
      

{/* <div> */}
  
      {/* <h2 className=" text-warning text-center" style={{ margin: '50px' }}>What Falls Us Apart</h2>
      <p className=" text-warning text-center" style={{ margin: '50px' }}>Bloggers Mela has become a highly anticipated and sought-after event for bloggers in
        India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.
        Bloggers Mela truly encapsulates the spirit of community, creativity, and collaboration
        within the blogging industry.</p>


      <h3 className="  text-warning text-center" style={{ margin: '50px' }}>Perks of Registering for Bloggers Mela:</h3>
      <ul className="circle text-warning text-center" style={{ margin: '50px', position: 'relative', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
        <h6 className=' text-warning'>● Be a member of AtBuzz bloggers community</h6>
        <h6 className=' text-warning'>● Networking with other bloggers</h6>
        <h6 className=' text-warning'>● Direct contacts with Brands</h6>
        <h6 className=' text-warning'>● Be a part of a fun-filled event</h6>

      </ul> */}
      {/* </div> */}
      <div className='bloggger-2 mt-5'>
        <div className='blogger-3 container-fluid my-3'>
          <h1 className='mb-3'>Lets Talk About it?</h1>
          <p>India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.</p>
        </div>
        <div className='blogger-3  container-fluid my-3'>
          <h1  className='mb-3'>How it is impacting the bloggers' community?</h1>
          <p>  India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.</p>
        </div>
        <div className='blogger-3  container-fluid my-3'>
          <h1  className='mb-3'>How it is impacting the bloggers' Brands?</h1>
          <p>  India, having successfully conducted meet and greet sessions in seven cities. It serves
        as a vibrant hub where bloggers can network, share their personal stories, and gain
        insights and inspiration from the experiences of established bloggers. Through this
        platform, bloggers can form meaningful connections, collaborate on projects, and
        discover new avenues for growth and success in the dynamic world of blogging.</p>
        </div>
        <div></div>
        <div></div>
        <div className='blogger-4 container-fluid mt-5'>
      <h1 className="text-center  text-white fs-1" style={{ margin: '20px', fontWeight:"600" }}>Blogger's Mela Moments</h1>

      <div className='py-5 container-fluid' style={{width:'80%', margin:'auto'}}>
       

        
      <Row>
        
          <Row>
      {/* <h3 className="text-center  text-white" style={{ margin: '20px' }}>Bloggers who have worked with us!</h3> */}

          <Col md={4} className=" mb-3 gallery-col ">
              <img src={group1} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
              <div >
                  <span className="image-title">Delhi Event</span>
              </div>
            </Col>
            <Col md={4} className="mb-3 gallery-col">
            <img src={group2} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div>
                  <span className="image-title">Delhi Event</span>
              </div>
            </Col>
          </Row>
          <Row>
          <Col md={4} className="mb-3 gallery-col">
            <img src={group3} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div >
                  <span className="image-title">Kolkata Event</span>
              </div>
            </Col>
            <Col md={4} className="gallery-col">
            <img src={group4} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div >
                  <span className="image-title">Kolkata Event</span>
              </div>
            </Col>
          </Row>
        
        
          <Row>
            
         <Col md={4} className="gallery-col">
            <img src={group5} alt="Image 1"style={{borderRadius:'20px' , border:'5px solid #fff'}} className='m5' />
            <div >
                  <span className="image-title">Goa Event</span>
              </div>
            </Col>
            <Col md={4} className="gallery-col">
            <img src={group7} alt="Image 1" style={{borderRadius:'20px' , border:'5px solid #fff'}} />
            <div >
                  <span className="image-title">Kolkata Event</span>
              </div>
            </Col>
            {/* <Col md={6} className="gallery-col">
            <img src={blogger6} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">ANMOL WADHWANI</span>
              </div>
            </Col> */}
          </Row>
        
          {/* <Col md={6} className="gallery-col">
            <img src={blogger7} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">HUMA JOAD</span>
              </div>
            </Col> */}
            {/* <Col md={6} className="gallery-col">
            <img src={blogger8} alt="Image 1" />
            <div className="image-overlay">
                  <span className="image-title">VISHNU KAUSHAL</span>
              </div>
            </Col>  */}
          
       
      </Row>
    </div>
    </div>
    <div
        className="container-fluid p-5 text-center bg-image align-items-center"
        style={{
        //   backgroundImage: `url(${backimg})`,

        //   height: "100vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="mask py-5 align-items-center"
          // style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white join-community">
              <hr  />
              <h1 className="mb-3 animate">Upcoming Bloggers Mela</h1>
              <h4 className="mb-3">What sets us Apart</h4>

             <Link to="/bloggersMelaDelhi" className="btn btn-outline-dark btn-lg mb-2" role="button">
             
                Join our community{" "}
              
              </Link>
             <hr/>
            </div>
          </div>
        </div>
      </div>

        
      </div>



        {/* footer starts  */}
        <footer className="  text-warning" style={{backgroundColor:'#333'}}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <p><i className="fa fa-envelope"></i> Email: communications@atraski.com</p>
              {/* <p><i className="fa fa-envelope"></i>Email: priti.jhawar@atraski.com</p>             */}
                <p><i className="fa fa-phone"></i> Contact No: 9163720198 / 7596009785</p>
              {/* <p><i className="fa fa-phone"></i> Contact No: 7596009785</p> */}
            </div>
            <div className="col-md-6 text-md-right  text-warning">
              <p>Atraski India
                O-8, Block B, Chittaranjan Park, New Delhi, Delhi- 110019</p>
              <p>Atraski India (Kolkata Office)
                38 Kamalapur (West)
                Dum Dum Cant, Kolkata - 700028</p>
              <Link className="footer-link" to="/privacy">Privacy Policy</Link>
            </div>
          </div>

        </div>
      </footer>

      {/*  footer ends  */}

    </div>
    </div>
  )
}

export default Blogger
