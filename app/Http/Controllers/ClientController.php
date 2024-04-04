<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CaseModel;
use Illuminate\Http\Request;
use App\Models\CaseQuestions;
use Illuminate\Support\Facades\DB;
use App\Models\LegalRepresentation;
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
        // Retrieve all form fields from the request
        $formData = $request->all();
    
        // Define validation rules for all form fields
        $validationRules = [
            'Case.DateOfNextAppearance' => ['required', 'date'],
            'Case.NatureOfAppearance' => ['required', 'string'],
            'Case.ServiceLanguage' => ['nullable', 'string'],
            'Case.AdditionalInformation' => ['nullable', 'string'],
    
            'CaseQuestion.question1' => ['nullable', 'string'],
            'CaseQuestion.question2' => ['nullable', 'string'],
            'CaseQuestion.question3' => ['nullable', 'string'],
    
            'legalRepresentation.Reasonforchange' => ['nullable', 'string'],
        ];
    
        // Validate the form data
        $validator = Validator::make($formData, $validationRules);
    
        // If validation fails, return the validation errors
        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator)->withInput();
        }
    
        // If validation passes, begin a transaction
        DB::beginTransaction();
    
        try {
            // Create the case model
            $caseData = $formData['Case'];
            $case = CaseModel::create($caseData);
    
            // Create case questions
            $caseQuestionData = $formData['CaseQuestion'];
            $caseQuestions = new CaseQuestions($caseQuestionData);
            $case->caseQuestions()->save($caseQuestions);
    
            // Create legal representation
            $legalRepresentationData = $formData['legalRepresentation'];
            $legalRepresentation = new LegalRepresentation($legalRepresentationData);
            $case->legalRepresentations()->save($legalRepresentation);
    
            // Commit the transaction
            DB::commit();
    
            // Optionally, you can return a response indicating success
            return response()->json(['message' => 'Records created successfully', 'case' => $case], 201);
        } catch (\Exception $e) {
            // Rollback the transaction in case of an error
            DB::rollback();
    
            // Return an error response
            return response()->json(['message' => 'Failed to create records', 'error' => $e->getMessage()], 500);
        }
    }
            
}


// dd($request->all());

        //Validate incoming request data
        // $formFields = $request->only([
        //     'DateOfNextAppearance',
        //     'NatureOfAppearance',
        //     'ServiceLanguage',
        //     'AdditionalInformation',
        // ]);

        // // Create a new CaseModel instance
        // $validationRules = [
        //     'DateOfNextAppearance' => ['required', 'date'],
        //     'NatureOfAppearance' => ['required', 'string'],
        //     'ServicesLanguage' => ['nullable', 'string'],
        //     'AdditionalInformation' => ['nullable', 'string'],
        // ];
    
        // $validatedData = Validator::make($formFields, $validationRules)->validate();

        // CaseModel::create($validatedData);


        // return redirect('/')->with('message', 'Legal Need created Successfully!');
    