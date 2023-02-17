@extends ('layouts.app')
@section('content')

<div class="main-banner"  data-aos="fade-down-right" data-aos-delay="50"
    data-aos-duration="1000" style="background: linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(5,89,33,1) 35%, rgba(19,153,63,1) 96%);">
    <nav class="social-nav">
      <ul>
        <li class="snav"><a href="https://www.facebook.com/profile.php?id=100013741391986&mibextid=ZbWKwL"><i class="bi bi-facebook"></i></a></li>
        <li class="snav"><a href="https://instagram.com/pioneerldh?igshid=ZDdkNTZiNTM="><i class="bi bi-twitter"></i></a></li>
        {{-- <li class="snav"><a href="#"><i class="bi bi-instagram"></i></a></li> --}}
        <li class="snav"><a href="https://www.linkedin.com/in/pioneer-academy-595885264"><i class="bi bi-linkedin"></i></a></li>
        
      </ul>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="owl-carousel owl-banner">
                <div class="item header-text">
                  {{-- <h6>Tag line</h6> --}}
                  <h2 style="color: white; font-weight:bolder;">PIONEER 
{{-- <span>...</span>..... --}}
</h2>
                  <p ><h3 style="color: white;"><em style="font-weight:bolder;
    font-family: monospace;">Register for</em></h3>
    <h4 style="font-family: cursive;line-height: 1.5;color: white; font-weight:bolder;">
HR Services & Placements,
Freelancing work,<br>
Tuitions-Online/offline Batches,<br>
GATE/IES/JE/SDE,<br>UGC/IAS/PCS,<br>
11th/12th/ IIT- JEE/NEET/CA,</h4>
<h3 style="color: white;"><span><b>UNDER RENOVATION. 
WILL BE BACK LIVE FROM 1 MARCH 2023<b> </span><span>	&#128197;</span></h3></p>
                  <div class="down-buttons">
                    <div class="main-blue-button-hover">
                      <a href="href="{{ url('signup') }}"">Join now</a>
                    </div>
                  
                  </div>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="services" class="our-services section">
    <div class="services-right-dec">
      
    </div>
    <div class="container">
      <div class="services-left-dec">
      
      </div>
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section-heading">
            <h2>Get your career on <span>right path</span></h2>
            <span>tag line...</span>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="owl-carousel owl-services">
            <div class="item" data-aos="fade-right" data-aos-delay="50" data-aos-duration="800"
    >
              <h4>For freelancers</h4>
              <div class="icon"><img src="images/freelancer.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item" data-aos="fade-left" data-aos-delay="50" data-aos-duration="800" >
              <h4>Teachers</h4>
              <div class="icon"><img src="images/teacher.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item"  data-aos="fade-right" data-aos-delay="50" data-aos-duration="800">
              <h4>Search jobs</h4>
              <div class="icon"><img src="images/job.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item"  data-aos="fade-left" data-aos-delay="50" data-aos-duration="800">
              <h4>Students</h4>
              <div class="icon"><img src="images/students.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="about" class="about-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 align-self-center">
          <div class="left-image"  data-aos="fade-right" data-aos-delay="50" data-aos-duration="800">
            <img src="https://www.pngall.com/wp-content/uploads/12/Illustration-PNG-Images.png" alt="Two Girls working together">
          </div>
        </div>
        <div class="col-lg-6">
          <div class="section-heading">
            <h2>our Community</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
            <div class="row">
              <div class="col-lg-4">
                <div class="fact-item">
                  <div class="count-area-content">
                    <div class="icon">
                      <img src="images/students.png" alt="">
                    </div>
                    <div class="count-digit" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">320</div>
                    <div class="count-title">Students</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="fact-item">
                  <div class="count-area-content">
                    <div class="icon">
                      <img src="images/freelancer.png" alt="">
                    </div>
                    <div class="count-digit" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">640</div>
                    <div class="count-title">Freelancers</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="fact-item">
                  <div class="count-area-content">
                    <div class="icon">
                      <img src="images/teacher.png" alt="">
                    </div>
                    <div class="count-digit" data-aos="fade-up" data-aos-delay="50" data-aos-duration="800">120</div>
                    <div class="count-title">Teachers</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  @stop