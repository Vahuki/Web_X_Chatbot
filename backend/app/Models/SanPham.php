<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SanPham extends Model
{
    protected $table = 'san_phams';

    protected $fillable = [
        'ten_san_pham',
        'mo_ta',
        'gia',
        'hinh_anh',
        'size',
        'mau_sac',
        'so_luong',
        'danh_muc_id',
    ];
}
