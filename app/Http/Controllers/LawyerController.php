<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CaseModel;
use Illuminate\Http\Request;
use App\Models\AssignedLawyer;
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
        // Retrieve all cases that are not approved
        $cases = CaseModel::where('Approved', true)->get();

        // Return the view with the cases data
        return inertia('Lawyer/List', [
            'cases' => $cases
        ]);
    }

    public function ViewLegalNeed($CaseID)
    {
        // Retrieve the case by its ID
        $case = CaseModel::findOrFail($CaseID);

        // Return the view with the case data
        return Inertia::render('Lawyer/SubmitsOffer', [
            'case' => $case,
        ]);
    }

    public function submitsOffer()
    {
        return Inertia::render('Lawyer/SubmitsOffer');
    }

    // Controller Method to Grab Case
    // Controller Method to Grab Case
    public function grabCase($CaseID)
    {
        // Find the case by its ID
        $case = CaseModel::findOrFail($CaseID);

        // Check if the case is already assigned to a lawyer
        if ($case->AssignedID !== null) {
            return redirect()->back()->with('error', 'This case is already assigned to a lawyer.');
        }
        $assignedLawyerId = Auth::id();

        // Create a new record in the AssignedLawyer table
       $assignedLawyer = AssignedLawyer::create([
        'id' => $assignedLawyerId,
        // Add other fields if needed
    ]);
            $assignedId = $assignedLawyer->AssignedID;

        // Update the AssignedID column in the Case table
    $case->update(['AssignedID' => $assignedId]);

        return redirect()->back()->with('success', 'Case successfully grabbed.');
    }
}
