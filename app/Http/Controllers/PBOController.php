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
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;

class PBOController extends Controller
{
    public function index()
    {
        return Inertia::render('PBO/Index');
    }

    public function ViewLegalNeed($CaseID)
    {
        // Retrieve the case by its ID
        $caseDetails = CaseModel::findOrFail($CaseID);
        $caseQuestions = CaseQuestions::where('CaseID', $CaseID)->first();
        $caseRepresentation = LegalRepresentation::where('CaseID', $CaseID)->first();
        $caseSignature = Signature::where('CaseID', $CaseID)->first();

        // Return the view with the case data
        return inertia('PBO/ViewLegalNeed', [
            'caseDetails' => $caseDetails,
            'caseQuestions' => $caseQuestions,
            'caseRepresentation' => $caseRepresentation,
            'caseSignature' => $caseSignature,
        ]);
    }

    public function ApproveLegalNeed($caseID)
    {
        // Find the case by its ID
        $case = CaseModel::findOrFail($caseID);

        // Update the 'Approved' column to true
        $case->update(['Approved' => 1]);

        // Redirect back with success message
        return redirect()->back()->with('success', 'The Legal Need has been Approved!'); 
    }

    public function CaseList()
    {
        // Retrieve all cases that are not approved
        $cases = CaseModel::where('Approved', false)->get();

        // Return the view with the cases data
        return inertia('PBO/List', [
            'cases' => $cases
        ]);
    }
}
