<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-iconic-font/2.2.0/css/material-design-iconic-font.min.css" integrity="sha256-3sPp8BkKUE7QyPSl6VfBByBroQbKxKG7tsusY2mhbVY=" crossorigin="anonymous" />
@extends ('layouts.app')
@section('content')
<style>
.career-form {
  background-color: #4e63d7;
  border-radius: 5px;
  padding: 0 16px;
}

.career-form .form-control {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  padding: 12px 15px;
  color: #fff;
}

.career-form .form-control::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #fff;
}

.career-form .form-control::-moz-placeholder {
  /* Firefox 19+ */
  color: #fff;
}

.career-form .form-control:-ms-input-placeholder {
  /* IE 10+ */
  color: #fff;
}

.career-form .form-control:-moz-placeholder {
  /* Firefox 18- */
  color: #fff;
}

.career-form .custom-select {
  background-color: rgba(255, 255, 255, 0.2);
  border: 0;
  padding: 12px 15px;
  color: #000;
  width: 100%;
  border-radius: 5px;
  text-align: left;
  height: auto;
  background-image: none;
}

.career-form .custom-select:focus {
  -webkit-box-shadow: none;
          box-shadow: none;
}

.career-form .select-container {
  position: relative;
}

.career-form .select-container:before {
  position: absolute;
  right: 15px;
  top: calc(50% - 14px);
  font-size: 18px;
  color: #ffffff;
  
  font-family: "Material-Design-Iconic-Font";
}

.filter-result .job-box {
  -webkit-box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
          box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  border-radius: 10px;
  padding: 10px 35px;
}

ul {
  list-style: none; 
}

.list-disk li {
  list-style: none;
  margin-bottom: 12px;
}

.list-disk li:last-child {
  margin-bottom: 0;
}

.job-box .img-holder {
  height: 65px;
  width: 65px;
  background-color: #4e63d7;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(78, 99, 215, 0.9)), to(#5a85dd));
  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);
  font-family: "Open Sans", sans-serif;
  color: #fff;
  font-size: 22px;
  font-weight: 700;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  border-radius: 65px;
}

.career-title {
  background-color: #4e63d7;
  color: #fff;
  padding: 15px;
  text-align: center;
  border-radius: 10px 10px 0 0;
  background-image: -webkit-gradient(linear, left top, right top, from(rgba(78, 99, 215, 0.9)), to(#5a85dd));
  background-image: linear-gradient(to right, rgba(78, 99, 215, 0.9) 0%, #5a85dd 100%);
}

.job-overview {
  -webkit-box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
          box-shadow: 0 0 35px 0 rgba(130, 130, 130, 0.2);
  border-radius: 10px;
}

@media (min-width: 992px) {
  .job-overview {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
  }
}

.job-overview .job-detail ul {
  margin-bottom: 28px;
}

.job-overview .job-detail ul li {
  opacity: 0.75;
  font-weight: 600;
  margin-bottom: 15px;
}

.job-overview .job-detail ul li i {
  font-size: 20px;
  position: relative;
  top: 1px;
}

.job-overview .overview-bottom,
.job-overview .overview-top {
  padding: 35px;
}

.job-content ul li {
  font-weight: 600;
  opacity: 0.75;
  border-bottom: 1px solid #ccc;
  padding: 10px 5px;
}

@media (min-width: 768px) {
  .job-content ul li {
    border-bottom: 0;
    padding: 0;
  }
}

.job-content ul li i {
  font-size: 20px;
  position: relative;
  top: 1px;
}
.mb-30 {
    margin-bottom: 30px;
}

.bgsvg{
    background-image: url("data:image/svg+xml,%3Csvg id='10015.io' viewBox='0 0 1200 630' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='svg-pattern' x='0' y='0' width='48' height='48' patternUnits='userSpaceOnUse' patternTransform='translate(25, 25) rotate(0) skewX(0)'%3E%3Csvg width='23' height='23' viewBox='0 0 100 100'%3E%3Cg fill='rgba(0, 98, 237, 0.56)' opacity='1'%3E%3Cpath d='M95.2171 74.9997V25.0003L50.1086 0L5 25.0003V74.9997L50.1086 100L95.2171 74.9997Z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E%3C/pattern%3E%3C/defs%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='%23ffffff'%3E%3C/rect%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='url(%23svg-pattern)'%3E%3C/rect%3E%3C/svg%3E");
}
</style>
<div class="container">
            <header class="py-5 bg-light border-bottom mb-4 fo bgsvg" style="margin-top: 123px;">
            <div class="container">
                <div class="text-center my-5">
               <h2 class="fw-bolder" style=" font-family: 'Merienda', cursive; text-shadow: 4px 4px 50px rgb(247 244 244);"><span style="font-size: 50px;
    color: darkgreen;
">CAREER</span> &nbsp OPURTUNITIES</h2>
                   
                </div>
            </div>
        </header>

            <div class="row">
                <div class="col-lg-10 mx-auto">
                    <div class="career-search mb-60">

                        <form action="#" class="career-form mb-60">
                            <div class="row">
                                <div class="col-md-6 col-lg-3 my-3">
                                    <div class="input-group position-relative">
                                        <input type="text" class="form-control" placeholder="Enter Your Keywords" id="keywords">
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-3">
                                    <div class="select-container">
                                        <select class="custom-select">
                                            <option selected="">Location</option>
                                            <option value="1">Jaipur</option>
                                            <option value="2">Pune</option>
                                            <option value="3">Bangalore</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-3">
                                    <div class="select-container">
                                        <select class="custom-select">
                                            <option selected="">Select Job Type</option>
                                            <option value="1">Ui designer</option>
                                            <option value="2">JS developer</option>
                                            <option value="3">Web developer</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-3 my-3">
                                    <button type="button" class="btn btn-lg btn-block btn-light btn-custom" id="contact-submit">
                                        Search
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div class="filter-result">
                            <p class="mb-30 ff-montserrat">Total Job Openings : 89</p>

                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        FD
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">Front End Developer</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans" style="margin-left: 36px;">
                                            <li class="mr-md-4">
                                                 &nbsp<i class="zmdi zmdi-pin mr-2"></i> Los Angeles
                                            </li>
                                            <li class="mr-md-4">
                                                  &nbsp&nbsp<i class="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li>
                                            <li class="mr-md-4">
                                                &nbsp <i class="zmdi zmdi-time mr-2"></i>  Full Time
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                    <a href="#" class="btn d-block w-100 d-sm-inline-block btn-light">Apply now</a>
                                </div>
                            </div>

                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        UX
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">Ui/Ux Developer</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans" style="margin-left: 36px;">
                                            <li class="mr-md-4">
                                               &nbsp <i class="zmdi zmdi-pin mr-2"></i> Los Angeles
                                            </li>
                                            <li class="mr-md-4">
                                                &nbsp&nbsp<i class="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li>
                                            <li class="mr-md-4">
                                                &nbsp<i class="zmdi zmdi-time mr-2"></i> Full Time
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                    <a href="#" class="btn d-block w-100 d-sm-inline-block btn-light">Apply now</a>
                                </div>
                            </div>

                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        GD
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">Graphic Designer</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans" style="margin-left: 36px;">
                                            <li class="mr-md-4">
                                            &nbsp    <i class="zmdi zmdi-pin mr-2"></i> Los Angeles
                                            </li>
                                            <li class="mr-md-4">
                                             &nbsp&nbsp   <i class="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li>
                                            <li class="mr-md-4">
                                              &nbsp  <i class="zmdi zmdi-time mr-2"></i> Full Time
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                    <a href="#" class="btn d-block w-100 d-sm-inline-block btn-light">Apply now</a>
                                </div>
                            </div>

                            <div class="job-box d-md-flex align-items-center justify-content-between mb-30">
                                <div class="job-left my-4 d-md-flex align-items-center flex-wrap">
                                    <div class="img-holder mr-md-4 mb-md-0 mb-4 mx-auto mx-md-0 d-md-none d-lg-flex">
                                        JS
                                    </div>
                                    <div class="job-content">
                                        <h5 class="text-center text-md-left">Javascript Developer</h5>
                                        <ul class="d-md-flex flex-wrap text-capitalize ff-open-sans" style="margin-left: 36px;">
                                            <li class="mr-md-4">
                                              &nbsp  <i class="zmdi zmdi-pin mr-2"></i> Los Angeles
                                            </li>
                                            <li class="mr-md-4">
                                               &nbsp&nbsp <i class="zmdi zmdi-money mr-2"></i> 2500-3500/pm
                                            </li>
                                            <li class="mr-md-4">
                                               &nbsp <i class="zmdi zmdi-time mr-2"></i> Full Time
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="job-right my-4 flex-shrink-0">
                                    <a href="#" class="btn d-block w-100 d-sm-inline-block btn-light">Apply now</a>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- START Pagination -->
                    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
        <span class="sr-only">Previous</span>
      </a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
        <span class="sr-only">Next</span>
      </a>
    </li>
  </ul>
</nav>
                    <!-- END Pagination -->
                </div>
            </div>

        </div>
        @stop