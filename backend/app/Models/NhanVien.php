<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class NhanVien extends Model
{
    protected $table = 'nhan_viens';

    protected $fillable = [
        'ten_nhan_vien',
        'email',
        'password',
        'so_dien_thoai',
        'dia_chi',
        'chuc_vu',
    ];
}
