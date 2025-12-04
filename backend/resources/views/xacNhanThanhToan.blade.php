<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xác Nhận Đặt Vé - DZCinemar</title>
</head>

<body
    style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8f9fa; line-height: 1.6;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f8f9fa;">
        <tr>
            <td style="padding: 20px 0;">
                <table role="presentation"
                    style="width: 100%; max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.1); overflow: hidden;">

                    <!-- Header -->
                    <tr>
                        <td
                            style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); padding: 30px 40px; text-align: center;">
                            <div
                                style="display: inline-block; background-color: #ffd700; padding: 12px 20px; border-radius: 50px; margin-bottom: 15px;">
                                <span style="font-size: 24px; font-weight: bold; color: #1a1a2e;">🎬</span>
                            </div>
                            <h1
                                style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold; letter-spacing: 1px;">
                                DZCinemar</h1>
                            <p
                                style="margin: 10px 0 0 0; color: #ffd700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px;">
                                Cinema Experience</p>
                        </td>
                    </tr>

                    <!-- Success Message -->
                    <tr>
                        <td style="padding: 40px 40px 20px 40px; text-align: center;">
                            <div
                                style="display: inline-block; background-color: #d4edda; border: 2px solid #c3e6cb; border-radius: 50px; padding: 8px 16px; margin-bottom: 20px;">
                                <span style="color: #155724; font-size: 14px; font-weight: 600;">✓ ĐẶT VÉ THÀNH
                                    CÔNG</span>
                            </div>
                            <h2 style="margin: 0 0 15px 0; color: #1a1a2e; font-size: 24px; font-weight: bold;">Cảm ơn
                                bạn đã đặt vé!</h2>
                            <p style="margin: 0; color: #666666; font-size: 16px;">Chúng tôi đã ghi nhận đơn đặt vé của
                                bạn. Dưới đây là thông tin chi tiết:</p>
                        </td>
                    </tr>

                    <!-- Booking Details -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">

                            <!-- Movie Info -->
                            <div
                                style="background-color: #f8f9fa; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                                <h3 style="margin: 0 0 15px 0; color: #1a1a2e; font-size: 18px; font-weight: bold;">🎬
                                    Thông Tin Phim</h3>
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #666666; font-size: 14px;">Tên Phim:</span>
                                    <span
                                        style="color: #1a1a2e; font-weight: 600; font-size: 14px;">{{ $data['ten_phim'] }}</span>
                                </div>
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #666666; font-size: 14px;">Ngày Chiếu:</span>
                                    <span
                                        style="color: #1a1a2e; font-weight: 600; font-size: 14px;">{{ $data['ngay_chieu'] }}</span>
                                </div>
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <span style="color: #666666; font-size: 14px;">Giờ Chiếu:</span>
                                    <span
                                        style="color: #1a1a2e; font-weight: 600; font-size: 14px;">{{ $data['gio_chieu'] }}</span>
                                </div>
                            </div>

                            <!-- Tickets Table -->
                            <div style="margin-bottom: 25px;">
                                <h3 style="margin: 0 0 15px 0; color: #1a1a2e; font-size: 18px; font-weight: bold;">🎫
                                    Chi Tiết Vé</h3>
                                <table role="presentation"
                                    style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; overflow: hidden;">
                                    <thead>
                                        <tr style="background-color: #f8f9fa;">
                                            <th
                                                style="padding: 12px; text-align: left; color: #1a1a2e; font-weight: 600; font-size: 14px; border-bottom: 1px solid #e9ecef;">
                                                Số Ghế</th>
                                            <th
                                                style="padding: 12px; text-align: right; color: #1a1a2e; font-weight: 600; font-size: 14px; border-bottom: 1px solid #e9ecef;">
                                                Đơn Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($data['ds_ve'] as $index => $value)
                                            <tr>
                                                <td
                                                    style="padding: 12px; color: #666666; font-size: 14px; border-bottom: 1px solid #f8f9fa;">
                                                    {{ $value->ten_ghe }}</td>
                                                <td
                                                    style="padding: 12px; text-align: right; color: #1a1a2e; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8f9fa;">
                                                    {{ number_format($value->gia_ve, 0) }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>

                            <!-- Services Table -->
                            <div style="margin-bottom: 25px;">
                                <h3 style="margin: 0 0 15px 0; color: #1a1a2e; font-size: 18px; font-weight: bold;">🍿
                                    Dịch Vụ Đi Kèm</h3>
                                <table role="presentation"
                                    style="width: 100%; border-collapse: collapse; background-color: #ffffff; border: 1px solid #e9ecef; border-radius: 8px; overflow: hidden;">
                                    <thead>
                                        <tr style="background-color: #f8f9fa;">
                                            <th
                                                style="padding: 12px; text-align: left; color: #1a1a2e; font-weight: 600; font-size: 14px; border-bottom: 1px solid #e9ecef;">
                                                Tên Dịch Vụ</th>
                                            <th
                                                style="padding: 12px; text-align: right; color: #1a1a2e; font-weight: 600; font-size: 14px; border-bottom: 1px solid #e9ecef;">
                                                Đơn Giá</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @foreach ($data['ds_dv'] as $index => $value)
                                            <tr>
                                                <td
                                                    style="padding: 12px; color: #666666; font-size: 14px; border-bottom: 1px solid #f8f9fa;">
                                                    {{ $value->ten_dich_vu }}</td>
                                                <td
                                                    style="padding: 12px; text-align: right; color: #1a1a2e; font-weight: 600; font-size: 14px; border-bottom: 1px solid #f8f9fa;">
                                                    {{ number_format($value->gia_ve, 0) }}</td>
                                            </tr>
                                        @endforeach
                                    </tbody>
                                </table>
                            </div>

                            <!-- Discount Code -->
                            <div
                                style="background-color: #fff3cd; border: 1px solid #ffeaa7; border-radius: 8px; padding: 15px; margin-bottom: 25px;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="color: #856404; font-size: 14px; font-weight: 600;">🎯 Mã Giảm Giá Đã
                                        Áp Dụng:</span>
                                    <span style="color: #856404; font-weight: bold; font-size: 16px;">
                                        {{ $data['ma_giam_gia'] }}</span>
                                </div>
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-top: 8px;">
                                    <span style="color: #856404; font-size: 14px;">Số Tiền Giảm:</span>
                                    <span style="color: #e17055; font-weight: bold; font-size: 14px; padding-left:20px">
                                        -{{ number_format($data['tien_giam_gia']) }}</span>
                                </div>
                            </div>

                            <!-- Total Amount -->
                            <div
                                style="background-color: #1a1a2e; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
                                    <span style="color: #ffffff; font-size: 16px;">Tạm Tính:</span>
                                    <span style="color: #ffffff; font-size: 16px; padding-left:20px">
                                        {{ number_format($data['tam_tinh']) }}</span>
                                </div>
                                <div
                                    style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                                    <span style="color: #ffffff; font-size: 16px;">Giảm Giá:</span>
                                    <span style="color: #e17055; font-size: 16px; padding-left:20px">
                                        -{{ number_format($data['tien_giam_gia']) }}</span>
                                </div>
                                <hr style="border: none; border-top: 1px solid #ffffff33; margin: 15px 0;">
                                <div style="display: flex; justify-content: space-between; align-items: center;">
                                    <span style="color: #ffd700; font-size: 24px; font-weight: bold;">TỔNG CỘNG:</span>
                                    <span style="color: #ffd700; font-size: 24px; font-weight: bold;padding-left:20px">
                                        {{ number_format($data['so_tien']) }}</span>
                                </div>
                            </div>

                            <!-- QR Code Payment -->
                            <div
                                style="text-align: center; background-color: #f8f9fa; border-radius: 8px; padding: 25px;">
                                <h3 style="margin: 0 0 15px 0; color: #1a1a2e; font-size: 18px; font-weight: bold;">💳
                                    Thanh Toán</h3>
                                <p style="margin: 0 0 20px 0; color: #666666; font-size: 14px;">Quét mã QR bên dưới để
                                    thanh toán:</p>

                                <!-- QR Code Placeholder -->
                                <div
                                    style="display: inline-block; background-color: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
                                    <img width="300" height="300" src='{{ $data['link_qr_code'] }}' />
                                </div>

                                <p style="margin: 0; color: #666666; font-size: 12px;">Mã đơn hàng:
                                    <strong>{{ $data['ma_don_hang'] }}</strong>
                                </p>
                                <p style="margin: 5px 0 0 0; color: #e74c3c; font-size: 12px; font-weight: 600;">⏰ Vui
                                    lòng thanh toán trong vòng 15 phút</p>
                            </div>

                        </td>
                    </tr>

                    <!-- Important Notes -->
                    <tr>
                        <td style="padding: 0 40px 30px 40px;">
                            <div
                                style="background-color: #e3f2fd; border-left: 4px solid #2196f3; padding: 15px; border-radius: 0 8px 8px 0;">
                                <h4 style="margin: 0 0 10px 0; color: #1976d2; font-size: 16px; font-weight: bold;">📋
                                    Lưu Ý Quan Trọng</h4>
                                <ul
                                    style="margin: 0; padding-left: 20px; color: #1976d2; font-size: 14px; line-height: 1.6;">
                                    <li>Vui lòng có mặt tại rạp trước giờ chiếu 15 phút</li>
                                    <li>Mang theo email xác nhận này khi đến rạp</li>
                                    <li>Không được hoàn vé sau khi thanh toán thành công</li>
                                    <li>Liên hệ hotline nếu cần hỗ trợ: <strong>1900-xxxx</strong></li>
                                </ul>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background-color: #1a1a2e; padding: 30px 40px; text-align: center;">
                            <h3 style="margin: 0 0 15px 0; color: #ffd700; font-size: 20px; font-weight: bold;">
                                DZCinemar</h3>
                            <p style="margin: 0 0 10px 0; color: #ffffff; font-size: 14px;">Trải nghiệm điện ảnh đỉnh
                                cao</p>
                            <p style="margin: 0 0 15px 0; color: #cccccc; font-size: 12px;">
                                📍 Địa chỉ: 123 Đường ABC, Quận XYZ, TP.HCM<br>
                                📞 Hotline: 1900-xxxx | 📧 Email: support@dzcinema.com<br>
                                🌐 Website: www.dzcinema.com
                            </p>
                            <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #ffffff33;">
                                <p style="margin: 0; color: #999999; font-size: 11px;">
                                    © 2024 DZCinemar. Tất cả quyền được bảo lưu.<br>
                                    Email này được gửi tự động, vui lòng không phản hồi.
                                </p>
                            </div>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
