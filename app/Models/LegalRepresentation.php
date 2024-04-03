<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LegalRepresentation extends Model
{
    protected $table = 'legal_representations';

    protected $fillable = [
        'id', // Assuming you want to allow mass assignment for the 'id' column
        'ReasonForChange',
    ];

    // Define any relationships if needed
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}