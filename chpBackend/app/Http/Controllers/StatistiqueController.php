<?php

namespace App\Http\Controllers;

use App\Models\Statistique;
use Illuminate\Http\Request;

class StatistiqueController extends Controller
{
    public function index()
    {
        return Statistique::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'value' => 'required|integer',
            'description' => 'nullable|string|max:255',
        ]);

        $stat = Statistique::create($validated);
        return response()->json($stat, 201);
    }

    public function show($id)
    {
        return Statistique::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $stat = Statistique::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'value' => 'sometimes|required|integer',
            'description' => 'nullable|string|max:255',
        ]);

        $stat->update($validated);
        return response()->json($stat);
    }

    public function destroy($id)
    {
        $stat = Statistique::findOrFail($id);
        $stat->delete();

        return response()->json(['message' => 'Statistique supprimée']);
    }
}
