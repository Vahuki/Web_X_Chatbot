<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DonHang;
use App\Models\ChiTietDonHang;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class DonHangController extends Controller
{
    public function datHang(Request $request)
    {
        // 1. Validate dữ liệu gửi lên
        $validator = Validator::make($request->all(), [
            // 👇 SỬA LỖI Ở ĐÂY: Bảng là 'khach_hangs' chứ không phải 'tai_khoans'
            'tai_khoan_id' => 'required|exists:khach_hangs,id',
            'tong_tien' => 'required|numeric',
            'chi_tiet' => 'required|array',
            'chi_tiet.*.san_pham_id' => 'required|exists:san_phams,id',
            'chi_tiet.*.so_luong' => 'required|integer|min:1',
            'chi_tiet.*.gia' => 'required|numeric',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 'error', 'message' => $validator->errors()->first()], 422);
        }

        DB::beginTransaction();

        try {
            // 2. Tạo đơn hàng
            // Lưu ý: Đảm bảo trong Model DonHang bạn đã khai báo fillable 'tai_khoan_id'
            $donHang = DonHang::create([
                'tai_khoan_id' => $request->tai_khoan_id,
                'ngay_dat_hang' => now(),
                'tong_tien' => $request->tong_tien,
                'trang_thai' => 0, // 0: Chờ xử lý
            ]);

            // 3. Tạo chi tiết đơn hàng
            foreach ($request->chi_tiet as $item) {
                ChiTietDonHang::create([
                    'don_hang_id' => $donHang->id,
                    'san_pham_id' => $item['san_pham_id'],
                    'so_luong' => $item['so_luong'],
                    'gia' => $item['gia'],
                ]);
            }

            DB::commit();

            return response()->json([
                'status' => 'success',
                'message' => 'Đặt hàng thành công!',
                'don_hang_id' => $donHang->id
            ], 201);

        } catch (\Exception $e) {
            DB::rollBack();
            return response()->json(['status' => 'error', 'message' => 'Lỗi Server: ' . $e->getMessage()], 500);
        }
    }
}
