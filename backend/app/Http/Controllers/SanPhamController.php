<?php

namespace App\Http\Controllers;

use App\Models\SanPham;
use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class SanPhamController extends Controller
{
    public function index()
    {
        // 1. Lấy tất cả sản phẩm
        $products = SanPham::all();

        // 2. Trả về dữ liệu dưới dạng JSON
        return response()->json($products);
    }
    public function show($id)
    {
        $product = SanPham::find($id);
        if ($product) {
            return response()->json($product);
        }
        return response()->json(['message' => 'Không tìm thấy'], 404);
    }
}
