<?php

use App\Http\Controllers\AdManager;
use App\Http\Controllers\AdManagment;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\FundManagement;
use App\Http\Controllers\FundManagment;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [Dashboard::class,'index'])->name('dashboard');
    Route::get('/fund-managment',[FundManagment::class,'index'])->name('fund.page');
    Route::post('/update-fund',[FundManagment::class,'store'])->name('fund.update');
    Route::get('/ad-manager',[AdManager::class,'index'])->name('ad.manager');
    Route::post('/new-ad-manager',[AdManager::class,'create'])->name('ad.managerAdd');
    Route::post('/update-ad-manager',[AdManager::class,'update'])->name('ad.managerUpdate');
});



require __DIR__.'/auth.php';
