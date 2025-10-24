<?php

use App\Http\Controllers\Forms\ContactFormController;
use App\Http\Controllers\Forms\MembershipFormController;
use Illuminate\Support\Facades\Route;

Route::get('contact', [ContactFormController::class, 'create'])->name('contact');
Route::post('contact', [ContactFormController::class, 'store'])->name('contact.store');

Route::get('membership', [MembershipFormController::class, 'create'])->name('membership');
Route::post('membership', [MembershipFormController::class, 'store'])->name('membership.store');
