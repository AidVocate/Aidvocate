<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class LawyerController extends Controller
{
    public function index()
    {
        return Inertia::render('Lawyer/Index');
    }
}
