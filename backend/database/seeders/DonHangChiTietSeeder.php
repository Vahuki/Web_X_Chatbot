<?php

namespace Database\Seeders;

use Illuminate\Support\Facades\DB;
use Illuminate\Database\Seeder;

class DonHangChiTietSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $chiTietDonHangs = [
            [
                'don_hang_id' => 1,
                'san_pham_id' => 1,
                'so_luong' => 2,
                'gia' => 1500000,
            ],
            [
                'don_hang_id' => 1,
                'san_pham_id' => 3,
                'so_luong' => 1,
                'gia' => 800000,
            ],
            [
                'don_hang_id' => 2,
                'san_pham_id' => 2,
                'so_luong' => 1,
                'gia' => 2000000,
            ],
            [
                'don_hang_id' => 3,
                'san_pham_id' => 4,
                'so_luong' => 3,
                'gia' => 500000,
            ],
            [
                'don_hang_id' => 4,
                'san_pham_id' => 1,
                'so_luong' => 1,
                'gia' => 1500000,
            ],
            [
                'don_hang_id' => 4,
                'san_pham_id' => 5,
                'so_luong' => 2,
                'gia_ban' => 1200000,
            ],
        ];
        DB::table('chi_tiet_don_hangs')->truncate();
        DB::table('chi_tiet_don_hangs')->delete();
        DB::table('chi_tiet_don_hangs')->insert($chiTietDonHangs);
    }
}
