<?php

namespace App\Filament\Resources\Memberships\Schemas;

use App\Models\Membership;
use App\Models\Service;
use App\Models\User;
use Filament\Actions\Action;
use Filament\Support\Facades\FilamentView;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\Placeholder;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Infolists\Components\TextEntry;
use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class MembershipForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema
            ->components ([
                Grid::make()
                    ->schema([
                        Grid::make(1)
                            ->schema([
                                Section::make('Adhérent')
                                    ->headerActions([
                                        Action::make('view-profile')
                                            ->icon('heroicon-o-user')
                                            ->label('Voir le profil')
                                            ->action(function (Membership $record) {
                                                return redirect()->route('filament.admin.resources.members.edit', ['record' => $record->member_id]);
                                            }),
                                    ])
                                    ->schema([
                                        TextEntry::make('member.full_name')
                                            ->label(Membership::getAttributeLabel('member_id')),
                                        TextEntry::make('author.name')
                                            ->label(Membership::getAttributeLabel('admin_id')),
                                        TextEntry::make('created_at')
                                            ->label(Membership::getAttributeLabel('created_at'))
                                    ])
                                    ->columns(2),

                                Section::make('Informations de transaction')
                                    ->schema([
                                        Select::make('package_id')
                                            ->label(Membership::getAttributeLabel('package_id'))
                                            ->placeholder(Membership::getAttributeLabel('select_package'))
                                            ->relationship('package', 'name')
                                            ->default(null),
                                        Select::make('payment_status')
                                            ->label(Membership::getAttributeLabel('payment_status'))
                                            ->options(['paid' => Membership::getAttributeLabel('paid'), 'unpaid' => Membership::getAttributeLabel('unpaid'), 'partial' => Membership::getAttributeLabel('partial')])
                                            ->default('unpaid')
                                            ->required(),
                                        TextInput::make('amount')
                                            ->label(Membership::getAttributeLabel('amount'))
                                            ->required()
                                            ->numeric('decimal')
                                            ->default(0.0),
                                    ])
                                    ->columns(2),

                                Section::make('Services')
                                    ->schema(function () {
                                        return Service::all()->map(function ($service) {
                                            return Toggle::make("services_sync.{$service->id}")
                                                ->label($service->name)
                                                ->default(false)
                                                ->helperText("Active ou désactive le service {$service->name}");
                                        })->toArray();
                                    })

                            ])
                            ->columnSpan(3),
                        Grid::make(1)
                            ->schema([
                                Section::make('Statut')
                                    ->schema([
                                        Select::make('status')
                                            ->label(Membership::getAttributeLabel('status'))
                                            ->options(['active' => Membership::getAttributeLabel('active'), 'expired' => Membership::getAttributeLabel('expired'), 'pending' => Membership::getAttributeLabel('pending')])
                                            ->default('pending')
                                            ->required(),
                                        DatePicker::make('start_date')
                                            ->label(Membership::getAttributeLabel('start_date'))
                                            ->required(),
                                        DatePicker::make('end_date')
                                            ->label(Membership::getAttributeLabel('end_date')),

                                    ])
                            ])
                            ->columnSpan(1),
                    ])
                    ->columns(4)
                    ->columnSpanFull()
            ]);
    }
}
