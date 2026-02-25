<?php

use Illuminate\Support\Facades\Route;

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

//pour cote Admin
/* 
use App\Http\Controllers\Admin\AdminController;

Route::middleware(['auth', 'is_admin'])->prefix('admin')->group(function () {
    Route::get('/contacts', [AdminController::class, 'contacts'])->name('admin.contacts');

    Route::get('/subscribers', [AdminController::class, 'subscribers'])->name('admin.subscribers');
    Route::post('/subscribers/add', [AdminController::class, 'addSubscriber'])->name('admin.subscribers.add');
    Route::delete('/subscribers/delete/{id}', [AdminController::class, 'deleteSubscriber'])->name('admin.subscribers.delete');
});
*/