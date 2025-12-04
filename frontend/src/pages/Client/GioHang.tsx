import { useContext } from "react";
import { CartContext } from "../../context/Cartcontext";

export default function GioHang() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return <h2 style={{ padding: 20 }}>Giỏ hàng trống</h2>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Giỏ hàng</h2>

      {cart.map((item) => (
        <div
          key={item.productId}
          style={{ display: "flex", gap: 20, marginBottom: 16 }}
        >
          {/* <img src={item.image} alt="" width={80} /> */}

          <div>
            <h4>{item.name}</h4>
            <p>Giá: {item.price.toLocaleString()} VND</p>
            <p>Số lượng: {item.quantity}</p>

            <button onClick={() => removeFromCart(item.productId)}>
              Xóa sản phẩm
            </button>
          </div>
        </div>
      ))}

      <hr />
      <h3>Tổng tiền: {total.toLocaleString()} VND</h3>

      <button onClick={clearCart}>Xóa toàn bộ giỏ</button>
    </div>
  );
}
