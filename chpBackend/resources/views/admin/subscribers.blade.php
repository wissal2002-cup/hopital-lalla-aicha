@extends('layouts.app')

@section('content')
<div class="container py-4">
    <h2 class="mb-4">📨 Abonnés à la newsletter</h2>

    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <!-- Formulaire d'ajout -->
    <form action="{{ route('admin.subscribers.add') }}" method="POST" class="mb-4">
        @csrf
        <div class="input-group">
            <input type="email" name="email" class="form-control" placeholder="Nouvel email..." required>
            <button type="submit" class="btn btn-success">Ajouter</button>
        </div>
    </form>

    <!-- Liste des abonnés -->
    @if($subscribers->isEmpty())
        <p>Aucun abonné pour l’instant.</p>
    @else
        <table class="table table-bordered">
            <thead class="table-dark">
                <tr>
                    <th>Email</th>
                    <th>Date d’inscription</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                @foreach($subscribers as $subscriber)
                <tr>
                    <td>{{ $subscriber->email }}</td>
                    <td>{{ $subscriber->created_at->format('d/m/Y H:i') }}</td>
                    <td>
                        <form action="{{ route('admin.subscribers.delete', $subscriber->id) }}" method="POST" onsubmit="return confirm('Confirmer la suppression ?')">
                            @csrf
                            @method('DELETE')
                            <button class="btn btn-sm btn-danger">Supprimer</button>
                        </form>
                    </td>
                </tr>
                @endforeach
            </tbody>
        </table>
    @endif
</div>
@endsection
