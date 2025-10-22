<?php

namespace App\Http\Controllers\Forms;

use App\Http\Controllers\Controller;
use App\Models\Member;
use App\Models\Membership;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembershipFormController extends Controller
{
    /**
     * Show the contact form page.
     */
    public function create()
    {
        return Inertia::render('forms/membership');

    }

    /**
     * Handle an incoming membership form request.
     *
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'lastname' => 'required|string|max:255',
            'firstname' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'required|string|max:255',
            'date_of_birth' => 'required|date',
            'address' => 'required|string|max:255',
            'zipcode' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'phone1' => 'required|string|max:255',
            // Captcha
        ]);

        // New Member with status pending

        $member = new Member();
        $member->status = 'pending';
        $member->nature = 'physical';
        //$member->group_id = '2';
        $member->lastname = $request->lastname;
        $member->firstname = $request->firstname;
        $member->email = $request->email;
        $member->company = $request->company ?? null;
        $member->date_of_birth = Carbon::parse($request->date_of_birth)->format('Y-m-d H:i:s') ?? null;
        $member->address = $request->address;
        $member->zipcode = $request->zipcode;
        $member->city = $request->city;
        $member->country = 'FR';
        $member->phone1 = $request->phone1;

        $member->save();

        $membership = new Membership();
        $membership->member()->associate($member);
        $membership->save();



        // Event for sending notification to admin
        // Event for sending notification to member

        return redirect()->route('membership')->with('success', __('Your message has been sent successfully!'));
    }
}
