<?php

namespace App\Listeners;

use App\Events\MemberValidated;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class NotifiyMemberOfValidation
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
    public function handle(MemberValidated $event): void
    {
        //
    }
}
