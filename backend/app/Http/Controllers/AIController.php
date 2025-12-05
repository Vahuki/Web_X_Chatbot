<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\SanPham;
use Illuminate\Routing\Controller;

class AIController extends Controller
{
    public function chat(Request $request)
    {
        $userMessage = $request->input('message');

        if (!$userMessage) {
            return response()->json(["error" => "Missing user message"], 400);
        }

        // 1. Lấy API KEY
        $apiKey = env("GEMINI_API_KEY");
        if (!$apiKey) {
            return response()->json(["error" => "Missing GEMINI_API_KEY"], 500);
        }

        // 2. Lấy sản phẩm trực tiếp bằng Model
        // (Không gọi API để tránh timeout)
        $products = SanPham::select('ten_san_pham',
        'mo_ta',
        'gia',
        'hinh_anh',
        // 'size',
        'mau_sac',
        'so_luong',
        'danh_muc_id',)
                            ->get()
                            ->toArray();

        // 3. Gọi Gemini API
        $url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-pro:generateContent?key={$apiKey}";

        $response = Http::withHeaders([
            "Content-Type" => "application/json"
        ])->post($url, [
            "contents" => [
                [
                    "role" => "model",
                    "parts" => [
                        [
                            "text" =>
"Bạn là AI tư vấn bán hàng của cửa hàng thời trang cao cấp X-Luxury.

Dưới đây là danh sách sản phẩm hiện có:

" . json_encode($products, JSON_UNESCAPED_UNICODE) . "

Nhiệm vụ:
- Chào khách lịch sự.
- Tư vấn đúng theo dữ liệu sản phẩm.
- Khi khách hỏi 'có những sản phẩm gì', liệt kê dựa trên products.
- Không tiết lộ bạn là AI hay hệ thống máy tính.
- Trả lời ngắn gọn, chuyên nghiệp."
                        ]
                    ]
                ],
                [
                    "role" => "user",
                    "parts" => [
                        ["text" => $userMessage]
                    ]
                ]
            ]
        ]);

        if ($response->failed()) {
            return response()->json([
                "error" => "Gemini API request failed",
                "details" => $response->body()
            ], 500);
        }

        return $response->json();
    }
}
