<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Log extends Model
{
    use HasFactory;

    // Makes all attributes mass asignable
    protected $guarded = [];

    public function element() {
        return $this->belongsTo(Element::class);
    }
}
