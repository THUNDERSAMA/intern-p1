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
                  <h2 class="title-ban"style="color: white; font-weight:bolder;">PIONEER 
{{-- <span>...</span>..... --}}
</h2>
                  <p ><h3 ><em style="font-weight:bolder;
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
              <div class="icon"><img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/freelancer.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item" data-aos="fade-left" data-aos-delay="50" data-aos-duration="800" >
              <h4>Teachers</h4>
              <div class="icon"><img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/teacher.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item"  data-aos="fade-right" data-aos-delay="50" data-aos-duration="800">
              <h4>Search jobs</h4>
              <div class="icon"><img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/job.png" alt=""></div>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="item"  data-aos="fade-left" data-aos-delay="50" data-aos-duration="800">
              <h4>Students</h4>
              <div class="icon"><img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/students.png" alt=""></div>
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
                      <img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/students.png" alt="">
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
                      <img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/freelancer.png" alt="">
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
                      <img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/teacher.png" alt="">
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
   <div id="contact" class="contact-us section">
    <div class="container">
      <div class="row">
        <div class="col-lg-7" data-aos="fade-right" data-aos-delay="50" data-aos-duration="800">
          <div class="section-heading">
            <h2>Feel free to <em>Contact</em> us  <span></span></h2>
            <div id="map">
              <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="360px" frameborder="0" style="border:0" allowfullscreen=""></iframe>
            </div>
            <div class="info">
              <span><i class="fa fa-phone"></i> <a href="#">010-020-0340<br>090-080-0760</a></span>
              <span><i class="fa fa-envelope"></i> <a href="#">info@company.com<br>mail@company.com</a></span>
            </div>
          </div>
        </div>
        <div class="col-lg-5 align-self-center" data-aos="fade-left" data-aos-delay="100" data-aos-duration="800">
          <form id="contact" action="" method="get">
            <div class="row">
              <div class="col-lg-12">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required>
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <input type="text" name="website" id="website" placeholder="Your Website URL" required="">
                </fieldset>
              </div>
              <div class="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" class="main-button">Submit Request</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div class="contact-dec">
      
    </div>
    <div class="contact-left-dec">
     
    </div>
  </div>
  <div class="footer-dec">
    <img src="https://cdn.jsdelivr.net/gh/THUNDERSAMA/intern-p1@fcc47ec99110eb75607a65b3c10569c346d1a67f/public/images/footer-dec.png" alt="">
  </div>
  @stop