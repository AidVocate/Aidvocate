<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\CaseModel;
use App\Models\AssignedLawyer;
use App\Models\Signature;
use Illuminate\Http\Request;
use App\Models\CaseQuestions;
use Illuminate\Support\Facades\DB;
use App\Models\LegalRepresentation;
use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Carbon\Carbon;

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

    public function LawyerOffersList()
    {
        // Retrieve all cases that are not approved
        $offers = AssignedLawyer::join('users', 'AssignedLawyer.id', '=', 'users.id')
                                ->join('Case', 'AssignedLawyer.CaseID', '=', 'Case.CaseID')
                                ->select('AssignedLawyer.id', 'AssignedLawyer.CaseID', 'users.FirstName',
                                         'users.LastName', 'users.Email', 'Case.NatureOfAppearance')
                                ->where('AssignedLawyer.Approved', false)->paginate(10);
        // Return the view with the cases data
        return inertia('PBO/ViewLawyerOffersBoard', [
            'offers' => $offers,
        ]);
    }

    public function ActiveLegalNeedsList()
    {
        // Retrieve all cases that are not approved
        $activeLN = AssignedLawyer::join('users', 'AssignedLawyer.id', '=', 'users.id')
                                ->join('Case', 'AssignedLawyer.CaseID', '=', 'Case.CaseID')
                                ->select('AssignedLawyer.id', 'AssignedLawyer.CaseID', 
                                DB::raw('DATE_FORMAT(AssignedLawyer.updated_at, "%Y-%m-%d") as formatted_date'),
                                'users.FirstName', 'users.LastName', 'users.Email', 'Case.NatureOfAppearance')
                                ->where('AssignedLawyer.Approved', true)
                                ->where('AssignedLawyer.Case_Close', false)
                                ->paginate(10);

        // Return the view with the cases data
        return inertia('PBO/ViewActiveLegalNeedsBoard', [
            'activeLN' => $activeLN
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
        return redirect(route('cases.index'))->with('message', 'Legal Need successfully approved.');
    }

    public function ViewLawyerOffer($id, $CaseID)
    {
        // Retrieve lawyer details by their ID
        $lawyerDetails = User::findOrFail($id);
        
        // Retrieve the case by its ID
        $caseDetails = CaseModel::findOrFail($CaseID);
        $caseQuestions = CaseQuestions::where('CaseID', $CaseID)->first();
        $caseRepresentation = LegalRepresentation::where('CaseID', $CaseID)->first();
        $caseSignature = Signature::where('CaseID', $CaseID)->first();
        
        // Retrieve user information associated with the case
        $clientDetails = User::findOrFail($caseDetails->id);
    
        // Return the view with the case and offer data
        return inertia('PBO/ViewLawyerOffer', [
            'lawyerDetails' => $lawyerDetails,
            'caseDetails' => $caseDetails,
            'caseQuestions' => $caseQuestions,
            'caseRepresentation' => $caseRepresentation,
            'caseSignature' => $caseSignature,
            'clientDetails' => $clientDetails,
        ]);
    }

    public function ApproveLawyerOffer($id, $CaseID)
    {
        // Find the offer by caseID and lawyerID
        $record = AssignedLawyer::where('CaseID', $CaseID)
                    ->where('id', $id)
                    ->update(['Approved' => true]);

        // Redirect back with success message
        return redirect(route('offers.index'))->with('message', 'Lawyer Offer successfully approved.');
    }

    public function ViewActiveLegalNeed($id, $CaseID)
    {
        // Retrieve lawyer details by their ID
        $lawyerDetails = User::findOrFail($id);
        
        // Retrieve the case by its ID
        $caseDetails = CaseModel::findOrFail($CaseID);
        $caseQuestions = CaseQuestions::where('CaseID', $CaseID)->first();
        $caseRepresentation = LegalRepresentation::where('CaseID', $CaseID)->first();
        $caseSignature = Signature::where('CaseID', $CaseID)->first();
        
        // Retrieve user information associated with the case
        $clientDetails = User::findOrFail($caseDetails->id);
    
        // Return the view with the case and offer data
        return inertia('PBO/ViewActiveLegalNeeds', [
            'lawyerDetails' => $lawyerDetails,
            'caseDetails' => $caseDetails,
            'caseQuestions' => $caseQuestions,
            'caseRepresentation' => $caseRepresentation,
            'caseSignature' => $caseSignature,
            'clientDetails' => $clientDetails,
        ]);
    }

    public function CloseActiveLegalNeed($id, $CaseID)
    {
        // Find the offer by caseID and lawyerID
        $record = AssignedLawyer::where('CaseID', $CaseID)
                    ->where('id', $id)
                    ->update(['Case_Close' => true]);

        // Redirect back with success message
        return redirect(route('active.index'))->with('message', 'Legal Need successfully closed.');
    }
}
