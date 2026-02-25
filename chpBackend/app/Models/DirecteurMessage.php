<?php

namespace App\Http\Controllers;

use App\Models\DirecteurMessage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DirecteurMessageController extends Controller
{
    public function index()
    {
        return DirecteurMessage::all();
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'content' => 'required|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            $validated['image'] = $request->file('image')->store('directeur', 'public');
        }

        $message = DirecteurMessage::create($validated);
        return response()->json($message, 201);
    }

    public function show($id)
    {
        return DirecteurMessage::findOrFail($id);
    }

    public function update(Request $request, $id)
    {
        $message = DirecteurMessage::findOrFail($id);

        $validated = $request->validate([
            'title' => 'sometimes|string|max:255',
            'content' => 'sometimes|string',
            'image' => 'nullable|image|mimes:jpg,jpeg,png,webp|max:2048',
        ]);

        if ($request->hasFile('image')) {
            if ($message->image) {
                Storage::disk('public')->delete($message->image);
            }

            $validated['image'] = $request->file('image')->store('directeur', 'public');
        }

        $message->update($validated);
        return response()->json($message);
    }

    public function destroy($id)
    {
        $message = DirecteurMessage::findOrFail($id);

        if ($message->image) {
            Storage::disk('public')->delete($message->image);
        }

        $message->delete();

        return response()->json(['message' => 'Mot du directeur supprimé']);
    }
}
