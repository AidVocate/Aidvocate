<?php

namespace App\Http\Controllers;

use App\Models\Account;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rule;


class AuthController extends Controller
{

    public function create()
    {
        return view('auth.register');
    }

    public function store(Request $request){
        // dd($request->all());
    $formFields = $request->validate([
        'Email' => ['required', 'min:3', Rule::unique('accounts', 'Email')],
        'password' => 'required|confirmed|min:6',
        'role' => 'required',
        'FirstName' => 'required',
        'LastName' => 'required',
        'Phone' => 'required',
        'Address' => 'required',
        'City' => 'required',
        'PostalCode' => 'required',
        'Province' => 'required',
    ]);

    $formFields['password'] = bcrypt($formFields['password']);

    $username = Account::create($formFields);

    // Let Laravel's authentication system handle user login
    auth()->login($username);

    return redirect('/')->with('message', 'User created and logged in');
}
    public function showLoginForm()
    {
        return view('auth.login');
    }

    public function login(Request $request)
    {
        $credentials = $request->only('Email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('/testlogin'); // Redirect to a dashboard or home page
        }

        return back()->withErrors(['message' => 'Invalid Email or password'])->withInput();
    }

    public function testLogin()
    {
        return view ('auth.testinglogin');
    }

    //logout
    public function logout(Request $request){
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/')->with('message', 'You have been logout');

    }
    


}
