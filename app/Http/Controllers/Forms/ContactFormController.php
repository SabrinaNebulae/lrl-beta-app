<?php

namespace App\Http\Controllers\Forms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Forms\ContactRequest;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactFormController extends Controller
{
    /**
     * Show the contact form page.
     */
    public function create()
    {
        return Inertia::render('forms/contact');
    }

    /**
     * Handle an incoming contact form submission.
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(ContactRequest $request): RedirectResponse
    {
        $validated = $request->validated();
        $contact = new Contact();
        $contact->fill($validated);
        $contact->save();

        return to_route('contact')->with('success', __('contacts.responses.success'));
    }

}
