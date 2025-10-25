<?php

namespace App\Services;

use App\Models\Contact;

class ContactService
{
    public function __construct()
    {
        //
    }

    public function registerNewContactRequest(array $data): Contact
    {
        $contact = new Contact();
        $contact->fill($data);
        $contact->save();

        // Envoyer un email à l'administrateur

        return $contact;

    }
}
