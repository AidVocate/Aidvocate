<!-- resources/views/auth/register.blade.php -->

<form method="POST" action="/users">
    @csrf

    <div>
        <label for="username">UserName</label>
        <input id="username" type="text" name="username" value="{{ old('username') }}">

        @error('username')
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
