<?php

namespace App\Http\Controllers;

use App\Models\DanhMuc;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class DanhMucController extends Controller
{
    public function index()
    {
        // Lấy tất cả danh mục từ database
        // Bạn có thể thêm ->orderBy('id', 'desc') nếu muốn danh mục mới lên đầu
        $danhMucs = DanhMuc::all();


        // Trả về dữ liệu JSON kèm status 200 (OK)
        return response()->json($danhMucs, 200);
    }
}
