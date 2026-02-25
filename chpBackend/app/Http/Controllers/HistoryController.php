<?php

namespace App\Http\Controllers;

use App\Models\History;
use App\Models\HistoryImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HistoryController extends Controller
{
    public function index()
    {
        return History::with('images')->get();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $history = History::create([
            'title' => $validated['title'],
            'content' => $validated['content'],
        ]);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('history', 'public');
                $history->images()->create([
                    'image_path' => $path
                ]);
            }
        }

        return response()->json($history->load('images'), 201);
    }

    public function show($id)
    {
        return History::with('images')->findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $history = History::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'images' => 'nullable|array',
            'images.*' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        $history->update($validated);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('history', 'public');
                $history->images()->create([
                    'image_path' => $path
                ]);
            }
        }

        return response()->json($history->load('images'));
    }

    public function destroy($id)
    {
        $history = History::findOrFail($id);

        foreach ($history->images as $img) {
            Storage::disk('public')->delete($img->image_path);
            $img->delete();
        }

        $history->delete();

        return response()->json(['message' => 'Histoire supprimée']);
    }
}
