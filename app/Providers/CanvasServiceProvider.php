<?php

/*
 * feat: style ci config
 */

namespace App\Providers;

use Canvas\Canvas;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Support\ServiceProvider;

class CanvasServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        // Canvas::night();
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->booted(function () {
            $schedule = resolve(Schedule::class);
            $schedule->command('canvas:digest')
                ->weekly()
                ->sundays()
                ->at('13:00')
                ->when(function () {
                    return config('canvas.mail.enabled');
                });
        });
    }
}
