<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CaseModel;
use Illuminate\Http\Request;
use App\Models\AssignedLawyer;
use App\Http\Controllers\Controller;

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
        return inertia('Lawyer/LawyerLegalNeedBoard', [
            'cases' => $cases
        ]);
    }

    public function submitsOffer()
    {
        return Inertia::render('Lawyer/SubmitsOffer');
    }

    public function grabCase(Request $request, $CaseID) // Change $request to $CaseID
{
    // Find the case by its ID
    $case = CaseModel::findOrFail($CaseID);

    // Check if the case is already assigned to a lawyer
    if ($case->AssignedID !== null) {
        return redirect()->back()->with('error', 'This case is already assigned to a lawyer.');
    }

    // Get the currently authenticated user (assuming the lawyer is logged in)
    $assignedLawyerId = auth()->user()->id;

    // Update the AssignedID of the case with the lawyer's ID
    $case->update(['AssignedID' => $assignedLawyerId]);

    // Create a record in the AssignedLawyer table
    AssignedLawyer::create([
        'assignedID' => $assignedLawyerId,
        'caseID' => $CaseID,
    ]);

    return redirect()->back()->with('success', 'Case successfully grabbed.');
}

}
