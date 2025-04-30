<?php

use App\Http\Controllers\AdManager;
use App\Http\Controllers\AdManagment;
use App\Http\Controllers\Dashboard;
use App\Http\Controllers\FundManagement;
use App\Http\Controllers\FundManagment;
use App\Http\Controllers\Merchants;
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
    Route::get('/fund-management',[FundManagment::class,'index'])->name('fund.page');
    Route::post('/update-fund',[FundManagment::class,'store'])->name('fund.update');
    Route::get('/ad-manager',[AdManager::class,'index'])->name('ad.manager');
    Route::post('/new-ad-manager',[AdManager::class,'create'])->name('ad.managerAdd');
    Route::post('/update-ad-manager',[AdManager::class,'update'])->name('ad.managerUpdate');
    Route::get('/ad-manager/expired-soon',[AdManager::class,'expiredSoon'])->name('ad.manager.expiredSoon');
    Route::get('/ad-manager/well-life',[AdManager::class,'wellLife'])->name('ad.manager.wellLife');
    Route::get('/ad-manager/used',[AdManager::class,'used'])->name('ad.manager.used');
    Route::get('/ad-manager/unused',[AdManager::class,'unused'])->name('ad.manager.unused');
    Route::get('/merchant',[Merchants::class,'index'])->name('merchant.page');
    Route::post('/make-merchant',[Merchants::class,'store'])->name('add.merchant.page');


    Route::get('/user/{id}',[Merchants::class,'show'])->name('user.page');


});


Route::get('/scout-import', function () {
    \App\Models\MerchantModel::chunk(100, function ($merchants) {
        foreach ($merchants as $merchant) {
            $merchant->searchable(); // This manually indexes it
        }
    });
    return 'Merchant index created!';
});


require __DIR__.'/auth.php';
