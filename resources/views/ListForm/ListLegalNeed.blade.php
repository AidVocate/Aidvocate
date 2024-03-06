@extends('layout/layout')

@section('title', 'Client Form')

@section('content')

<div class="container mt-5">
    <h1 class="mb-4">List Legal Need</h1>

    <form action="{{ route('list') }}" method="GET" class="mb-4">
        <div class="input-group mb-3">
            <input type="text" class="form-control" name="search" id="search" value="{{ $search }}" placeholder="Case Nature..." aria-label="Case Nature">
            <button class="btn btn-outline-secondary" type="submit">Search</button>
        </div>
    </form>

    <div class="table-responsive">
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Case Role</th>
                    <th scope="col">Court Date</th>
                    <th scope="col">Court Time</th>
                    <th scope="col">Case Description</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody class="AllForms">
                @foreach($data as $item)
                    <tr>
                        <td>{{$item['FirstName']}}</td>
                        <td>{{$item['LastName']}}</td>
                        <td>{{$item['CaseRole']}}</td>
                        <td>{{$item['CourtDate']}}</td>
                        <td>{{$item['CourtTime']}}</td>
                        <td>{{$item['CaseDescription']}}</td>
                        <td>
                            <a href="/viewlegalneed/{{$item['FormID']}}" class="btn btn-primary btn-sm">View</a>
                        </td>
                    </tr>
                @endforeach 
            </tbody>

            <tbody id="Content" class="SearchForms">
            </tbody>
        </table>
    </div>
</div>

@endsection

