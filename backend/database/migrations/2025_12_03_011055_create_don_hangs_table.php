<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('don_hangs', function (Blueprint $table) {
            $table->id();
            $table->integer('tai_khoan_id');
            $table->dateTime('ngay_dat_hang');
            $table->decimal('tong_tien', 10, 2);
            $table->integer('trang_thai'); // 0: chờ xử lý, 1: đã xác nhận, 2: đã giao hàng, 3: đã nhận hàng, 4: đã hủy
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('don_hangs');
    }
};
