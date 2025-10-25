<?php

namespace App\Listeners;

use App\Events\MemberRegistered;
use App\Models\User;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NotifyAdminForMembershipRequest
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(MemberRegistered $event): void
    {
        $admin = User::where('name', 'SuperAdmin')->first();

        $admin->notify(new AdminNewUserPending($event->user));

    }
}
