<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ListForm;

class ListFormController extends Controller
{
    //
    function ListFormView()
    {
        $legalneed = ListForm::all();

        return view('ListForm.ListLegalNeed', ['legalneed' => $legalneed]);
    }
}
