<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ListForm;

class ListFormController extends Controller
{
    //
    // function list()
    // {
    //     $legalneed = ListForm::all();

    //     return view('ListForm.ListLegalNeed', ['legalneed' => $legalneed]);
    // }

        function list(Request $request)
        {
            $search = $request->input('search');

            // search and retrieve data

            $data = ListForm::when($search, function ($query) use ($search) {
                return $query->where('CourtNature', 'like', '%' .$search. '%');
            })->get();

            return view('ListForm.ListLegalNeed', ['data' => $data, 'search' => $search]);
        }
}
