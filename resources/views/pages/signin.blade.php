@extends ('layouts.app')
@section('content')
<style>
 @import url('https://fonts.googleapis.com/css2?family=Itim&display=swap');
.login-wrap{
	width:100%;
	margin:auto;
	max-width:525px;
	min-height:670px;
	position:relative;
	
	backdrop-filter: blur(5px);
background-color: rgba(255, 255, 255, 1);
border-radius: 26px;
box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -8px -8px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
    margin-top: 178px;
       font-family: itim;
}
.login-html{
	width:100%;
	height:100%;
	position:relative;
	padding:90px 70px 50px 70px;

}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
	top:0;
	left:0;
	right:0;
	bottom:0;
	position:absolute;
	transform:rotateY(180deg);
	backface-visibility:hidden;
	transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
	display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
	text-transform:uppercase;
}
.login-html .tab{
	font-size:22px;
	margin-right:15px;
	padding-bottom:5px;
	margin:0 15px 10px 0;
	display:inline-block;
	border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
	color:#1161ee;;
	border-color:#1161ee;
}
.login-form{
	min-height:345px;
	position:relative;
	perspective:1000px;
	transform-style:preserve-3d;
}
.login-form .group{
	margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
	width:100%;
	color:#000;
	display:block;
}
.login-form .group .input,
.login-form .group .button{
	border:none;
	padding:15px 20px;
	border-radius:25px;
	background:#85aeea70;;
}
.login-form .group input[data-type="password"]{
	text-security:circle;
	-webkit-text-security:circle;
}
.login-form .group .label{
	color:#aaa;
	font-size:12px;
}
.login-form .group .button{
	background:#1161ee;
}
.login-form .group label .icon{
	width:15px;
	height:15px;
	border-radius:2px;
	position:relative;
	display:inline-block;
	background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
	content:'';
	width:10px;
	height:2px;
	background:#fff;
	position:absolute;
	transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
	left:3px;
	width:5px;
	bottom:6px;
	transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
	top:6px;
	right:0;
	transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
	color:black;
}
.login-form .group .check:checked + label .icon{
	background:#1161ee;
}
.login-form .group .check:checked + label .icon:before{
	transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
	transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
	transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
	transform:rotate(0);
}

.hr{
	height:2px;
	margin:6px 0 50px 0;
	background:#85aeea;
    
}
.foot-lnk{
	text-align:center;
    color: #287efd;
}
.fa {
         padding: 7px;
    font-size: 17px;
    width: 29px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
  border-radius: 50%;
}
.fa:hover {
    opacity: 0.7;
}

 .fa-facebook {
  background: #3B5998;
  color: white;
}

.fa-twitter {
  background: #55ACEE;
  color: white;
}

.fa-google {
  background: #dd4b39;
  color: white;
}
</style>
<div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
		<div class="login-form">
			<div class="sign-in-htm">
			<div class="group">
					 <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" style="width:26px"> Signin Using Google</a>
				</div>
			<div class="group">
					 <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><i class="fc fa fa-twitter"> </i>&nbsp Signin Using twitter</a>
				</div>
			<div class="group">
					 <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><i class="fc fa fa-facebook"> </i>&nbsp Signin Using facebook</a>
				</div>
				<div class="hr"></div>
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked>
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign In">
				</div>
            
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
				</div>
			</div>
			<div class="sign-up-htm">
			<div class="group">
					 <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><img src="https://img.icons8.com/color/16/000000/google-logo.png" style="width:26px"> Signup Using Google</a>
				</div>
			<div class="group">
					 <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><i class="fc fa fa-twitter"> </i>&nbsp Signup Using twitter</a>
				</div>
			<div class="group">
					 <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#"><i class="fc fa fa-facebook"> </i>&nbsp Signup Using facebook</a>
				</div>
					<div class="hr"></div>
					<div class="group">
					 <label for="inputState">Select user type..</label>
      <select id="inputState" class="form-control" >
        <option selected>Student</option>
		<option>Freelancer</option>
		<option>Tutor</option>
		<option>Job seeker</option>
		<option>Job creator</option>
      </select>
					</div>
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input">
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass" type="password" class="input" data-type="password">
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input">
				</div>
				<div class="group">
					<input type="submit" class="button" value="Sign Up">
				</div>
              
				
			
			</div>
		</div>
	</div>
</div>
@stop