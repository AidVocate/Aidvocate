<?php

namespace Database\Seeders;

use App\Models\ClientForm;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;


class ClientFormSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        ClientForm::create([
            'id' => 1, // Replace with an existing account ID from your accounts table
            'FirstName' => 'John',
            'LastName' => 'Doe',
            'DateOfBirth' => '1990-01-01',
            'Address' => '123 Main St',
            'Phone' => '123-456-7890',
            'Voicemail' => true,
            'CaseRole' => 'Plaintiff',
            'PlaintiffNames' => 'Jane Doe',
            'DefendantNames' => 'Someone',
            'OtherPersons' => 'Person A, Person B',
            'CourtDate' => '2024-03-01',
            'CourtNature' => 'Civil',
            'CourtDocuments' => true,
            'Interpreter' => false,
            'InterpreterLanguage' => null,
            'CaseDescription' => 'Description of the case',
            'CaseQuestionOne' => 'Question 1',
            'CaseQuestionTwo' => 'Question 2',
            'CaseQuestionThree' => 'Question 3',
            'PendingCases' => false,
            'OpposingRep' => 'Opposing Lawyer',
            'CurrentAssistance' => true,
            'PreviousAssistance' => false,
            'PreviousDescription' => null,
            'FirstTime' => true,
            'Signature' => 'John Doe',
            'PrintName' => 'John Doe',
            'SignedDate' => '2024-02-28',
        ]);
    }
}