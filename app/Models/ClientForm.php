<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientForm extends Model
{
    use HasFactory;

    protected $table = 'ClientForm';

    protected $primaryKey = 'FormID'; // If the primary key is 'FormID'

    protected $fillable = [
        'id',
        'FirstName',
        'LastName',
        'DateOfBirth',
        'Address',
        'Phone',
        'Voicemail',
        'CaseRole',
        'PlaintiffNames',
        'DefendantNames',
        'OtherPersons',
        'CourtDate',
        'CourtTime',
        'CourtNature',
        'CourtDocuments',
        'Interpreter',
        'InterpreterLanguage',
        'CaseDescription',
        'CaseQuestionOne',
        'CaseQuestionTwo',
        'CaseQuestionThree',
        'PendingCases',
        'OpposingRep',
        'CurrentAssistance',
        'PreviousAssistance',
        'PreviousDescription',
        'FirstTime',
        'Signature',
        'PrintName',
        'SignedDate',
    ];

    protected $casts = [
        'Voicemail' => 'boolean',
        'CourtDocuments' => 'boolean',
        'Interpreter' => 'boolean',
        'PendingCases' => 'boolean',
        'CurrentAssistance' => 'boolean',
        'PreviousAssistance' => 'boolean',
        'FirstTime' => 'boolean',
    ];

    // Define the relationship with the accounts table
    public function account()
    {
        return $this->belongsTo(Account::class, 'id', 'id');
    }
}