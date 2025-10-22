<?php

namespace App\Filament\Resources\Memberships\Tables;

use App\Models\Membership;
use Filament\Actions\BulkActionGroup;
use Filament\Actions\DeleteBulkAction;
use Filament\Actions\EditAction;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class MembershipsTable
{
    public static function configure(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('id')
                ->label('id')
                ->sortable(),
                TextColumn::make('member.full_name')
                    ->label(Membership::getAttributeLabel('member_id'))
                    ->sortable(),
                TextColumn::make('author.name')
                    ->label(Membership::getAttributeLabel('admin_id'))
                    ->numeric()
                    ->sortable(),
                TextColumn::make('start_date')
                    ->label(Membership::getAttributeLabel('start_date'))
                    ->date()
                    ->sortable(),
                TextColumn::make('end_date')
                    ->label(Membership::getAttributeLabel('end_date'))
                    ->date()
                    ->sortable(),
                TextColumn::make('status')
                    ->label(Membership::getAttributeLabel('status'))
                    ->formatStateUsing(fn (string $state) => Membership::getAttributeLabel($state))
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'pending' => 'warning',
                        'active' => 'success',
                        'expired' => 'danger',
                    }),
                TextColumn::make('amount')
                    ->label(Membership::getAttributeLabel('amount'))
                    ->money('euro')
                    ->sortable(),
                TextColumn::make('payment_status')
                    ->label(Membership::getAttributeLabel('payment_status'))
                    ->formatStateUsing(fn (string $state) => Membership::getAttributeLabel($state))
                    ->badge()
                    ->color(fn (string $state): string => match ($state) {
                        'partial' => 'warning',
                        'paid' => 'success',
                        'unpaid' => 'danger',
                    }),
                TextColumn::make('created_at')
                    ->label(Membership::getAttributeLabel('created_at'))
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('updated_at')
                    ->label(Membership::getAttributeLabel('updated_at'))
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                TextColumn::make('deleted_at')
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
