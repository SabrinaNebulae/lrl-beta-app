<?php

namespace App\Listeners;

use App\Events\MemberRegistered;
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
        //
    }
}
