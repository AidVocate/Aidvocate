<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\ListForm;
use App\Models\ClientForm;

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

    public function search(Request $request)
    {
        $clientOutput="";
        
        $client=ListForm::
        where('FirstName', 'Like', '%'.$request->search.'%')
        ->orWhere('LastName', 'Like', '%'.$request->search.'%')
        ->get();

        foreach($client as $client)
        {
            $clientOutput.=
            '<tr>
                <td>'.$client->FirstName.'</td>
                <td>'.$client->LastName.'</td>
                <td>'.$client->CaseRole.'</td>
                <td>'.$client->CourtDate.'</td>
                <td>'.$client->CourtTime.'</td>
                <td>'.$client->CaseDescription.'</td>
                <td>
                '.'
                <a href="/viewlegalneed/'.$client->FormID.'" class="btn btn-primary btn-sm">View</a>
                '.'
                </td>
            </tr>';
        }

        return response($clientOutput);
    }

    function listjson(Request $request)
    {
        $search = $request->input('search');
        // search and retrieve data

        $data = ListForm::when($search, function ($query) use ($search) {
            return $query->where('CourtNature', 'like', '%' .$search. '%');
        })->get();

        return response()->json($data);
    }

}
