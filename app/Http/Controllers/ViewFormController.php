<?php

namespace App\Http\Controllers;

use App\Models\ViewClientForm;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ViewFormController extends Controller
{
    //
    function index()
    {
        $clientForm = ViewClientForm::all();
        return view('viewform.viewclientform', compact('clientForm'));
    }
}
