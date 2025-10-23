<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

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

    public function memberships() : BelongsToMany
    {
        return $this->belongsToMany(Membership::class, 'services_memberships', 'service_id', 'membership_id');
    }
}
