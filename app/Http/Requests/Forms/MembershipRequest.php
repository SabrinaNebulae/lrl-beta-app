<?php

namespace App\Http\Requests\Forms;

use Illuminate\Foundation\Http\FormRequest;

class MembershipRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            // Member
            'lastname' => 'required|string|max:255',
            'firstname' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'company' => 'string|max:255',
            'address' => 'required|string|max:255',
            'zipcode' => 'required|string|max:255',
            'city' => 'required|string|max:255',
            'phone1' => 'required|string|max:255',

            // Membership
            'package' => 'required|string|max:255',
            'amount' => 'required|string|max:255',
        ];
    }
}
