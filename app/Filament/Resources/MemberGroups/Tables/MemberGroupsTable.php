<?php

namespace App\Filament\Resources\MemberGroups\Tables;

use App\Models\MemberGroup;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MemberGroupsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('name')
                    ->label(MemberGroup::getAttributeLabel('name'))
                    ->searchable(),
                TextColumn::make('description')
                    ->label(MemberGroup::getAttributeLabel('description'))
                    ->searchable(),
                TextColumn::make('created_at')
                    ->label(MemberGroup::getAttributeLabel('created_at'))
                    ->dateTime()
                    ->sortable()
                    ->searchable(),
                TextColumn::make('updated_at')
                    ->label(MemberGroup::getAttributeLabel('updated_at'))
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->recordActions([
                EditAction::make(),
            ])
            ->toolbarActions([
                BulkActionGroup::make([
                    DeleteBulkAction::make(),
                ]),
            ]);
    }
}
