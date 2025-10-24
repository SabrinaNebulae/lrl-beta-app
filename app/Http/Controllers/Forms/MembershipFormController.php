<?php

namespace App\Http\Controllers\Forms;

use App\Http\Controllers\Controller;
use App\Http\Requests\Forms\MembershipRequest;
use App\Models\Member;
use App\Models\Membership;
use App\Models\Package;
use App\Services\MemberService;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MembershipFormController extends Controller
{
    public function __construct(protected MemberService $memberService) {}

    /**
     * Show the contact form page.
     */
    public function create()
    {
        return Inertia::render('forms/membership', [
            'plans' => Package::query()
                ->where('is_active', true)
                ->select('id', 'name', 'price', 'description')
                ->get()
        ]);
    }

    /**
     * Handle an incoming membership form request.
     *
     */
    public function store(MembershipRequest $request): RedirectResponse
    {
        $validated = $request->validated();

        try {
            $this->memberService->registerNewMember($validated);
        } catch (\Throwable $e) {
            \Log::error('Erreur lors de la création d’un membre', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'data'  => $validated,
            ]);

            return redirect()
                ->route('membership')
                ->with('error', __('memberships.subscription.failed'));
        }

        return redirect()
            ->route('membership')
            ->with('success', __('memberships.subscription.success'));
    }
}
