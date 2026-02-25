<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SubscriberController extends Controller
{
     public function index()
    {
        return Abonnement::orderBy('created_at', 'desc')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'email' => 'required|email|unique:abonnements,email',
        ]);

        $abonnement = Abonnement::create($validated);

        return response()->json(['message' => 'Abonnement enregistré avec succès', 'data' => $abonnement], 201);
    }

    public function destroy($id)
    {
        $abonnement = Abonnement::findOrFail($id);
        $abonnement->delete();

        return response()->json(['message' => 'Abonnement supprimé']);
    }
}