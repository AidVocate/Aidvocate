<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseQuestions extends Model
{
    use HasFactory;

    protected $table = 'CaseQuestions';

    protected $fillable = [
        'caseID',     // Assuming you want to allow mass assignment for the 'caseID' column
        'question1',
        'question2',
        'question3',
    ];

    // Define the relationship with the case table
    public function case()
    {
        return $this->belongsTo(CaseModel::class, 'caseID');
    }
}