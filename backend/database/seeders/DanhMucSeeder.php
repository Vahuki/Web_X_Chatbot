<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DanhMucSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $danhMucs = [
            [
                'ten_danh_muc' => 'Giày Cao Gót',
            ],
            [
                'ten_danh_muc' => 'Giày Sneaker Luxury',
            ],
            [
                'ten_danh_muc' => 'Giày Loafer & Moccasin',
            ],
            [
                'ten_danh_muc' => 'Túi Xách Tay',
            ],
            [
                'ten_danh_muc' => 'Túi Đeo Chéo',
            ],
        ];
        DB::table('danh_mucs')->truncate();
        DB::table('danh_mucs')->delete();
        DB::table('danh_mucs')->insert($danhMucs);
    }
}
