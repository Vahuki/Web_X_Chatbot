<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DonHang extends Model
{
    protected $table = 'don_hangs';

    protected $fillable = [
        'tai_khoan_id',
        'ngay_dat_hang',
        'tong_tien',
        'trang_thai', // 0: chờ xử lý, 1: đã xác nhận, 2: đã giao hàng, 3: đã nhận hàng, 4: đã hủy
    ];
}
