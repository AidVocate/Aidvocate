<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CaseModel extends Model
{
    use HasFactory;

    protected $table = 'Case';

    protected $primaryKey = 'CaseID';

    protected $fillable = [
        'id',
        'DateOfNextAppearance',
        'NatureOfAppearance',
        'CourtDocuments',
        'ServicesLanguage',
        'AdditionalInformation',
        'Approved',
        'AssignedID'
    ];

    // Define the relationship with CaseQuestions
    public function CaseQuestions()
    {
        return $this->hasOne(CaseQuestions::class, 'CaseID');
    }

    public function LegalRepresentation()
    {
        return $this->hasOne(LegalRepresentation::class, 'CaseID');
    }

    public function Signature()
    {
        return $this->hasOne(Signature::class, 'CaseID');
    }

    public function Users()
    {
        return $this->belongsTo(CaseModel::class, 'id');
    }

    public function AssignedLawyer()
    {
        return $this->belongsTo(AssignedLawyer::class, 'AssignedID');
    }
}
