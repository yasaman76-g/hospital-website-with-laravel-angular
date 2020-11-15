<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * class Exam_answer
 * @package App\Models
 * @property int id
 * @property string code
 */
class Exam_answer extends Model
{
    public function File(){
        return $this->belongsTo('App\Models\File');
    }
}
