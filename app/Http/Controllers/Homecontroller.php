<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Homecontroller extends Controller
{

    public function create()
    {
       
        return view('pages/signin'); 
    }
}
?>