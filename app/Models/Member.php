<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Member extends Model
{
    use HasFactory;
    protected $fillable = [
        'user_id',
        'keycloak_id',
        'status',
        'nature',
        'group_id',
        'lastname',
        'firstname',
        'email',
        'company',
        'date_of_birth',
        'address',
        'zipcode',
        'city',
        'country',
        'phone1',
        'phone2',
        'public_membership'
    ];

    public static function getAttributeLabel(string $attribute): string
    {
        return __("members.fields.$attribute");
    }

    public function getFullNameAttribute(): string
    {
        return "{$this->firstname} {$this->lastname}";
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function group(): BelongsTo
    {
        return $this->belongsTo(MemberGroup::class);
    }

    public function memberships(): HasMany
    {
        return $this->hasMany(Membership::class);
    }
}
