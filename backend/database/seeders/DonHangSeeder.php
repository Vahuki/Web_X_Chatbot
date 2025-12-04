<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class DonHangSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $donHangs = [
            [
                'tai_khoan_id' => 1,
                'ngay_dat_hang' => '2024-01-15 10:30:00',
                'tong_tien' => 1580000,
                'trang_thai' => 1,
            ],
            [
                'tai_khoan_id' => 2,
                'ngay_dat_hang' => '2024-02-20 14:45:00',
                'tong_tien' => 2000000,
                'trang_thai' => 0,
            ],
            [
                'tai_khoan_id' => 3,
                'ngay_dat_hang' => '2024-03-05 09:15:00',
                'tong_tien' => 500000,
                'trang_thai' => 1,
            ],
            [
                'tai_khoan_id' => 4,
                'ngay_dat_hang' => '2024-04-12 16:00:00',
                'tong_tien' => 2700000,
                'trang_thai' => 0,
            ],
        ];
        DB::table('don_hangs')->truncate();
        DB::table('don_hangs')->delete();
        DB::table('don_hangs')->insert($donHangs);
    }
}
