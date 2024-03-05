<?php

namespace App\Http\Controllers;

use App\Models\ClientForm;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ClientFormController extends Controller
{
    public function ClientFormView()
    {
        return view('ClientForm.CreateLegalNeed');
    }

    public function AddClientForm(Request $request)
    {
        // dd($request->all());
        // Validate the request data

        // Define custom error message for phone number validation
        $messages = [
            'DateOfBirth.required' => 'The date of birth field is required.',
            'DateOfBirth.date' => 'The date of birth must be a valid date.',
            'DateOfBirth.before_or_equal' => 'The date of birth must be a date before or equal to today.',
            'Phone.regex' => 'The phone number must be in a valid format.',
            
        ];


        $formFields = $request->only([
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
            'CaseDescription',
            'PendingCases',
            'OpposingRep',
            'CurrentAssistance',
            'PreviousAssistance',
            'FirstTime',
            'Signature',
            'PrintName',
            'SignedDate',
            'CaseQuestionOne',
            'CaseQuestionTwo',
            'CaseQuestionThree',
        ]);

        $validationRules = [
            'id' => ['required'],
            'FirstName' => 'required|max:100',
            'LastName' => 'required|max:100',
            'DateOfBirth' => ['required', 'date', 'before_or_equal:today'],
            'Address' => 'required|max:100',
            'Phone' => ['required', 'regex:/^\+?(\d{1,3})?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/'],
            'Voicemail' => 'required',
            'CaseRole' => 'required',
            'PlaintiffNames' => 'required',
            'DefendantNames' => 'required',
            'OtherPersons' => 'required',
            'CourtDate' => 'required',
            'CourtTime' => 'required',
            'CourtNature' => 'required',
            'CourtDocuments' => 'required',
            'Interpreter' => 'required',
            'CaseDescription' => 'required',
            'PendingCases' => 'required',
            'OpposingRep' => 'required',
            'CurrentAssistance' => 'required',
            'PreviousAssistance' => 'required',
            'FirstTime' => 'required',
            'Signature' => 'required',
            'PrintName' => 'required',
            'SignedDate' => 'required',

        ];

        $validatedData = Validator::make($formFields, $validationRules)->validate();


        ClientForm::create($validatedData);

        return redirect('/')->with('message', 'Legal Need created Successfully!');
    }

    public function View(ClientForm $FormID)
    {
        return view('ClientForm.View', ['FormID' => $FormID]);
    }
}
