<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Request;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ClientController;
use App\Http\Controllers\LawyerController;
use App\Http\Controllers\PBOController;
use App\Http\Controllers\ProfileController;
use Tests\Feature\Auth\EmailVerificationTest;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Http\Middleware\RoleMiddleware;

require __DIR__.'/auth.php';


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

//Email Verification
Route::get('/email/verify', function () {
    return view('auth.verify-email');
})->middleware('auth')->name('verification.notice');

Route::get('/email/verify/{id}/{hash}', function (EmailVerificationRequest $request){
    $request->fulfill();
    
    return redirect('/profile');
})->middleware(['auth','signed'])->name('verification.verify');

Route::post('/email/verification-notification', function (Request $request){
    $request->user()->sendEmailVerificationNotification();

    return back()->with('message', 'Verfication link sent!');
})->middleware(['auth', 'throttle:6,1'])->name('verification.send');


//**************************************************************************************************/

//Admin

Route::middleware(['auth', RoleMiddleware::class . ':Admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index']);
    // Other admin routes...
});

//Client

Route::middleware(['auth', RoleMiddleware::class . ':Client'])->group(function () {
    Route::get('/client', [ClientController::class, 'index']);
    Route::get('/client/CreateLegalNeed', [ClientController::class, 'ViewLegalNeedForm']);
    Route::post('/client/CreateLegalNeed', [ClientController::class, 'AddLegalNeed'])->name('createLegalNeed');
    // Other user routes...
});

//Lawyer
Route::middleware(['auth', RoleMiddleware::class . ':Lawyer'])->group(function () {
    Route::get('/lawyer', [LawyerController::class, 'index']);
    Route::get('/lawyer/ViewLegalNeedBoard', [LawyerController::class, 'CaseList'])->name('cases.index');
    Route::get('/lawyer/SubmitsOffer', [LawyerController::class, 'submitsOffer']);
    Route::post('/lawyer/SubmitsOffer/{case}', [LawyerController::class, 'grabCase'])->name('cases.grab');
});

//PBO

Route::middleware(['auth', RoleMiddleware::class . ':PBO'])->group(function () {
    Route::get('/pbo', [PBOController::class, 'index']);
    Route::get('/pbo/ViewLegalNeed/{CaseID}', [PBOController::class, 'ViewLegalNeed']);
    Route::post('/pbo/ViewLegalNeed/{CaseID}', [PBOController::class, 'ApproveLegalNeed'])->name('approveLegalNeed');
    // Post for update/public legal need?
    Route::get('/pbo/ViewLegalNeedBoard', [PBOController::class, 'CaseList'])->name('cases.index');
    // Other user routes...
});


//404
Route::get('/{any}', function () {
    abort(404);
})->where('any', '.*');

