<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class NhanVienSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $nhanViens = [
            [
                'ten_nhan_vien' => 'Phan Văn Nhật',
                'email' => 'admin@gmail.com',
                'password' => Hash::make('123456'),
                'so_dien_thoai' => '0123456789',
                'dia_chi' => '123 Đường A, Quận B, TP. C',
                'chuc_vu' => 1,
            ],
            [
                'ten_nhan_vien' => 'Nguyễn Thị Lan',
                'email' => 'staff@gmail.com',
                'password' => Hash::make('123456'),
                'so_dien_thoai' => '0987654321',
                'dia_chi' => '456 Đường X, Quận Y, TP. Z',
                'chuc_vu' => 2,
            ]
        ];
        DB::table('nhan_Viens')->truncate();
        DB::table('nhan_viens')->delete();
        DB::table('nhan_viens')->insert($nhanViens);
    }
}
