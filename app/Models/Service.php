<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Service extends Model
{
    protected $fillable = [
        'identifier',
        'name',
        'description',
        'url',
        'icon',
    ];

    public static function getAttributeLabel(string $attribute): string
    {
        return __('services.fields.' . $attribute);
    }
}
