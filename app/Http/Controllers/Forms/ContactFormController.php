<?php

namespace App\Http\Controllers\Forms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Forms\ContactRequest;
use App\Services\ContactService;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;

class ContactFormController extends Controller
{
    public function __construct(protected ContactService $contactService) {}
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
        try {
            $this->contactService->registerNewContactRequest($validated);
        } catch (\Throwable $e) {
            \Log::error('Erreur lors de la création d\'un contact', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'data'  => $validated,
            ]);

            return to_route('contact')->with('error', __('contacts.responses.error'));
        }

        return to_route('contact')->with('success', __('contacts.responses.success'));
    }

}
