<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CaseModel;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

class ClientController extends Controller
{
    public function index()
    {
        return Inertia::render('Client/Index');
    }

    public function ViewLegalNeedForm()
    {
        return Inertia::render('Client/CreateLegalNeed');
    }


    public function AddLegalNeed(Request $request)
    {

        // dd($request->all());

        // Validate incoming request data
        $formFields = $request->only([
            'DateOfNextAppearance',
            'NatureOfAppearance',
            'ServicesLanguage',
            'AdditionalInformation',
        ]);

        // Create a new CaseModel instance
        $validationRules = [
            'DateOfNextAppearance' => ['required', 'date'],
            'NatureOfAppearance' => ['required', 'string'],
            'ServicesLanguage' => ['nullable', 'string'],
            'AdditionalInformation' => ['nullable', 'string'],
        ];
    
        $validatedData = Validator::make($formFields, $validationRules)->validate();

        CaseModel::create($validatedData);


        return redirect('/')->with('message', 'Legal Need created Successfully!');
    

        // // Validate incoming request data
        // $validatedData = $request->validate([
        //     'Case.DateOfNextAppearance' => 'required|date',
        //     'Case.NatureOfAppearance' => 'required|string',
        //     'Case.ServiceLanguage' => 'nullable|string',
        //     'Case.AdditionalInformation' => 'nullable|string',
    
        //     'CaseQuestion.question1' => 'nullable|string',
        //     'CaseQuestion.question2' => 'nullable|string',
        //     'CaseQuestion.question3' => 'nullable|string',
    
        //     'legalRepresentation.Reasonforchange' => 'nullable|string',
        // ]);
    
        // // Begin a transaction to ensure data integrity
        // DB::beginTransaction();
    
        // try {
        //     // Create the case
        //     $LegalNeed = CaseModel::create($validatedData['Case']);
    
        //     // Associate the case ID with the case questions
        //     $caseQuestions = new CaseQuestions($validatedData['CaseQuestion']);
        //     $LegalNeed->caseQuestions()->save($caseQuestions);
    
        //     // Create the legal representation
        //     $legalRepresentation = new LegalRepresentation($validatedData['legalRepresentation']);
        //     $LegalNeed->legalRepresentations()->save($legalRepresentation);
    
        //     // Commit the transaction
        //     DB::commit();
    
        //     // Optionally, you can return a response indicating success
        //     return response()->json(['message' => 'Records created successfully', 'case' => $LegalNeed], 201);
        // } catch (\Exception $e) {
        //     // Rollback the transaction in case of an error
        //     DB::rollback();
    
        //     // Return an error response
        //     return response()->json(['message' => 'Failed to create records', 'error' => $e->getMessage()], 500);
        // }
    }
}
