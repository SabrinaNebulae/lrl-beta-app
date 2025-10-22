<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Membership extends Model
{
    protected $fillable = [
        'member_id',
        'admin_id',
        'package_id',
        'start_date',
        'end_date',
        'status',
        'amount',
        'payment_status',
    ];


    public static function getAttributeLabel(string $attribute): string
    {
        return __("membership.fields.$attribute");
    }

    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function package(): HasOne
    {
        return $this->hasOne(Package::class);
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, 'services_memberships', 'membership_id', 'service_id');
    }

}
