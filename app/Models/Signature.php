<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Signature extends Model
{
    use HasFactory;

    protected $table = 'Signature';

    protected $fillable = [
        'id', // Assuming you want to allow mass assignment for the 'id' column
        'Signature',
        'PrintName',
        'SignDate',
    ];

    // Define any relationships if needed
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
