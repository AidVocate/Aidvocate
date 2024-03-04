<?php

namespace App\Http\Controllers;

use App\Models\ClientForm;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ViewFormController extends Controller
{
    //
    function index()
    {
        $clientId = 1;
        $clientForm = ClientForm::where('FormID', 1)->first();
        return view('viewform.viewclientform', compact('clientForm'));
    }
}
