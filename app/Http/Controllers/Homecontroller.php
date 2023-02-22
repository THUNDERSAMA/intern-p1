<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Session;
class Homecontroller extends Controller
{ 
  
    public function create()
    {
       
        return view('pages/signin'); 
    }
    public function usertype()
    {
        Session::put('userlevel','1');// $userlevel="1";
        return view('pages/dashboard');//->with('user_level',$userlevel); 
    }
}
?>