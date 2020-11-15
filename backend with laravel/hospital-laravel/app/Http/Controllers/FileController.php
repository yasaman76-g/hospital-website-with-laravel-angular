<?php
namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Exam_answer;
use App\Models\File;
use App\Models\News;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
//use Illuminate\Support\Facades\Request;

class FileController
{
public function selectanswer(Request $request){
    $postArray = $request->all();
    $code=$postArray['code'];
    $name=Exam_answer::leftJoin('files', 'exam_answers.id', '=', 'files.refid')->select('files.name','files.extention')->where('code','=',$code)->get();
    $extention;
    foreach($name as $data)
    {
$extention=$data['extention'];
$destination='file/'.$data['name'];
    }
    $file=file_get_contents($destination);
    return $file;
}

public function selectnews(){
$news=News::join('files','news.id','=','files.refid')->select('*')->where('type','=','خبر')->get();
$response=array();
 $refid=[];
 $data1=array();
 $data2=array();
 foreach($news as $data){
   
        array_push($refid,$data['refid']);
}
    $id=array_count_values($refid);
    $i=0;
    foreach($id as $key=>$value){
      $ref=$key;
      $count=$value;
      for($j = 0; $j < $count; $j++)
     {
            if($news[$i]['refid']==$ref && $news[$i]['extention']=="image/jpeg"){
               $imagename[$j]=$news[$i]['name'];
             }
             elseif($news[$i]['refid']==$ref && ($news[$i]['extention']=="text/html" || $news[$i]['extention']=="text/plain" )){
               $destination='file/'.$news[$i]['name'];
               $response=[
                 'id'=>$news[$i]['refid'],
                 'titr'=>$news[$i]['titr'],
                 'header'=>$news[$i]['header'],
                 'newsname'=>file_get_contents($destination)
               ];
               }
              $i++;
        }
        $data1[$i]=[
         'news'=>$response,
         'image'=>$imagename
       ];
      
        
   }
   $k=0;
    foreach($data1 as $val){
      $data2[$k]=$val;
      $k++;
    }
    return $data2;}


    public function selectnewsbyid(Request $request){
        $postArray = $request->all();
        $news=File::select('name','extention')->where('type','=','خبر')->where('refid','=', $postArray['id'])->get();
        $response=0;
        $album=array();
        $i=0;
        $data1;
        foreach($news as $data){
          if($data['extention']==="image/jpeg"){
              $album[$i]=$data['name'];
              $i++;
          }
         else{
           $destination='file/'.$data['name'];
             $response=file_get_contents($destination);
           }
       }
       $data1=[
         'news'=>$response,
         'album'=>$album
       ];
       return $data1;
    }

    public function uplaodanswer(Request $request){
      $postArray = $request->all();
      if(isset($_FILES['upload']) && ($_FILES['upload']['error'] == 0) && ($postArray['code'] !="")){
        $code = $postArray['code'];
        $destination='file/'.$_FILES['upload']['name'];
        move_uploaded_file($_FILES['upload']['tmp_name'],$destination);
        $name =$_FILES['upload']['name'];
       $extention =$_FILES['upload']['type'];
      $type='آزمایش';
      $id=Exam_answer::insertGetId(['code'=>$code,
      'created_at'=>now()]);
        File::insert([
        'name'=>$name,
        'extention'=>$extention,
        'refid'=>$id,
        'type'=>$type,
        'created_at'=>now()
      ]);
      }
    }

    public function insertnews(Request $request){
      $postArray = $request->all();
      if(isset($postArray['header'])&& isset($postArray['titr'])){
        $titr=$postArray['titr'];
        $header =$postArray['header'];
        $type='خبر';
    foreach($_FILES as $data){
        $destination='file/'.$data['name'];
        move_uploaded_file($data['tmp_name'],$destination);
    }
    $id=News::insertGetId(['titr'=>$titr,
    'header'=>$header,
      'created_at'=>now()]);

      foreach($_FILES as $data){
        if($data['type']=="image/jpeg"){
           $name=$data['name'];
           $extention=$data['type'];
           File::insert([
        'name'=>$name,
        'extention'=>$extention,
        'refid'=>$id,
        'type'=>$type,
        'created_at'=>now()
      ]);
         }
         else{
           $name=$data['name'];
           $extention=$data['type'];
           File::insert([
            'name'=>$name,
            'extention'=>$extention,
            'refid'=>$id,
            'type'=>$type,
            'created_at'=>now()
          ]);
         }}
      }
      return http_response_code(200);
    }

    public function updatenews(Request $request){
      $postArray = $request->all();
      if(isset($postArray) && !empty($postArray)){
        $id = $postArray['id'];
        $titr = $postArray['model']['titr'];
        $header = $postArray['model']['header'];
        News::where('id','=',$id)->update(['titr'=>$titr,'header'=>$header]);
        return http_response_code(200);
      }
    }
    public function deletenews(Request $request){
      $postArray = $request->all();
      if(isset($postArray) && !empty($postArray)){
        $id = $postArray['id'];
        News::where('id','=',$id)->delete();
        File::where('refid','=',$id)->delete();
        return http_response_code(200);
      }
    }
 }     
