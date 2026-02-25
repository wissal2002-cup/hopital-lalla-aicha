<?php

namespace App\Http\Controllers;

use App\Models\Annonce;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;


class AnnonceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Annonce::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
            'documents' => 'nullable|array',
'documents.*' => 'file|mimes:pdf,doc,docx,zip|max:5120',

        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('annonces', 'public');
        }
        if ($request->hasFile('documents')) {
    foreach ($request->file('documents') as $doc) {
        $path = $doc->store('annonces/documents', 'public');

        $annonce->documents()->create([
            'file_path' => $path,
            'original_name' => $doc->getClientOriginalName(),
        ]);
    }
}

        $annonce = Annonce::create($validated);
        return response()->json($annonce, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Annonce::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
$validated = $request->validate([
            'title' => 'sometimes|required|string|max:255',
            'content' => 'sometimes|required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($annonce->image) {
                Storage::disk('public')->delete($annonce->image);
            }
            $validated['image'] = $request->file('image')->store('annonces', 'public');
        }

        $annonce->update($validated);
        return response()->json($annonce);
        }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
  $annonce = Annonce::findOrFail($id);

        if ($annonce->image) {
            Storage::disk('public')->delete($annonce->image);
        }

        $annonce->delete();
        return response()->json(['message' => 'Annonce supprimée']);    }
}
