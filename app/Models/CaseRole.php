<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseRole extends Model
{
    use HasFactory;

    protected $table = 'Case';

    protected $fillable = [
        'CaseID', // Assuming you want to allow mass assignment for the 'caseID' column
        'id',     // Assuming you want to allow mass assignment for the 'ID' column
    ];

    // Define any relationships if needed
    public function user()
    {
        return $this->belongsTo(User::class, 'ID');
    }

    // Define the relationship with casemodels table
    public function casemodel()
    {
        return $this->belongsTo(CaseModel::class, 'caseID');
    }
}