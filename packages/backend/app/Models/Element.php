<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static paginate()
 */
class Element extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description'
    ];

    public function logs() {
        return $this->hasMany(Log::class);
    }

    public function sensors() {
        return $this->hasMany(Sensor::class);
    }
}
