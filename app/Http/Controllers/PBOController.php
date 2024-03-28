<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class PBOController extends Controller
{
    public function index()
    {
        return Inertia::render('PBO/Index');
    }
}
