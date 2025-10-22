<?php

namespace App\Filament\Resources\Memberships\Pages;

use App\Filament\Resources\Memberships\MembershipResource;
use App\Models\Membership;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;
use Illuminate\Contracts\Support\Htmlable;

class EditMembership extends EditRecord
{
    protected static string $resource = MembershipResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    /**
     * @property Membership $record
     * @return string|Htmlable
     *
     */
    public function getTitle(): string | Htmlable
    {
        return Membership::getAttributeLabel('membership') . ' #' . $this->record->id;
    }
}
