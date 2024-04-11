<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\CaseModel;
use App\Models\Signature;
use Illuminate\Http\Request;
use App\Models\CaseQuestions;
use App\Models\AssignedLawyer;
use App\Models\LegalRepresentation;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;


class LawyerController extends Controller
{
    public function index()
    {
        return Inertia::render('Lawyer/Index');
    }

    public function CaseList()
    {
        // Retrieve all cases that are not approved and not assigned to a lawyer
        $cases = CaseModel::where('Approved', true)
                         ->whereNotIn('CaseID', function ($query) {
                             $query->select('CaseID')
                                   ->from('AssignedLawyer');
                         })
                         ->paginate(10);
    
        // Return the view with the cases data
        return inertia('Lawyer/ViewLegalNeedBoard', [
            'cases' => $cases
        ]);
    }

    public function ViewLegalNeed($CaseID)
    {
        // Check if the CaseID exists in the AssignedLawyer table
        $assignedLawyer = AssignedLawyer::where('CaseID', $CaseID)->first();
    
        // If the CaseID exists in the AssignedLawyer table, redirect the user
        if ($assignedLawyer) {
            return Inertia::render('Lawyer/Index');
        }
    
        // Retrieve the case by its ID
        $caseDetails = CaseModel::findOrFail($CaseID);
        $caseQuestions = CaseQuestions::where('CaseID', $CaseID)->first();
        $caseRepresentation = LegalRepresentation::where('CaseID', $CaseID)->first();
        $caseSignature = Signature::where('CaseID', $CaseID)->first();
        
        // Retrieve user information associated with the case
        $user = User::findOrFail($caseDetails->id);
    
        // Return the view with the case data along with user information
        return inertia('Lawyer/ViewLegalNeed', [
            'caseDetails' => $caseDetails,
            'caseQuestions' => $caseQuestions,
            'caseRepresentation' => $caseRepresentation,
            'caseSignature' => $caseSignature,
            'CasePerson' => $user,
        ]);
    }
    

    public function submitsOffer()
    {
        return Inertia::render('Lawyer/SubmitsOffer');
    }

    // Controller Method to Grab Case
    public function grabCase($CaseID)
    {
        // Get the currently authenticated user
        $user = auth()->user();
        $assignedLawyerId = $user->id; // Get the ID of the authenticated user

        $existingAssignment = AssignedLawyer::where('CaseID', $CaseID)
            ->where('id', $assignedLawyerId)
            ->first();

        if ($existingAssignment) {
            // The case is already assigned to the current user
            return redirect()->back()->with('flash', [
                'type' => 'error',
                'message' => 'This case is already assigned to you.'
            ]);
        }



        // Create a new record in the AssignedLawyer table
        AssignedLawyer::create([
            'id' => $assignedLawyerId,
            'CaseID' => $CaseID,
        ]);
        return redirect()->back()->with('flash', [
            'type' => 'success',
            'message' => 'Case successfully grabbed.'
        ]);
    }

    public function LawyerCaseList()
    {
        // Get the ID of the currently logged-in lawyer
        $lawyerId = auth()->id();
    
        // Retrieve cases assigned to the current lawyer along with Approved and Case_Close statuses
        $cases = CaseModel::select('Case.*', 'AssignedLawyer.Approved', 'AssignedLawyer.Case_Close')
            ->leftJoin('AssignedLawyer', 'Case.CaseID', '=', 'AssignedLawyer.CaseID')
            ->where('AssignedLawyer.id', $lawyerId)
            ->paginate(10);
    
        // Return the view with the cases data
        return inertia('Lawyer/LawyerCases', [
            'cases' => $cases
        ]);
    }

    public function LawyerCase($CaseID)
    {
    
        // Retrieve the case by its ID
        $caseDetails = CaseModel::findOrFail($CaseID);
        $caseQuestions = CaseQuestions::where('CaseID', $CaseID)->first();
        $caseRepresentation = LegalRepresentation::where('CaseID', $CaseID)->first();
        $caseSignature = Signature::where('CaseID', $CaseID)->first();
        
        // Retrieve user information associated with the case
        $user = User::findOrFail($caseDetails->id);
    
        // Return the view with the case data along with user information
        return inertia('Lawyer/LawyerCase', [
            'caseDetails' => $caseDetails,
            'caseQuestions' => $caseQuestions,
            'caseRepresentation' => $caseRepresentation,
            'caseSignature' => $caseSignature,
            'CasePerson' => $user,
        ]);
    }
    
    
    
}
