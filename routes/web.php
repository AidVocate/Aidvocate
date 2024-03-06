<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ListFormController;
use App\Http\Controllers\ViewFormController;
use App\Http\Controllers\ClientFormController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

Route::get('/register', [AuthController::class, 'create']);
Route::post('/users', [AuthController::class, 'store']);
Route::get('/login', [AuthController::class, 'showLoginForm'])->name('login');
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::get('/lnlist', [ListFormController::class, 'list'])->name('list');
Route::get('/search', [ListFormController::class, 'search']);
Route::get('/lnform', [ClientFormController::class, 'ClientFormView']);
Route::post('/newclientform', [ClientFormController::class, 'AddClientForm']);
Route::get('viewlegalneed/{FormID}', [ClientFormController::class, 'View']);

Route::get('/legalneedslist', [ListFormController::class, 'listjson']);