<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        // Define your gates here
        Gate::define('access-page', function ($user) {
            // Logic to determine if the user has access to a page
            return $user->Role === 'admin'; // Example, you can customize this logic
        });

        Gate::define('lawyer', function ($user) {
            return $user->Role === 'lawyer';
        });
    }
    
}
