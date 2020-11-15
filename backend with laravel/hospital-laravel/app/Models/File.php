<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * class File 
 * @package App\Models
 * @property int id
 * @property string name
 * @property string extention
 * @property int refid
 * @property string type
 */
class File extends Model
{
    public function Exam_answer(){
        return $this->belongsTo('App\Models\Exam_answer');
    }
    public function News(){
        return $this->belongsTo('App\Models\News');
    }
}
