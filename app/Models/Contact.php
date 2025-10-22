<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        'id',
        'firstname',
        'lastname',
        'email',
        'address',
        'subject',
        'message',
    ];

    public static function getAttributeLabel(string $attribute): string
    {
        return __("contacts.fields.$attribute");
    }
    public function getFullNameAttribute(): string
    {
        return "{$this->firstname} {$this->lastname}";
    }
}
