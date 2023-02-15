<html>
  <head>
  	<title>Title-name</title>
	  @include('user.head')
  </head>
  <body>
  	@include('user.header')
	 @include('user.sidebar')
  		 @yield('content') 
 
  	@include('user.footer')
 
  	@include('user.javascript')
  </body>
</html>