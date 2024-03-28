<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'FirstName' => 'required|string|max:255',
            'LastName' => 'required|string|max:255',
            'Address1' => 'required|string|max:255',
            'Address2' => 'nullable|string|max:255',
            'City' => 'required|string|max:255',
            'Province' => 'required|string|max:255',
            'PostalCode' => 'required|string|max:100|regex:/^[A-Za-z]\d[A-Za-z] ?\d[A-Za-z]\d$/',
            'Phone' => 'required|string|max:12|regex:/^[2-9]\d{2}-\d{3}-\d{4}$/',   
            'VoiceMail' => 'boolean',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
            'Role' => 'required|string|max:100',
        ]);

        $user = User::create([
            'Role' => $request->Role,
            'FirstName' => $request->FirstName,
            'LastName' => $request->LastName,
            'Address1' => $request->Address1,
            'Address2' => $request->Address2,
            'City' => $request->City,
            'Province' => $request->Province,
            'PostalCode' => $request->PostalCode,
            'Phone' => $request->Phone,
            'VoiceMail' => $request->VoiceMail,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('dashboard', absolute: false));
    }
}
