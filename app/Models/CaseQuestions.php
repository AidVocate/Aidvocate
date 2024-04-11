<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseQuestions extends Model
{
    use HasFactory;

    protected $table = 'CaseQuestions';

    protected $primaryKey = 'QuestionID';

    protected $fillable = [
        'CaseID',     // Assuming you want to allow mass assignment for the 'caseID' column
        'Question1',
        'Question2',
        'Question3',
    ];

    // Define the relationship with the case table
    public function caseModel()
    {
        return $this->belongsTo(CaseModel::class, 'CaseID');
    }
}