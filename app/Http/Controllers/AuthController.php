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
        'username' => ['required', 'min:3', Rule::unique('accounts', 'username')],
        'password' => 'required|confirmed|min:6',
        'role' => 'required',
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
        $credentials = $request->only('username', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            return redirect()->intended('/home'); // Redirect to a dashboard or home page
        }

        return back()->withErrors(['message' => 'Invalid username or password'])->withInput();
    }

    //logout
    public function logout(Request $request){
        auth()->logout();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect('/')->with('message', 'You have been logout');

    }
    


}
