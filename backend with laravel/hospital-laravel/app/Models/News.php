<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
/**
 * class News
 * @package App\Models
 * @property int id
 * @property string titr
 * @property string header
 */
class News extends Model
{
    public function File(){
        return $this->hasMany('App\Models\File');
    }
}
