<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LegalRepresentation extends Model
{
    protected $table = 'LegalRepresentation';

    protected $primaryKey = 'RepresentationID';


    protected $fillable = [
        'ReasonForChange',
        'CaseID', // Include the foreign key column
    ];

    // Define any relationships if needed
    public function caseModel()
    {
        return $this->belongsTo(CaseModel::class, 'CaseID');
    }
}