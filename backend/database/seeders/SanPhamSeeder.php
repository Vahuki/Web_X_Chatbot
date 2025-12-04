<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SanPhamSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $sanPham = [
            [
                'ten_san_pham' => 'Giày Cao Gót Nữ Aretha Ankle‑Strap Stiletto ',
                'mo_ta' => 'Giày cao gót mũi nhọn, gót nhọn ~8.8 cm, chất liệu da bóng (patent leather), quai ôm cổ chân – thanh lịch & sang trọng, phù hợp đi tiệc hoặc công sở.',
                'gia' => 2650000,
                'hinh_anh' => 'https://www.charleskeith.vn/dw/image/v2/BCWJ_PRD/on/demandware.static/-/Sites-vn-products/default/dw6f151978/images/hi-res/2025-L6-SL1-60280487-J5-1.jpg?sw=756&sh=1008',
                'mau_sac' => 'Đen',
                'so_luong' => 30,
                'danh_muc_id' => 1
            ],
            [
                'ten_san_pham' => 'Giày Cao Gót Nữ Pointed‑Toe Stiletto',
                'mo_ta' => 'Giày cao gót mũi nhọn, gót cao khoảng 7 cm — kiểu dáng basic dễ phối đồ, phù hợp cả công sở và đi chơi.',
                'gia' => 499000,
                'hinh_anh' => 'https://tse2.mm.bing.net/th/id/OIP.Yuf6BJShteSZSNs7KkgnbwHaJ4?pid=Api&P=0&h=220',
                'mau_sac' => 'Đen',
                'so_luong' => 45,
                'danh_muc_id' => 1
            ],
            [
                'ten_san_pham' => 'Giày Cao Gót Nữ Stiletto Mũi Nhọn Satin ',
                'mo_ta' => 'Giày cao gót đẹp với mũi nhọn, gót cao — phong cách nữ tính, phù hợp tiệc hoặc đi gặp gỡ sang trọng.',
                'gia' => 750000,
                'hinh_anh' => 'https://tse3.mm.bing.net/th/id/OIP.D7mgiIjetXis3XAgUveP0wHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Trắng',
                'so_luong' => 25,
                'danh_muc_id' => 1
            ],
            [
                'ten_san_pham' => 'Giày Cao Gót Nữ Block/Chunky Heel Mũi Vuông',
                'mo_ta' => 'Giày cao gót đế vuông, mũi vuông — đi lại thoải mái hơn, vẫn giữ được vẻ sang trọng, thích hợp dùng hàng ngày hay đi làm.',
                'gia' => 680000,
                'hinh_anh' => 'https://tse1.mm.bing.net/th/id/OIP.jD3UkQxNOoBHUZmgSzJ2mQHaKH?pid=Api&P=0&h=220',
                'mau_sac' => 'Be',
                'so_luong' => 40,
                'danh_muc_id' => 1
            ],
            [
                'ten_san_pham' => 'Giày Cao Gót Nữ Ankle‑Strap Gót Nhọn Màu Đỏ Ruby',
                'mo_ta' => 'Giày cao gót với quai ôm cổ chân, gót nhọn 7–9 cm, màu đỏ nổi bật — lý tưởng cho các sự kiện, tiệc tùng hoặc buổi hẹn hò.',
                'gia' => 820000,
                'hinh_anh' => 'https://tse2.mm.bing.net/th/id/OIP.IUeYnb93muMo9LTn4trGTQHaD3?pid=Api&P=0&h=220',
                'mau_sac' => 'Đỏ Ruby',
                'so_luong' => 35,
                'danh_muc_id' => 1
            ],
            [
                'ten_san_pham' => 'Luxury Sneaker Da Bóng',
                'mo_ta' => 'Sneaker cao cấp với phần upper làm từ da bóng thời thượng, đế cao su bản lớn êm chân — phù hợp cả đi phố và phối đồ thời trang sang trọng.',
                'gia' => 2350000,
                'hinh_anh' => 'https://tse1.mm.bing.net/th/id/OIP.Bq_TCzLpIDhjuT-Yq9FgHQHaJ4?pid=Api&P=0&h=220',
                'mau_sac' => 'Đen',
                'so_luong' => 20,
                'danh_muc_id' => 2
            ],
            [
                'ten_san_pham' => 'Sneaker Luxury Thấp Cổ ',
                'mo_ta' => 'Sneaker low‑top cao cấp phối da & vải, form ôm gọn chân, dễ phối quần jean hoặc dress — mang phong cách “casual luxe”.',
                'gia' => 2750000,
                'hinh_anh' => 'https://tse4.mm.bing.net/th/id/OIP.Y2Ue33KAlMeb09-Ww_oWDgHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Trắng',
                'so_luong' => 15,
                'danh_muc_id' => 2
            ],
            [
                'ten_san_pham' => 'Sneaker Designer ',
                'mo_ta' => 'Sneaker thiết kế thời trang, da phối vải, đế cao su bền, phù hợp phong cách streetwear sang trọng hoặc smart‑casual.',
                'gia' => 3200000,
                'hinh_anh' => 'https://tse3.mm.bing.net/th/id/OIP.AwJpQfOM6lk5vo08E6WoQwHaE7?pid=Api&P=0&h=220',
                'mau_sac' => 'Đỏ',
                'so_luong' => 10,
                'danh_muc_id' => 2
            ],
            [
                'ten_san_pham' => 'Sneaker Luxury Unisex ',
                'mo_ta' => 'Sneaker unisex với chất liệu da cao cấp, thiết kế tối giản, dễ phối đồ — phù hợp cả nam & nữ, phong cách hiện đại, sang trọng.',
                'gia' => 2990000,
                'hinh_anh' => 'https://tse4.mm.bing.net/th/id/OIP.DKgp4eptqPONknQjhcvYYwHaEr?pid=Api&P=0&h=220',
                'mau_sac' => 'Xám',
                'so_luong' => 18,
                'danh_muc_id' => 2
            ],
            [
                'ten_san_pham' => 'Sneaker Luxury Nữ',
                'mo_ta' => 'Sneaker đế cao su bản dày, phối da & vải cao cấp, phong cách “casual‑luxury”, phù hợp đi dạo phố hoặc phối outfit thời trang hàng ngày.',
                'gia' => 2600000,
                'hinh_anh' => 'https://tse1.mm.bing.net/th/id/OIP.CT_gUYsUla5Vxgi_OfzUCwHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Trắng hồng',
                'so_luong' => 12,
                'danh_muc_id' => 2
            ],
            [
                'ten_san_pham' => 'Túi Xách Tay Da Thật – Classic Tote',
                'mo_ta' => 'Túi tote nữ cao cấp, chất liệu da thật mềm mại, nhiều ngăn tiện dụng, phù hợp đi làm hoặc đi dạo phố.',
                'gia' => 3250000,
                'hinh_anh' => 'https://tse3.mm.bing.net/th/id/OIP.ctiA4fmdde5OClxt8EIDAQHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Nâu Café',
                'so_luong' => 15,
                'danh_muc_id' => 3
            ],
            [
                'ten_san_pham' => 'Túi Xách Tay Mini – Evening Bag',
                'mo_ta' => 'Túi mini thời trang, chất liệu da tổng hợp, quai xích sang trọng – lý tưởng đi dự tiệc hoặc hẹn hò.',
                'gia' => 1450000,
                'hinh_anh' => 'https://tse3.mm.bing.net/th/id/OIP.rAtWhTQY7BdV8QV649GHkAHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Đen',
                'so_luong' => 20,
                'danh_muc_id' => 3
            ],
            [
                'ten_san_pham' => 'Túi Xách Tay Crossbody – Casual Luxury',
                'mo_ta' => 'Túi crossbody nhỏ gọn, phối da & vải, dây đeo dài điều chỉnh được, phù hợp đi dạo phố, đi học hoặc đi chơi.',
                'gia' => 1950000,
                'hinh_anh' => 'https://tse1.mm.bing.net/th/id/OIP.EDQVH_P7X0Ke7PmHonsteQHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Đen',
                'so_luong' => 25,
                'danh_muc_id' => 3
            ],
            [
                'ten_san_pham' => 'Túi Xách Tay Satchel – Công Sở',
                'mo_ta' => 'Túi satchel da tổng hợp cao cấp, nhiều ngăn, quai cầm tay + dây đeo vai, phù hợp đi làm .',
                'gia' => 2750000,
                'hinh_anh' => 'https://tse4.mm.bing.net/th/id/OIP.Wj9XRUnlFI8fHzRRflvDKgHaIM?pid=Api&P=0&h=220',
                'mau_sac' => 'Hồng',
                'so_luong' => 18,
                'danh_muc_id' => 3
            ],
            [
                'ten_san_pham' => 'Túi Xách Tay  Hobo – Casual Everyday',
                'mo_ta' => 'Túi hobo da mềm, dáng bo tròn, quai dài dễ đeo vai, thiết kế thời trang tiện lợi, phù hợp dùng hàng ngày.',
                'gia' => 2100000,
                'hinh_anh' => 'https://tse3.mm.bing.net/th/id/OIP.u4pTTWXNTv9u7QKcOgd16wHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Xanh jean nhạt',
                'so_luong' => 12,
                'danh_muc_id' => 3
            ],
            [
                'ten_san_pham' => 'Túi Đeo Chéo Da Thật – Crossbody Classic',
                'mo_ta' => 'Túi đeo chéo nữ da thật, thiết kế nhỏ gọn, nhiều ngăn tiện lợi, phù hợp đi dạo phố, đi học hoặc đi làm.',
                'gia' => 1950000,
                'hinh_anh' => 'https://tse4.mm.bing.net/th/id/OIP.cH9nxU5tG4qa-gk6rPVvTwHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Nâu vàng nhạt',
                'so_luong' => 20,
                'danh_muc_id' => 4
            ],
            [
                'ten_san_pham' => 'Túi Đeo Chéo Mini – Evening Crossbody',
                'mo_ta' => 'Túi mini crossbody phong cách thời trang, quai xích sang trọng, lý tưởng đi tiệc hoặc hẹn hò.',
                'gia' => 1250000,
                'hinh_anh' => 'https://tse2.mm.bing.net/th/id/OIP.CCqQprqTuCYKP2YiUZeidwHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Đen',
                'so_luong' => 15,
                'danh_muc_id' => 4
            ],
            [
                'ten_san_pham' => 'Túi Đeo Chéo Unisex – Casual Luxury',
                'mo_ta' => 'Túi crossbody unisex phối da & vải, đeo chéo tiện dụng, phù hợp phong cách streetwear hoặc smart-casual cho cả nam và nữ.',
                'gia' => 2100000,
                'hinh_anh' => 'https://tse1.mm.bing.net/th/id/OIP.38Ylj7ODTfgY_m_k_AXIXgHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Đen',
                'so_luong' => 18,
                'danh_muc_id' => 4
            ],
            [
                'ten_san_pham' => 'Túi Đeo Chéo – Satchel Crossbody',
                'mo_ta' => 'Túi crossbody dạng satchel, da mềm cao cấp, nhiều ngăn, quai dài điều chỉnh được – phù hợp đi làm và đi chơi.',
                'gia' => 1750000,
                'hinh_anh' => 'https://tse3.mm.bing.net/th/id/OIP.m1XlLyb8vXjNdy3Ro7G5VgHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Hồng',
                'so_luong' => 22,
                'danh_muc_id' => 4
            ],
            [
                'ten_san_pham' => 'Túi Đeo Chéo Nữ Hobo – Everyday Crossbody',
                'mo_ta' => 'Túi hobo đeo chéo nữ da mềm, dáng bo tròn, tiện lợi khi đeo vai hoặc chéo ngực, phong cách trẻ trung, năng động.',
                'gia' => 1850000,
                'hinh_anh' => 'https://tse3.mm.bing.net/th/id/OIP.2yMwW1pXRKVVZm4nfXVGGgHaHa?pid=Api&P=0&h=220',
                'mau_sac' => 'Xanh navy',
                'so_luong' => 12,
                'danh_muc_id' => 4
            ]

        ];

        DB::table('san_phams')->truncate();
        DB::table('san_phams')->delete();
        DB::table('san_phams')->insert($sanPham);
    }
}
