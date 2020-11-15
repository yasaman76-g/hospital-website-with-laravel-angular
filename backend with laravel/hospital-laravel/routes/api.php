<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\ClinicController;
use App\Http\Controllers\TurnController;
use App\Http\Controllers\FileController;
use App\Http\Controllers\pcController;
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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::post('login', [AuthController::class, 'login']);
Route::post('register',[AuthController::class, 'register']);
Route::post('getuser',[AuthController::class, 'getuser']);
Route::put('changepassword',[AuthController::class, 'changepassword']);
Route::put('updateuser',[AuthController::class, 'updateuser']);
Route::post('insertdoctor',[ClinicController::class, 'insertdoctor']);
Route::get('getzanan',[ClinicController::class, 'getzanan']);
Route::get('getcheshm',[ClinicController::class, 'getcheshm']);
Route::get('getdakheli',[ClinicController::class, 'getdakheli']);
Route::get('getghalb',[ClinicController::class, 'getghalb']);
Route::get('getmaghz',[ClinicController::class, 'getmaghz']);
Route::get('getortoped',[ClinicController::class, 'getortoped']);
Route::get('getpost',[ClinicController::class, 'getpost']);
Route::get('getatfal',[ClinicController::class, 'getatfal']);
Route::post('selectdoctor',[ClinicController::class, 'selectdoctor']);
Route::get('pc',[pcController::class, 'pc']);
Route::post('selectanswer',[FileController::class, 'selectanswer']);
Route::get('selectnews',[FileController::class, 'selectnews']);
Route::post('selectnewsbyid',[FileController::class, 'selectnewsbyid']);
Route::post('uplaodanswer',[FileController::class, 'uplaodanswer']);
Route::post('insertnews',[FileController::class, 'insertnews']);
Route::post('updatenews',[FileController::class, 'updatenews']);
Route::post('deletenews',[FileController::class, 'deletenews']);
Route::post('insertturns',[TurnController::class, 'insertturns']);
Route::post('getturns',[TurnController::class, 'getturns']);
Route::put('updateturns',[TurnController::class, 'updateturns']);
Route::post('turnslist',[TurnController::class, 'turnslist']);
Route::post('deleteturns',[TurnController::class, 'deleteturns']);
