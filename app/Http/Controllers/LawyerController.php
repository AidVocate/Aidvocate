<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CaseModel;


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
}
