<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * class Oauth_doctor
 * @package App\Models
 * @property int id
 * @property int refid
 * @property string takhasos
 * @property string day
 * @property string shift
 * @property string time
 * @property string changetime
 * @property int price
 * @property int number
 */
class Oauth_doctor extends Model
{
    public function User(){
        return $this->belongsTo('App\Models\User');
    }
    public function Turn(){
        return $this->hasMany('App\Models\Turn');
    }
}
