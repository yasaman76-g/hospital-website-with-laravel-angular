<?php
namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Oauth_doctor;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Http\Request;
use Validator;
class ClinicController
{
    public function insertdoctor(Request $request){
        $validator = Validator::make($request->all(), [ 
            'refid' => 'required',
            'takhasos' => 'required',  
            'day' => 'required',  
            'shift' => 'required',  
            'time' => 'required',  
            'price' => 'required'
          ]);
          if ($validator->fails()) { 
            return response()->json('پر بودن فیلد الزامی است',400);
          }
        $postArray = $request->all(); 
          Oauth_doctor::insert(['refid'=>$postArray['refid'],
          'takhasos'=>$postArray['takhasos'],
          'day'=>$postArray['day'],
          'shift'=>$postArray['shift'],
          'time'=>$postArray['time'],
          'changetime'=>$postArray['time'],
          'price'=>$postArray['price']]);
          return http_response_code(200);
    }
    
    public function getatfal()
    {
    $atfal=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','اطفال')->get();
        return $atfal;
    }
    public function getcheshm()
    {
    $cheshm=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','چشم')->get();
        return $cheshm;
    }
    public function getdakheli()
    {
    $dakheli=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','داخلی')->get();
        return $dakheli;
    }
    public function getghalb()
    {
    $ghalb=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','قلب')->get();
        return $ghalb;
    }
    public function getmaghz()
    {
    $maghz=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','مغز و اعصاب')->get();
        return $maghz;
    }
    public function getortoped()
    {
    $ortoped=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','ارتوپد')->get();
        return $ortoped;
    }
    public function getpost()
    {
    $post=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','پوست و مو')->get();
        return $post;
    }
    public function getzanan()
    {
    $zanan=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=','زنان')->get();
        return $zanan;
    }
   public function selectdoctor(Request $request){
       $postArray=$request->all();
$doctor=Oauth_doctor::join('users', 'refid', '=', 'users.id')->where('takhasos','=',$postArray['takhasos'])->where('number','>',0)->select('users.first_name','users.last_name','oauth_doctors.*')->get();
return response()->json($doctor,200);
   }
}