<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

/**
 * @property int $id
 * @property int $member_id
 * @property int|null $admin_id
 * @property int $package_id
 * @property string $start_date
 * @property string|null $end_date
 * @property string $status
 * @property string $amount
 * @property string $payment_status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property string|null $deleted_at
 * @property-read \App\Models\User|null $author
 * @property-read \App\Models\Member $member
 * @property-read \App\Models\Package $package
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Service> $services
 * @property-read int|null $services_count
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership query()
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereAdminId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereEndDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereMemberId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership wherePackageId($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership wherePaymentStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereStartDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder<static>|Membership whereUpdatedAt($value)
 * @mixin \Eloquent
 */
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
        return __("memberships.fields.$attribute");
    }

    public function member(): BelongsTo
    {
        return $this->belongsTo(Member::class);
    }

    public function author(): BelongsTo
    {
        return $this->belongsTo(User::class, 'admin_id');
    }

    public function package(): BelongsTo
    {
        return $this->belongsTo(Package::class);
    }

    public function services(): BelongsToMany
    {
        return $this->belongsToMany(Service::class, 'services_memberships', 'membership_id', 'service_id');
    }

}
