<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Package extends Model
{
    protected $fillable = [
        'identifier',
        'name',
        'description',
        'is_active',
    ];

    public static function getAttributeLabel(string $attribute): string
    {
        return __('packages.fields.' . $attribute);
    }

}
