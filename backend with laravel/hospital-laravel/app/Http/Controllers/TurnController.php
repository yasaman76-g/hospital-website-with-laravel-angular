<?php
namespace App\Http\Controllers;
use App\Models\Oauth_doctor;
use App\Models\User;
use App\Models\Turn;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use Validator;
class TurnController
{
public function insertturns(Request $request){
    $validator = Validator::make($request->all(), [ 
        'user_id' => 'required',
        'doctor_id' => 'required',  
        'time' => 'required',  
        'changetime' => 'required',  
        'price' => 'required',  
        'day' => 'required',
        'date' => 'required'
      ]);
      if ($validator->fails()) { 
        return response()->json('error',400);
      }
      $postArray = $request->all(); 
     $id= Turn::insertGetId(
     ['user_id'=>$postArray['user_id'],
      'doctor_id'=>$postArray['doctor_id'],
      'time'=>$postArray['time'],
      'changetime'=>$postArray['changetime'],
      'price'=>$postArray['price'],
      'day'=>$postArray['day'],
      'date'=>$postArray['date'],
      'now'=>now()
      ]);
      return response()->json($id,200);
}

  public function getturns(Request $request){
    $postArray = $request->all();
    $turns=Turn::select('id','doctor_id','changetime','price','day')->where('id','=', $postArray['id'])->get();
    return response()->json($turns,200);
  }
  public function updateturns(Request $request){
    $postArray=$request->all();
    $validator = Validator::make($postArray, [ 
      'id' => 'required',
      'doctor_id' => 'required',  
      'changetime' => 'required',  
      'day' => 'required' 
    ]);
    if ($validator->fails()) { 
        return response()->json('error',400);
      }
     $data=Oauth_doctor::select('number')->where('refid','=',$postArray['doctor_id'])->get();
     $num;
     foreach($data as $number){
    
      $num=$number['number'];
     }
      
      Turn::join('Oauth_doctors', 'doctor_id', '=', 'Oauth_doctors.refid')->where('oauth_doctors.day','=',$postArray['day'])
      ->update(['state'=>'yes','oauth_doctors.changetime'=>$postArray['changetime'],'Oauth_doctors.number'=>$num-1]);
      return response()->json('success',200);
  }
  public function turnslist(Request $request){
    $postArray=$request->all();
    $username=$postArray['username'];
    $state='yes';
    
    $turns=DB::select('
   select turns.id,doctor_id,first_name,last_name,turns.time,changetime,price,day,date,(SELECT first_name
   from `users` where users.id=doctor_id ) as doctor_fname,(select last_name
   from `users` where users.id=doctor_id ) as doctor_lname
  from `users` inner join `turns`
   on users.id=user_id
    where users.username=?
     and turns.state=?
    ',[$username,$state]);
     return response()->json($turns,200);
    }

    public function deleteturns(Request $request){
      $postArray=$request->all();
      $validator = Validator::make($postArray, [ 
        'id' => 'required',
        'doctor_id' => 'required',  
        'changetime' => 'required',  
        'day' => 'required' 
      ]);
      if ($validator->fails()) { 
          return response()->json('error',400);
      }
      $number=Oauth_doctor::select('number')->where('refid','=',$postArray['doctor_id'])->get();
      $num;
     foreach($number as $data){
    $num=$data['number'];
     }
      Oauth_doctor::where('refid','=',$postArray['doctor_id'])->where('day','=',$postArray['day'])->where('number','<',12)
      ->update(['changetime'=>$postArray['changetime'],'number'=>$num+1]);
      
      Turn::where('id','=',$postArray['id'])->delete();
      return response()->json('success',200);
    }
}