<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Presentation;
use Illuminate\Support\Facades\Storage;


class PresentationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Presentation::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([

            'title' => 'required|string|max:255',
            'content' => 'required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);
        //Gerer l'image

         if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('presentations', 'public');
        }

        $presentation = Presentation::create($validated);
        return response()->json($presentation, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Presentation::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $presentation = Presentation::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

         // Gérer la nouvelle image
        if ($request->hasFile('image')) {
            // Supprimer l’ancienne image si elle existe
            if ($presentation->image) {
                Storage::disk('public')->delete($presentation->image);
            }
            $validated['image'] = $request->file('image')->store('presentations', 'public');
        }

        $presentation->update($validated);
        return response()->json($presentation);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
         $presentation = Presentation::findOrFail($id);

        // Supprimer l’image si elle existe
        if ($presentation->image) {
            Storage::disk('public')->delete($presentation->image);
        }

        $presentation->delete();
        return response()->json(['message' => 'Présentation supprimée']);
    }
}
