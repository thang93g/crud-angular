<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::prefix('groups')->group(function(){
    Route::get('','GroupController@index');
    Route::get('{id}','GroupController@show');
    Route::post('store','GroupController@store');
    Route::put('update/{id}','GroupController@update');
    Route::delete('delete/{id}','GroupController@destroy');
    Route::post('search','GroupController@search');
});

Route::prefix('students')->group(function(){
    Route::get('','StudentController@index');
    Route::get('{id}','StudentController@show');
    Route::post('store','StudentController@store');
    Route::put('update/{id}','StudentController@update');
    Route::delete('delete/{id}','StudentController@destroy');
    Route::post('search','StudentController@search');
});
