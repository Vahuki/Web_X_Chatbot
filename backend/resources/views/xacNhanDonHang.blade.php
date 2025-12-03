<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đơn Hàng Thành Công - DZCinemar</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f4f4f4;
            line-height: 1.6;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            background: linear-gradient(135deg, #1a1a2e, #16213e);
            padding: 30px 20px;
            text-align: center;
            color: white;
        }

        .logo {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 5px;
            color: #ffd700;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .tagline {
            font-size: 14px;
            color: #cccccc;
            margin: 0;
        }

        .content {
            padding: 40px 30px;
        }

        .success-badge {
            background-color: #27ae60;
            color: white;
            padding: 12px 25px;
            border-radius: 25px;
            display: inline-block;
            font-weight: bold;
            margin-bottom: 20px;
            font-size: 16px;
        }

        .order-info {
            background-color: #f8f9fa;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            border-left: 4px solid #ffd700;
        }

        .order-code {
            font-size: 24px;
            font-weight: bold;
            color: #1a1a2e;
            margin-bottom: 10px;
        }

        .order-date {
            color: #666;
            font-size: 14px;
        }

        h2 {
            color: #1a1a2e;
            font-size: 20px;
            margin-bottom: 15px;
            border-bottom: 2px solid #ffd700;
            padding-bottom: 5px;
        }

        .movie-info {
            background-color: #fff;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            margin: 15px 0;
        }

        .movie-title {
            font-size: 18px;
            font-weight: bold;
            color: #1a1a2e;
            margin-bottom: 10px;
        }

        .movie-details {
            color: #666;
            font-size: 14px;
        }

        .details-table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
            background-color: #fff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }

        .details-table th {
            background-color: #1a1a2e;
            color: white;
            padding: 15px;
            text-align: left;
            font-weight: bold;
        }

        .details-table td {
            padding: 12px 15px;
            border-bottom: 1px solid #e0e0e0;
        }

        .details-table tr:nth-child(even) {
            background-color: #f8f9fa;
        }

        .price {
            font-weight: bold;
            color: #27ae60;
        }

        .discount-section {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 8px;
            padding: 15px;
            margin: 15px 0;
        }

        .discount-code {
            font-weight: bold;
            color: #d35400;
        }

        .total-section {
            background-color: #1a1a2e;
            color: white;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
            text-align: center;
        }

        .total-amount {
            font-size: 28px;
            font-weight: bold;
            color: #ffd700;
            margin: 10px 0;
        }

        .payment-info {
            background-color: #e8f5e8;
            border: 1px solid #27ae60;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }

        .payment-method {
            font-weight: bold;
            color: #27ae60;
            margin-bottom: 10px;
        }

        .instructions {
            background-color: #e3f2fd;
            border: 1px solid #2196f3;
            border-radius: 8px;
            padding: 20px;
            margin: 20px 0;
        }

        .instructions h3 {
            color: #1976d2;
            margin-top: 0;
        }

        .instructions ul {
            margin: 10px 0;
            padding-left: 20px;
        }

        .instructions li {
            margin: 8px 0;
            color: #444;
        }

        .qr-section {
            text-align: center;
            background-color: #f8f9fa;
            padding: 25px;
            border-radius: 8px;
            margin: 20px 0;
        }

        .qr-code {
            width: 150px;
            height: 150px;
            border: 2px solid #1a1a2e;
            border-radius: 8px;
            margin: 15px auto;
            background-color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            color: #666;
        }

        .footer {
            background-color: #1a1a2e;
            color: #cccccc;
            padding: 30px 20px;
            text-align: center;
        }

        .footer-content {
            margin-bottom: 20px;
        }

        .footer-links {
            margin: 15px 0;
        }

        .footer-links a {
            color: #ffd700;
            text-decoration: none;
            margin: 0 15px;
        }

        .footer-links a:hover {
            text-decoration: underline;
        }

        .copyright {
            font-size: 12px;
            color: #999;
            margin-top: 20px;
        }

        .highlight {
            background-color: #fff3cd;
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: bold;
        }

        @media (max-width: 600px) {
            .container {
                width: 100% !important;
                margin: 0 !important;
            }

            .content {
                padding: 20px 15px !important;
            }

            .header {
                padding: 20px 15px !important;
            }

            .logo {
                font-size: 24px !important;
            }

            .details-table {
                font-size: 12px !important;
            }

            .details-table th,
            .details-table td {
                padding: 8px 10px !important;
            }

            .total-amount {
                font-size: 22px !important;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <!-- Header -->
        <div class="header">
            <div class="logo">🎬 DZCinemar</div>
            <p class="tagline">Trải nghiệm điện ảnh đỉnh cao</p>
        </div>

        <!-- Content -->
        <div class="content">
            <!-- Success Message -->
            <div style="text-align: center;">
                <span class="success-badge">✅ Đơn hàng thành công!</span>
            </div>

            <p style="font-size: 18px; color: #333; text-align: center; margin: 20px 0;">
                Chào <strong>{{ $data['ten_khach_hang'] }}</strong>,<br>
                Cảm ơn bạn đã lựa chọn DZCinemar! Đơn hàng của bạn đã được thanh toán thành công.
            </p>

            <!-- Order Information -->
            <div class="order-info">
                <div class="order-code">Mã đơn hàng: {{ $data['ma_don_hang'] }}</div>
                <div class="order-date">Thời gian giao dịch: {{ $data['thoi_gian_giao_dich'] }}</div>
            </div>

            <!-- Movie Information -->
            <h2>🎬 Thông tin phim</h2>
            <div class="movie-info">
                <div class="movie-title">{{ $data['ten_phim'] }}</div>
                <div class="movie-details">
                    <strong>Suất chiếu:</strong> {{ $data['suat_chieu'] }}<br>
                    <strong>Địa chỉ:</strong> 32 Xuân Diệu, phường Hải Châu, TP.Đà Nẵng
                </div>
            </div>

            <!-- Payment Information -->
            <div class="payment-info">
                <h3 style="margin-top: 0; color: #27ae60;">💳 Thông tin thanh toán</h3>
                <p><strong>Trạng thái:</strong> <span style="color: #27ae60;">Đã thanh toán thành công</span></p>
                <p><strong>Mã giao dịch:</strong> {{ $data['ma_giao_dich'] }}</p>
            </div>

            <!-- QR Code Section -->
            <div class="qr-section">
                <h3 style="color: #1a1a2e;">📱 Mã QR vé điện tử</h3>
                <p>Vui lòng xuất trình mã QR này tại quầy để nhận vé</p>
                <div class="qr-code">
                    <div style="text-align: center;">
                        <div style="width: 100%; height: 100%;">
                            <img alt="QR Code"
                                src="https://barcode.tec-it.com/barcode.ashx?data={{ urlencode($data['link_qr_code']) }}&code=MobileQRUrl&eclevel=L" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Instructions -->
            <div class="instructions">
                <h3>📋 Hướng dẫn sử dụng vé</h3>
                <ul>
                    <li><strong>Đến rạp trước giờ chiếu 15-30 phút</strong> để làm thủ tục nhận vé và mua dịch vụ</li>
                    <li><strong>Xuất trình mã QR</strong> hoặc mã đơn hàng tại quầy vé</li>
                    <li><strong>Giữ vé cẩn thận</strong> trong suốt thời gian xem phim</li>
                    <li><strong>Không được chuyển nhượng</strong> vé cho người khác</li>
                    <li><strong>Đến đúng ghế đã đặt</strong> theo thông tin trên vé</li>
                    <li><strong>Tắt điện thoại</strong> hoặc chuyển sang chế độ im lặng khi xem phim</li>
                </ul>
                <p style="margin-bottom: 0;"><strong>Lưu ý:</strong> Vé không được hoàn trả sau khi đã thanh toán thành
                    công. Vui lòng kiểm tra kỹ thông tin trước khi thanh toán.</p>
            </div>
        </div>

        <!-- Footer -->
        <div class="footer">
            <div class="footer-content">
                <div class="logo" style="font-size: 24px; margin-bottom: 15px;">🎬 DZCinemar</div>
                <p>Hệ thống rạp chiếu phim hàng đầu Việt Nam</p>

                <div class="footer-links">
                    <a href="#">Website</a>
                    <a href="#">Facebook</a>
                    <a href="#">Ứng dụng di động</a>
                    <a href="#">Liên hệ</a>
                </div>

                <p style="font-size: 14px;">
                    📍 Địa chỉ: 32 Xuân Diệu, phường Hải Châu, TP. Đà Nẵng<br>
                    📞 Hotline: 1900 1234 | 📧 Email: info@dzcinema.com
                </p>
            </div>

            <div class="copyright">
                <p>&copy; 2024 DZCinemar. Tất cả quyền được bảo lưu.</p>
                <p>Email này được gửi tự động, vui lòng không trả lời trực tiếp.</p>
            </div>
        </div>
    </div>
</body>

</html>
