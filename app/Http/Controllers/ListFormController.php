<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ListFormController extends Controller
{
    //
    function ListFormView()
    {
        return view('ListForm.ListLegalNeed');
    }
}
