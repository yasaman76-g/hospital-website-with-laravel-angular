<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth; 
use App\Models\User; 
use Validator;
class AuthController extends Controller
{
     /** 
   * Login API 
   * 
   * @return \Illuminate\Http\Response 
   */ 
  public function login(Request $request){ 
    if(Auth::attempt(['username' => $request->username, 'password' => $request->password])){ 
      $user = Auth::user(); 
      $success['token'] =  $user->createToken('LaraPassport')->accessToken; 
      $success['username'] =  $user->username;
      $success['scope'] =  $user->scope;
      return response()->json([
        'status' => 'success',
        'data' => $success
      ]); 
    } else { 
      return response()->json('نام کاربری یا رمز عبور اشتباه است',400);
    } 
  }

  /** 
   * Register API 
   * 
   * @return \Illuminate\Http\Response 
   */ 
  public function register(Request $request) 
  { 
   
    $validator = Validator::make($request->all(), [ 
      'username' => 'required|unique:users',
      'password' => 'required',  
      'first_name' => 'required',  
      'last_name' => 'required',  
      'email' => 'required|email',  
      'scope' => 'required',  
      'userid' => 'required', 
     // 'c_password' => 'required|same:password', 
    ]);
    if ($validator->fails()) { 
      $errors = $validator->errors();
    //   if ($errors->has('username')) {
    //     //return response()->json('نام کاربری قبلا ثبت شده است لطفا نام کاربری دیگری وارد کنید',400);
    //     return response()->json($errors,400);
    //    }
    //  else{
    //   return response()->json('پر بودن فیلد الزامی است',400);
    //  }
    return response()->json($errors,400);
    }
    $postArray = $request->all(); 
    $postArray['password'] = bcrypt($postArray['password']); 
    $user = User::create($postArray); 
    $success['token'] =  $user->createToken('LaraPassport')->accessToken; 
    return response()->json([
      'status' => 'success',
      'data' => $success,
    ]); 
  }

  public function getuser(Request $request){
    $postArray = $request->all();
    if ($postArray['username']==='') { 
      return response()->json(400);
    }
    $arr=User::where('username','=',$postArray['username'])->get();
    return $arr;
  }
  public function changepassword(Request $request){
    $validator = Validator::make($request->all(), [ 
      'password' => 'required']);
    if ($validator->fails()) { 
      return response()->json('پر بودن فیلد الزامی است',400);
    }
    $postArray = $request->all();
    if ($postArray['username']==='') { 
      return response()->json(400);
    }
    User::where('username','=',$postArray['username'])->update(['password'=>bcrypt($postArray['password'])]);
 }

 public function updateuser(Request $request){
   $postArray=$request->all();
  $user=array();
  $user=$postArray['model'];
  $validator = Validator::make($user, [ 
    'username' => 'required',
    'first_name' => 'required',  
    'last_name' => 'required',  
    'email' => 'required|email',
    'userid' => 'required' 
  ]);
  if ($validator->fails()) { 
    $errors = $validator->errors();
    if ($errors->has('username')) {
      return response()->json('نام کاربری قبلا ثبت شده است لطفا نام کاربری دیگری وارد کنید',400);
     }
   else{
    return response()->json('پر بودن فیلد الزامی است',400);
   }
  }

  User::where('username','=',$postArray['user'])
  ->update(['username'=>$postArray['model']['username'],'first_name'=>$postArray['model']['first_name'],'last_name'=>$postArray['model']['last_name'],'email'=>$postArray['model']['email'],'userid'=>$postArray['model']['userid']]);
  $user=['username'=>$postArray['model']['username']];
  return json_encode($user);
 }
}
