<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\AdminReplyMail;

class AdminMailController extends Controller
{
    public function send(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email',
            'message' => 'required|string',
        ]);

        Mail::to($validated['email'])->send(
            new AdminReplyMail($validated['name'], $validated['message'])
        );

        return response()->json(['message' => 'Email envoyé avec succès.']);
    }
}
