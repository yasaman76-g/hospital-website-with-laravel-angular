<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * class Turn 
 * @package App\Models
 * @property int id
 * @property int user_id
 * @property int doctor_id
 * @property string changetime
 * @property string time
 * @property int price
 * @property string day
 * @property string date
 * @property string state
 * @property string now
 */
class Turn extends Model
{
    public function User(){
        return $this->belongsTo('App\Models\User');
    }
    public function Oauth_doctor(){
        return $this->belongsTo('App\Models\Oauth_doctor');
    }
    
}