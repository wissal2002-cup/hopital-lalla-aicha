@extends('layouts.app')

@section('content')
<div class="container py-4">
    <h2 class="mb-4">📥 Messages reçus via le formulaire de contact</h2>

    @if($messages->isEmpty())
        <p>Aucun message reçu pour le moment.</p>
    @else
        <table class="table table-striped table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>Nom</th>
                    <th>Email</th>
                    <th>Téléphone</th>
                    <th>Message</th>
                    <th>Date d’envoi</th>
                </tr>
            </thead>
            <tbody>
                @foreach($messages as $msg)
                <tr>
                    <td>{{ $msg->name }}</td>
                    <td>{{ $msg->email }}</td>
                    <td>{{ $msg->telephone }}</td>
                    <td>{{ $msg->message }}</td>
                    <td>{{ $msg->created_at->format('d/m/Y H:i') }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    @endif
</div>
@endsection
