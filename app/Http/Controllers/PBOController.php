<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\CaseModel;

class PBOController extends Controller
{
    public function index()
    {
        return Inertia::render('PBO/Index');
    }

    public function CaseList()
    {
        // Retrieve all cases that are not approved
        $cases = CaseModel::where('Approved', false)->get();

        // Return the view with the cases data
        return inertia('PBO/List', [
            'cases' => $cases,
        ]);
    }
}
