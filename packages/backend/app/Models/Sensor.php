<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'element_id',
        'code',
        'description',
        'measure_unit'
    ];

    public function element() {
        return $this->belongsTo(Element::class);
    }
}
