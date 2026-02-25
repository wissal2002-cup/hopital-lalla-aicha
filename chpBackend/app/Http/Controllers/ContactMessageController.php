<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ContactMessage;

class ContactMessageController extends Controller
{
     public function index()
    {
        return ContactMessage::orderBy('created_at', 'desc')->get();
    }
    public function store(Request $request){
        $request->validate([
            'name'=>'required | string ',
            'telephone'=>'required | string',
            'email'=>'required | email',
            'message'=>'required | string'

        ]);
        contactMessage::create($request->all());
        return response()->json(['message'=>'Message envoye avec succes !']);
    }
     public function destroy($id)
    {
        $message = ContactMessage::findOrFail($id);
        $message->delete();
        return response()->json(['message' => 'Message supprimé']);
    }
}
