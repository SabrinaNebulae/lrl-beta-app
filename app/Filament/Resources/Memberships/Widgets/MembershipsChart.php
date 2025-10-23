<?php

namespace App\Filament\Resources\Memberships\Widgets;

use App\Models\Membership;
use Filament\Widgets\ChartWidget;

class MembershipsChart extends ChartWidget
{
    protected ?string $heading = 'Adhésions';

    protected function getData(): array
    {
        $memberships = Membership::query()
            ->selectRaw('status, count(*) as total')
            ->groupBy('status')
            ->get();

        return [
            'datasets' => [
                [
                    'data' => $memberships->pluck('total')->toArray(),
                    'backgroundColor' => [
                        'rgb(54, 162, 235)',
                        'rgb(255, 99, 132)',
                        'rgb(255, 205, 86)',
                    ],
                ],
            ],
            'labels' => $memberships->pluck('status')->toArray(),
        ];
    }

    protected function getType(): string
    {
        return 'doughnut';
    }
}
