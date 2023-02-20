<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProizvodController;
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
Route::get("/proizvodi/{id}",[ProizvodController::class,'show']);
Route::get("/proizvodi",[ProizvodController::class,'index']);



Route::post('register', [AuthController::class, 'register']);
Route::post('login', [AuthController::class, 'login']);


Route::group(['middleware' => ['auth:sanctum']], function () {   
    Route::get('/profiles', function (Request $request) {  
        return auth()->user();
    });
     
  //dodati za korpu nesto?
  
    Route::post('logout', [AuthController::class, 'logout']);  
  
});

Route::middleware(['auth:sanctum','isAPIAdmin'])->group(function(){  

    Route::get('/proveri', function(){
        return response()->json(['message'=>'You are admin','status'=>200],200);
    });

    Route::post("/proizvodi",[ProizvodController::class,'store']);
    Route::put("/proizvodi/{id}",[ProizvodController::class,'update']);
    Route::delete("/proizvodi/{id}",[ProizvodController::class,'destroy']);
    
 
});