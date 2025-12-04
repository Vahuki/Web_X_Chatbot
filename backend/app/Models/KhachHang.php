<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable; // Nên kế thừa cái này để sau này đăng nhập được
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens; // Nếu dùng token API

class KhachHang extends Model
{
    use HasFactory, HasApiTokens, Notifiable;

    // 1. Khai báo đúng tên bảng (Khớp với Migration)
    protected $table = 'khach_hangs';

    // 2. Khai báo đúng tên cột được phép lưu (Khớp với Controller)
    protected $fillable = [
        'ho_va_ten',      // <--- QUAN TRỌNG: Phải là ho_va_ten
        'email',
        'password',
        'so_dien_thoai',
        'dia_chi',
        'is_active',      // Nếu migration có
        'vai_tro'         // Nếu migration có
    ];

    // 3. Giấu mật khẩu khi trả về JSON
    protected $hidden = [
        'password',
        'remember_token',
    ];
}
