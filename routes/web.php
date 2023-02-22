<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\Homecontroller;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('pages/home');
});
// Route::get('/dashboard', function () {
//     return view('pages/dashboard');
// });
Route::get('/profile', function () {
    return view('tutor/user_profile');
});
Route::get('/upgrade', function () {
    return view('tutor/upgrade');
});
Route::get('/tutors', function () {
    return view('pages/browse-tutor');
});
Route::get('/signin', 'App\Http\Controllers\Homecontroller@create');
Route::get('/dashboard', 'App\Http\Controllers\Homecontroller@usertype');
Route::get('/signup',function () {
    return view('pages/signup');
});