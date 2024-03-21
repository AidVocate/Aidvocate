@extends('layout/layout')

@section('title', 'Client Form')

@section('content')
<form method="POST" action="/users">
    @csrf

    <div>
        <label for="Email">Email</label>
        <input id="Email" type="text" name="Email" value="{{ old('Email') }}">

        @error('Email')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="FirstName">First Name</label>
        <input id="FirstName" type="text" name="FirstName" value="{{ old('FirstName') }}">

        @error('FirstName')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="LastName">LastName Name</label>
        <input id="LastName" type="text" name="LastName" value="{{ old('LastName') }}">

        @error('LastName')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="Phone">Phone</label>
        <input id="Phone" type="text" name="Phone" value="{{ old('Phone') }}">

        @error('Phone')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    
    <div>
        <label for="Address">Address</label>
        <input id="Address" type="text" name="Address" value="{{ old('Address') }}">

        @error('Address')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="City">City</label>
        <input id="City" type="text" name="City" value="{{ old('City') }}">

        @error('City')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="Province">Province</label>
        <input id="Province" type="text" name="Province" value="{{ old('Province') }}">

        @error('Province')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="PostalCode">Postal Code</label>
        <input id="PostalCode" type="text" name="PostalCode" value="{{ old('PostalCode') }}">

        @error('PostalCode')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="password">Password</label>
        <input id="password" type="password" name="password">
        @error('password')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div>
        <label for="password_confirmation">Confirm Password</label>
        <input id="password_confirmation" type="password" name="password_confirmation">
        @error('password_confirmation')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>
    

    <div>
        <label for="role">Role</label>
        <input id="role" type="text" name="role">
        @error('role')
        <p class="text-red-500 text-xs mt-1">{{$message}}</p>
    @enderror
    </div>

    <div class="mb-6">
        <button
            type="submit"
            class="bg-laravel text-white rounded py-2 px-4 hover:bg-black"
        >
            Sign Up
        </button>
    </div>
</form>


@endsection
