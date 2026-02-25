<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Models\Subscriber;
use App\Http\Controllers\AdminAuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


use App\Http\Controllers\SubscriberController;
use App\Http\Controllers\ContactMessageController;

Route::post('/admin/login', [AdminAuthController::class, 'login']);



// Tes routes CRUD protégées (services, annonces, FAQ...)
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/admin/profile', function (Request $request) {
        return $request->user();
    });

Route::apiResource('abonnements', SubscriberController::class)->only(['index', 'store', 'destroy']);
Route::apiResource('contact_messages', ContactMessageController::class)
    ->only(['index', 'store', 'destroy']);
Route::apiResource('presentations', PresentationController::class);
Route::apiResource('services', ServiceController::class);
Route::apiResource('publications', PublicationController::class);
Route::apiResource('annonces', AnnonceController::class);
Route::post('/admin/send-email', [AdminMailController::class, 'send']);
Route::apiResource('histories', HistoryController::class);
Route::apiResource('directeur-messages', DirecteurMessageController::class);
Route::apiResource('faqs', FaqController::class);
Route::apiResource('statistiques', StatistiqueController::class);



});



