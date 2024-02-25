<!-- resources/views/auth/login.blade.php -->

<form method="POST" action="{{ route('login') }}">
    @csrf

    <div>
        <label for="username">{{ __('Username') }}</label>
        <input id="username" type="text" name="username" value="{{ old('username') }}" required autofocus>
    </div>

    <div>
        <label for="password">{{ __('Password') }}</label>
        <input id="password" type="password" name="password" required>
    </div>

    <div>
        <button type="submit">
            {{ __('Login') }}
        </button>
    </div>
</form>
@if ($errors->any())
    <div>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

