<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\KhachHang; // Import Model TaiKhoan
use App\Models\NhanVien;
use Illuminate\Routing\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        // 1. Validate dữ liệu đầu vào
        $validator = Validator::make($request->all(), [
            'ho_va_ten' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:khach_hangs', // Kiểm tra trùng email trong bảng tai_khoans
            'password' => 'required|string|min:6',
            'so_dien_thoai' => 'required|string|max:15',
            'dia_chi' => 'nullable|string'
        ], [
            // Thông báo lỗi tùy chỉnh (Tiếng Việt)
            'email.unique' => 'Email này đã được sử dụng.',
            'password.min' => 'Mật khẩu phải có ít nhất 6 ký tự.',
            'required' => 'Trường :attribute không được để trống.'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => $validator->errors()->first() // Lấy lỗi đầu tiên để hiển thị cho gọn
            ], 422);
        }

        try {
            // 2. Tạo tài khoản mới
            $user = KhachHang::create([
                'ho_va_ten' => $request->ho_va_ten,
                'email' => $request->email,
                'password' => Hash::make($request->password), // Mã hóa mật khẩu
                'so_dien_thoai' => $request->so_dien_thoai,
                'dia_chi' => $request->dia_chi,
            ]);

            // 3. Trả về thành công
            return response()->json([
                'status' => 'success',
                'message' => 'Đăng ký tài khoản thành công!',
                'data' => $user
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Lỗi Server: ' . $e->getMessage()
            ], 500);
        }
    }
    public function login(Request $request)
    {
        // 1. Validate dữ liệu
        $validator = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required|string',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => 'error',
                'message' => 'Vui lòng nhập đầy đủ Email và Mật khẩu.'
            ], 422);
        }

        // 2. Kiểm tra trong bảng Khách Hàng trước
        $khachHang = KhachHang::where('email', $request->email)->first();

        if ($khachHang && Hash::check($request->password, $khachHang->password)) {
            // Khách hàng -> Role 0
            // Sử dụng setAttribute để đảm bảo biến này được thêm vào JSON trả về
            $khachHang->setAttribute('vai_tro', 0);

            return response()->json([
                'status' => 'success',
                'message' => 'Đăng nhập thành công!',
                'user' => $khachHang
            ], 200);
        }

        // 3. Nếu không phải khách hàng, kiểm tra bảng Nhân Viên
        $nhanVien = NhanVien::where('email', $request->email)->first();

        if ($nhanVien && Hash::check($request->password, $nhanVien->password)) {

            // 👇 SỬA LỖI Ở ĐÂY 👇
            // Nếu là quản lý -> 1 (Admin)
            // Nếu là nhân viên -> 2 (Staff) -- (Lúc trước bạn để là 0 nên bị trùng với khách)
            $roleCode = ($nhanVien->chuc_vu === 1) ? 1 : 2;

            $nhanVien->setAttribute('vai_tro', $roleCode);

            return response()->json([
                'status' => 'success',
                'message' => 'Xin chào Admin/Staff!',
                'user' => $nhanVien
            ], 200);
        }

        // 4. Nếu tìm cả 2 bảng đều không khớp
        return response()->json([
            'status' => 'error',
            'message' => 'Tài khoản hoặc mật khẩu không chính xác!'
        ], 401);
    }
}
