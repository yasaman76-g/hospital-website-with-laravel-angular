<?php
namespace App\Http\Controllers;
use App\Http\Controllers\PersianCalenderController;
class pcController {
    
   public function pc(){
       
    $data =PersianCalenderController::date("Y-m-d",time(),false);
    $d=date_create("$data");
    $d1=date_create("$data");
    date_add($d1,date_interval_create_from_date_string("1 days"));
    for($i=0;$i<7;$i++){
     date_add($d,date_interval_create_from_date_string("1 days"));
     date_add($d1,date_interval_create_from_date_string("1 days"));
  if(date_format($d1,"l")=="Thursday"){
       $thursday=date_format($d,"Y/m/d");
       }
   else if(date_format($d1,"l")=="Friday"){
           $friday=date_format($d,"Y/m/d");
       }
   else if(date_format($d1,"l")=="Saturday"){
               $saturday=date_format($d,"Y/m/d");
       }
   else if(date_format($d1,"l")=="Sunday"){
                   $sunday=date_format($d,"Y/m/d");
       }
   else if(date_format($d1,"l")=="Monday"){
           $monday=date_format($d,"Y/m/d");
       } 
   else if(date_format($d1,"l")=="Tuesday"){
           $tuesday=date_format($d,"Y/m/d");
   } 
   else if(date_format($d1,"l")=="Wednesday"){
       $wednesday=date_format($d,"Y/m/d");
   }  
    
};
$weekdate=[
   "شنبه"=>$saturday,
   "یکشنبه"=>$sunday,
   "دوشنبه"=>$monday,
   "سه شنبه"=>$tuesday,
   "چهارشنبه"=>$wednesday,
   "پنج شنبه"=>$thursday,
   "جمعه"=>$friday
];
echo json_encode(array($weekdate));

   }

}