<?php

namespace App\Http\Controllers;

use App\Models\Service;
use App\Models\ServiceContent;
use App\Models\ServiceImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ServiceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Service::with(['contents', 'images'])->get();

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'contents' => 'required|array',
            'contents.*' => 'required|string',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        // Créer le service
        $service = Service::create([
            'title' => $validated['title'],
        ]);

        // Enregistrer les contenus texte
        foreach ($validated['contents'] as $text) {
            ServiceContent::create([
                'service_id' => $service->id,
                'content' => $text,
            ]);
        }

        // Enregistrer les images (si présentes)
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('services', 'public');
                ServiceImage::create([
                    'service_id' => $service->id,
                    'image_path' => $path,
                ]);
            }
        }

        return response()->json($service->load(['contents', 'images']), 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $service = Service::with(['contents', 'images'])->findOrFail($id);
        return response()->json($service);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         $service = Service::with(['contents', 'images'])->findOrFail($id);

    $validated = $request->validate([
        'title' => 'sometimes|required|string|max:255',
        'contents' => 'nullable|array',
        'contents.*' => 'nullable|string',
        'images' => 'nullable|array',
        'images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        'delete_image_ids' => 'nullable|array', // Pour supprimer certaines images
        'delete_image_ids.*' => 'integer',
    ]);

    // 🔹 Mise à jour du titre
    if (isset($validated['title'])) {
        $service->update(['title' => $validated['title']]);
    }

    // 🔹 Remplacer tous les textes (optionnel)
    if (isset($validated['contents'])) {
        // Supprimer les anciens
        $service->contents()->delete();
        // Ajouter les nouveaux
        foreach ($validated['contents'] as $text) {
            if ($text !== null) {
                ServiceContent::create([
                    'service_id' => $service->id,
                    'content' => $text,
                ]);
            }
        }
    }

    // 🔹 Supprimer les images cochées pour suppression
    if (!empty($validated['delete_image_ids'])) {
        foreach ($validated['delete_image_ids'] as $imageId) {
            $image = ServiceImage::where('id', $imageId)
                                 ->where('service_id', $service->id)
                                 ->first();
            if ($image) {
                Storage::disk('public')->delete($image->image_path);
                $image->delete();
            }
        }
    }

    // 🔹 Ajouter de nouvelles images
    if ($request->hasFile('images')) {
        foreach ($request->file('images') as $image) {
            $path = $image->store('services', 'public');
            ServiceImage::create([
                'service_id' => $service->id,
                'image_path' => $path,
            ]);
        }
    }

    return response()->json($service->fresh(['contents', 'images']));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       $service = Service::findOrFail($id);

        // Supprimer les images liées
        foreach ($service->images as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        // Supprimer les contenus texte
        $service->contents()->delete();

        // Supprimer le service
        $service->delete();

        return response()->json(['message' => 'Service supprimé']);
    }
}
