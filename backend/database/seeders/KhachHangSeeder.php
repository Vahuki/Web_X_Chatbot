<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class KhachHangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $password = '123456';
        $khachHangs = [
            [
                'ten_khach_hang' => 'Trần Văn A',
                'email' => 'tranvana@gmail.com',
                'password' => 'password123',
                'so_dien_thoai' => $password,
                'dia_chi' => '789 Đường M, Quận N, TP. P',
            ],
            [
                'ho_va_ten' => 'Nguyễn Thị Lan',
                'email' => 'lannguyen@gmail.com',
                'password' => $password,
                'so_dien_thoai' => '0905123456',
                'dia_chi' => '12 Lê Duẩn, Hải Châu, Đà Nẵng',
            ],
            [
                'ho_va_ten' => 'Lê Minh Tuấn',
                'email' => 'minhtuan99@gmail.com',
                'password' => $password,
                'so_dien_thoai' => '0934567890',
                'dia_chi' => '45 Nguyễn Huệ, Quận 1, TP. HCM',
            ],
            [
                'ho_va_ten' => 'Phạm Hoàng Yến',
                'email' => 'hoangyen_pham@outlook.com',
                'password' => $password,
                'so_dien_thoai' => '0918123987',
                'dia_chi' => '88 Cầu Giấy, Hà Nội',
            ],
            [
                'ho_va_ten' => 'Vũ Đức Đam',
                'email' => 'vuducdam@yahoo.com',
                'password' => $password,
                'so_dien_thoai' => '0977654321',
                'dia_chi' => 'Khu Công nghiệp VSIP, Bình Dương',
            ],
            [
                'ho_va_ten' => 'Đỗ Mỹ Linh',
                'email' => 'linhdomy@gmail.com',
                'password' => $password,
                'so_dien_thoai' => '0868999888',
                'dia_chi' => '202 Trần Hưng Đạo, Ninh Kiều, Cần Thơ',
            ],
            [
                'ho_va_ten' => 'Hoàng Văn Thụ',
                'email' => 'thuvh_it@company.com',
                'password' => $password,
                'so_dien_thoai' => '0945111222',
                'dia_chi' => 'Số 5, Đường Láng, Đống Đa, Hà Nội',
            ],
            [
                'ho_va_ten' => 'Ngô Thanh Vân',
                'email' => 'thanhvan.ngo@gmail.com',
                'password' => $password,
                'so_dien_thoai' => '0988777666',
                'dia_chi' => 'Chung cư Masteri, Thảo Điền, Quận 2, TP. HCM',
            ],
            [
                'ho_va_ten' => 'Bùi Tiến Dũng',
                'email' => 'tiendung.bui@gmail.com',
                'password' => $password,
                'so_dien_thoai' => '0966555444',
                'dia_chi' => 'Thôn 3, Xã Hoằng Đại, Thanh Hóa',
            ],
            [
                'ho_va_ten' => 'Cao Thái Sơn',
                'email' => 'sontungmtp_fake@gmail.com',
                'password' => $password,
                'so_dien_thoai' => '0333444555',
                'dia_chi' => '101 Pasteur, Quận 3, TP. HCM',
            ],
        ];
        DB::table('khach_hangs')->truncate();
        DB::table('khach_hangs')->delete();
        DB::table('khach_hangs')->insert($khachHangs);
    }
}
