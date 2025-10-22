<?php

namespace App\Filament\Resources\MemberGroups\Schemas;

use App\Models\MemberGroup;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Schema;

class MemberGroupForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components([
                TextInput::make('name')
                    ->label(MemberGroup::getAttributeLabel('name'))
                    ->required(),
                TextInput::make('description')
                    ->label(MemberGroup::getAttributeLabel('description'))
                    ->default(null),
            ]);
    }
}
