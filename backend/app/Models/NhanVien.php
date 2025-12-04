<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhanVien extends Model
{
    protected $table = 'nhan_viens';

    protected $fillable = [
        'ho_va_ten',
        'email',
        'password',
        'so_dien_thoai',
        'dia_chi',
        'chuc_vu',  // 0: Nhân viên, 1: Quản lý
    ];
    protected $hidden = [
        'password',
    ];
}
