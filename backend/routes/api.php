<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DanhMucController;
use App\Http\Controllers\DonHangController;
use App\Http\Controllers\SanPhamController;
use App\Models\SanPham;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AIController;
//Home
Route::get('/products', [SanPhamController::class, 'index']);

Route::get('/categories', [DanhMucController::class, 'index']);

//Dangky
Route::prefix('auth')->group(function () {
    Route::post('/register', [AuthController::class, 'register']);
    Route::post('/login', [AuthController::class, 'login']);
});
//Sanpham
Route::get('/products/{id}', [SanPhamController::class, 'show']);

//Donhang
Route::post('/orders', [DonHangController::class, 'datHang']);
Route::post('/chat', [AIController::class, 'chat']);
