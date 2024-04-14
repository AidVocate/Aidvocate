<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CaseModel;
use App\Models\Signature;
use Illuminate\Http\Request;
use App\Models\CaseQuestions;
use Illuminate\Support\Facades\DB;
use App\Models\LegalRepresentation;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PBOController extends Controller
{
    public function index()
    {
        return Inertia::render('PBO/Index');
    }

    public function ViewLegalNeedForm()
    {

        return Inertia::render('PBO/ViewLegalNeed');
    }

    public function show($CaseID)
    {
        // Retrieve the case by its ID
        $case = CaseModel::findOrFail($CaseID);

        // Return the view with the case data
        return Inertia::render('PBO/TestLegalNeed', [
            'case' => $case,
        ]);
    }
    
    public function CaseList()
    {
        // Retrieve all cases that are not approved
        $cases = CaseModel::where('Approved', false)->paginate(10);

        // Return the view with the cases data
        return inertia('PBO/ViewLegalNeedBoard', [
            'cases' => $cases
        ]);
    }

    public function ViewLegalNeed($CaseID)
    {
        // Retrieve the case by its ID
        $caseDetails = CaseModel::findOrFail($CaseID);
        $caseQuestions = CaseQuestions::where('CaseID', $CaseID)->first();
        $caseRepresentation = LegalRepresentation::where('CaseID', $CaseID)->first();
        $caseSignature = Signature::where('CaseID', $CaseID)->first();
        
        // Retrieve user information associated with the case
        $user = User::findOrFail($caseDetails->id);
    
        // Return the view with the case data along with user information
        return inertia('PBO/ViewLegalNeed', [
            'caseDetails' => $caseDetails,
            'caseQuestions' => $caseQuestions,
            'caseRepresentation' => $caseRepresentation,
            'caseSignature' => $caseSignature,
            'CasePerson' => $user,
        ]);
    }
    
    public function ApproveLegalNeed($CaseID)
    {
        // Find the case by its ID
        $case = CaseModel::findOrFail($CaseID);

        // Update the 'Approved' column to true
        $case->update(['Approved' => 1]);

        // Redirect back with success message
        return redirect()->back()->with('success', 'The Legal Need has been Approved!'); 
    }
}
