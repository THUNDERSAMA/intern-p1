
@extends ('layouts.app')
@section('content')
<style>
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
.input-box{
  position: relative;
}

.input-box i {
  position: absolute;
  right: 13px;
  top:15px;
  color:#ced4da;

}
.fn{
  font-family: 'Merienda', cursive;
}
.col-lg-8 .card{
     
      border: 5px solid rgba(0, 0, 0, 0.125);
    border-radius: 2.25rem;
}
.icon {
    width: 50px;
    height: 50px;
    background-color: #eee;
    border-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 39px
}
.card.user-card {
    border-top: none;
    -webkit-box-shadow: 0 0 1px 2px rgba(0,0,0,0.05), 0 -2px 1px -2px rgba(0,0,0,0.04), 0 0 0 -1px rgba(0,0,0,0.05);
    box-shadow: 0 0 1px 2px rgba(0,0,0,0.05), 0 -2px 1px -2px rgba(0,0,0,0.04), 0 0 0 -1px rgba(0,0,0,0.05);
    -webkit-transition: all 150ms linear;
    transition: all 150ms linear;
}

.card {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    box-shadow: 0 1px 2.94px 0.06px rgba(4,26,55,0.16);
    border: none;
    margin-bottom: 30px;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}

.card .card-header {
    background-color: transparent;
    border-bottom: none;
    padding: 25px;
}

.card .card-header h5 {
    margin-bottom: 0;
    color: #222;
    font-size: 14px;
    font-weight: 600;
    display: inline-block;
    margin-right: 10px;
    line-height: 1.4;
}

.card .card-header+.card-block, .card .card-header+.card-block-big {
    padding-top: 0;
}

.user-card .card-block {
    text-align: center;
}

.card .card-block {
    padding: 25px;
}

.user-card .card-block .user-image {
    position: relative;
    margin: 0 auto;
    display: inline-block;
    padding: 5px;
    width: 110px;
    height: 110px;
}

.user-card .card-block .user-image img {
    z-index: 20;
    position: absolute;
    top: 5px;
    left: 5px;
        width: 100px;
    height: 100px;
}

.img-radius {
    border-radius: 50%;
}

.f-w-600 {
    font-weight: 600;
}

.m-b-10 {
    margin-bottom: 10px;
}

.m-t-25 {
    margin-top: 25px;
}

.m-t-15 {
    margin-top: 15px;
}

.logo{
	border: 1px solid #f6f6f6;
}

.logo img{
	width: 60px;
	height: 60px;
}
.card{
	display: block;
	padding: 3vh 2vh 7vh 5vh;
	border: none;
	border-radius: 15px;
	margin-top: 5%;
	margin-bottom: 5%;
	max-width: 500px;
}
.header{
	margin-bottom: 5vh;
	margin-right: 2vh;
	float: right;
	margin-left: auto;
}

.far{
	color: rgba(15, 198, 239, 0.97)!important;
	font-size: 16px!important;
}
p.heading{
	font-weight: bold;
	font-size: 25px;
}
p.text-muted{
	font-size: 17px;
	font-weight: bold;
	color: #a1a7ae!important;
}
.btn-sm{
	border-radius: 8px;
}
.fas.fa-users{
	color: rgba(15, 198, 239, 0.97)!important;
}
.mutual span{
	font-size: 14px;
	color: #adb5bd;
	font-weight: bold;
}
.btn-primary.btn-lg{
    border-radius: 30px;
    width: 90%;
    border: none;
    background: #8c02e3;
}
.btn-dark.btn-lg{
    border-radius: 30px;
    width: 90%;
    border: none;
    background: #dee2e6;
}
.btn-dark span{
	font-size: 14px;
	text-align: center;
	color: #0000008c;
	font-weight: bold;
}
.btn-primary span{
	font-size: 14px;
	text-align: center;
	color: #fff;
	font-weight: bold;
}

</style>
<header class="py-5 bg-light border-bottom mb-4 fo" style="margin-top: 123px;">
            <div class="container">
                <div class="text-center my-5">
               <h2 class="fw-bolder" style=" font-family: 'Merienda', cursive;"><span style="font-size: 65px;
    color: darkgreen;">G</span>et study material of any subject with ease....</h2>
                   
                </div>
            </div>
        </header>
<div class="container pt-5">
              <div class="row">
                <div class="col-md-8 order-md-2 col-lg-9">
                  <div class="container-fluid">
                    <div class="row   mb-5">
                      <div class="col-12">
                     
                        <div class="btn-group float-md-right ml-3">
                          <button type="button" class="btn btn-lg btn-light"> <span class="fa fa-arrow-left"></span> </button>
                          <button type="button" class="btn btn-lg btn-light"> <span class="fa fa-arrow-right"></span> </button>
                        </div>
                       
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-6 col-md-6">
                        
                        <div class="card mx-auto">
		<div class="row">
			<div class="logo ml-3 mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU"></div>
			<div class="header right"><i class="bi bi-three-dots-vertical"></i></div>
		</div>
			<div class="card-title">
				<p class="heading">Lorem ipsum dolor &nbsp;<i class="bi bi-compass"></i></p>
			</div>
			
			<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing <br>User journey, Ideation and Wireframing, etc...</p>
			<div class="row btnrow my-4">
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-success btn-sm" style="background: #00ff002b;">Full Time</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-primary btn-sm" style="background: #007bff33;">Min. 1 year</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-danger btn-sm" style="background: #dc35452e;">Director</button></div>
			</div>

			<div class="mutual"><i class="bi bi-people"></i>&nbsp;&nbsp;<span>5 Friends work here</span></div>
			<div class="row btnsubmit mt-4">
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-primary btn-lg"><span>Apply Now</span></button>
				</div>
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-dark btn-lg"><span>Message</span></button>
				</div>
			</div>
	</div>
                       </div>
                      
                      <div class="col-lg-6 col-md-6">
                    <div class="card mx-auto">
		<div class="row">
			<div class="logo ml-3 mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU"></div>
			<div class="header right"><i class="bi bi-three-dots-vertical"></i></div>
		</div>
			<div class="card-title">
				<p class="heading">Lorem ipsum dolor &nbsp;<i class="bi bi-compass"></i></p>
			</div>
			
			<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing <br>User journey, Ideation and Wireframing, etc...</p>
			<div class="row btnrow my-4">
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-success btn-sm" style="background: #00ff002b;">Full Time</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-primary btn-sm" style="background: #007bff33;">Min. 1 year</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-danger btn-sm" style="background: #dc35452e;">Director</button></div>
			</div>

			<div class="mutual"><i class="bi bi-people"></i>&nbsp;&nbsp;<span>5 Friends work here</span></div>
			<div class="row btnsubmit mt-4">
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-primary btn-lg"><span>Apply Now</span></button>
				</div>
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-dark btn-lg"><span>Message</span></button>
				</div>
			</div>
	</div>
                      </div>
                      </div>
                         <div class="row">
                      <div class="col-lg-6 col-md-6">
                        
                        <div class="card mx-auto">
		<div class="row">
			<div class="logo ml-3 mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU"></div>
			<div class="header right"><i class="bi bi-three-dots-vertical"></i></div>
		</div>
			<div class="card-title">
				<p class="heading">Lorem ipsum dolor &nbsp;<i class="bi bi-compass"></i></p>
			</div>
			
			<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing <br>User journey, Ideation and Wireframing, etc...</p>
			<div class="row btnrow my-4">
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-success btn-sm" style="background: #00ff002b;">Full Time</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-primary btn-sm" style="background: #007bff33;">Min. 1 year</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-danger btn-sm" style="background: #dc35452e;">Director</button></div>
			</div>

			<div class="mutual"><i class="bi bi-people"></i>&nbsp;&nbsp;<span>5 Friends work here</span></div>
			<div class="row btnsubmit mt-4">
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-primary btn-lg"><span>Apply Now</span></button>
				</div>
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-dark btn-lg"><span>Message</span></button>
				</div>
			</div>
	</div>
                       </div>
                      
                      <div class="col-lg-6 col-md-6">
                    <div class="card mx-auto">
		<div class="row">
			<div class="logo ml-3 mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU"></div>
			<div class="header right"><i class="bi bi-three-dots-vertical"></i></div>
		</div>
			<div class="card-title">
				<p class="heading">Lorem ipsum dolor &nbsp;<i class="bi bi-compass"></i></p>
			</div>
			
			<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing <br>User journey, Ideation and Wireframing, etc...</p>
			<div class="row btnrow my-4">
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-success btn-sm" style="background: #00ff002b;">Full Time</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-primary btn-sm" style="background: #007bff33;">Min. 1 year</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-danger btn-sm" style="background: #dc35452e;">Director</button></div>
			</div>

			<div class="mutual"><i class="bi bi-people"></i>&nbsp;&nbsp;<span>5 Friends work here</span></div>
			<div class="row btnsubmit mt-4">
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-primary btn-lg"><span>Apply Now</span></button>
				</div>
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-dark btn-lg"><span>Message</span></button>
				</div>
			</div>
	</div>
                      </div>
                      </div>
                         <div class="row">
                      <div class="col-lg-6 col-md-6">
                        
                        <div class="card mx-auto">
		<div class="row">
			<div class="logo ml-3 mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU"></div>
			<div class="header right"><i class="bi bi-three-dots-vertical"></i></div>
		</div>
			<div class="card-title">
				<p class="heading">Lorem ipsum dolor &nbsp;<i class="bi bi-compass"></i></p>
			</div>
			
			<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing <br>User journey, Ideation and Wireframing, etc...</p>
			<div class="row btnrow my-4">
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-success btn-sm" style="background: #00ff002b;">Full Time</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-primary btn-sm" style="background: #007bff33;">Min. 1 year</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-danger btn-sm" style="background: #dc35452e;">Director</button></div>
			</div>

			<div class="mutual"><i class="bi bi-people"></i>&nbsp;&nbsp;<span>5 Friends work here</span></div>
			<div class="row btnsubmit mt-4">
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-primary btn-lg"><span>Apply Now</span></button>
				</div>
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-dark btn-lg"><span>Message</span></button>
				</div>
			</div>
	</div>
                       </div>
                      
                      <div class="col-lg-6 col-md-6">
                    <div class="card mx-auto">
		<div class="row">
			<div class="logo ml-3 mb-3"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTxDRpxI5gXgaVmnO-VgcVUNOkca91jIpS75Flbzkz5W_5g5_V5&usqp=CAU"></div>
			<div class="header right"><i class="bi bi-three-dots-vertical"></i></div>
		</div>
			<div class="card-title">
				<p class="heading">Lorem ipsum dolor &nbsp;<i class="bi bi-compass"></i></p>
			</div>
			
			<p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing <br>User journey, Ideation and Wireframing, etc...</p>
			<div class="row btnrow my-4">
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-success btn-sm" style="background: #00ff002b;">Full Time</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-primary btn-sm" style="background: #007bff33;">Min. 1 year</button></div>
				<div class="col-4 col-md-3"><button type="button" class="btn btn-outline-danger btn-sm" style="background: #dc35452e;">Director</button></div>
			</div>

			<div class="mutual"><i class="bi bi-people"></i>&nbsp;&nbsp;<span>5 Friends work here</span></div>
			<div class="row btnsubmit mt-4">
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-primary btn-lg"><span>Apply Now</span></button>
				</div>
				<div class="col-md-6 col-6">
					<button type="button" class="btn btn-dark btn-lg"><span>Message</span></button>
				</div>
			</div>
	</div>
                      </div>
                      </div>
                      
                    <div class="row sorting mb-5 mt-5">
                      <div class="col-12">
                        <a class="btn btn-light">
                          <i class="fas fa-arrow-up mr-2"></i> Back to top</a>
                        <div class="btn-group float-md-right ml-3">
                          <button type="button" class="btn btn-lg btn-light"> <span class="fa fa-arrow-left"></span> </button>
                          <button type="button" class="btn btn-lg btn-light"> <span class="fa fa-arrow-right"></span> </button>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div><div class="col-md-4 order-md-1 col-lg-3 sidebar-filter">
                  <h3 class="mt-0 mb-5">Showing <span class="text-primary">12</span> Study material</h3>
                  <h6 class="text-uppercase font-weight-bold mb-3">Field</h6>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="category-1">
                      <label class="custom-control-label" for="category-1">Physics</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="category-2">
                      <label class="custom-control-label" for="category-2">Chemistry &amp;</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="category-3">
                      <label class="custom-control-label" for="category-3">Maths</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="category-4">
                      <label class="custom-control-label" for="category-4">Biology</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="category-5">
                      <label class="custom-control-label" for="category-5">Computer</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="category-6">
                      <label class="custom-control-label" for="category-6">History</label>
                    </div>
                  </div>
                  
                  <div class="divider mt-5 mb-5 border-bottom border-secondary"></div>
                  <h6 class="text-uppercase mt-5 mb-3 font-weight-bold">Standard</h6>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="filter-size-1">
                      <label class="custom-control-label" for="filter-size-1">class 6</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="filter-size-2">
                      <label class="custom-control-label" for="filter-size-2">class 7</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="filter-size-3">
                      <label class="custom-control-label" for="filter-size-3">class 8</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="filter-size-4">
                      <label class="custom-control-label" for="filter-size-4">class 9</label>
                    </div>
                  </div>
                  <div class="mt-2 mb-2 pl-2">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="filter-size-5">
                      <label class="custom-control-label" for="filter-size-5">class 10</label>
                    </div>
                  </div>
                  <div class="divider mt-5 mb-5 border-bottom border-secondary"></div>
                  <h6 class="text-uppercase mt-5 mb-3 font-weight-bold">Price </h6>
                  <div class="price-filter-control">
                    <input type="number" class="form-control w-50 pull-left mb-2" placeholder="Min" id="price-min-control">
                    <input type="number" class="form-control w-50 pull-right" placeholder="Max" id="price-max-control">
                  </div>
                  
                  <input id="ex2" type="text" class="slider " value="50,150" data-slider-min="10" data-slider-max="200" data-slider-step="5" data-slider-value="[50,150]" data-value="50,150" style="display: none;">
                  <div class="divider mt-5 mb-5 border-bottom border-secondary"></div>
                  <a href="#" class="btn btn-lg btn-block btn-primary mt-5">Update Results</a>
                </div>

              </div>
            </div>
  @stop