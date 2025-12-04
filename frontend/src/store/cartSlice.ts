import { createSlice } from '@reduxjs/toolkit';

// Lấy giỏ hàng từ LocalStorage nếu có
const items = localStorage.getItem('cartItems') !== null 
    ? JSON.parse(localStorage.getItem('cartItems') as string) 
    : [];

const initialState = {
    cartItems: items,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Hành động thêm vào giỏ
        addToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.cartItems.find((item: any) => item.id === newItem.id);
            
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.cartItems.push(newItem);
            }
            // Lưu vào LocalStorage
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        // Hành động xóa khỏi giỏ
        removeFromCart(state, action) {
            const id = action.payload;
            state.cartItems = state.cartItems.filter((item: any) => item.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        // Hành động tăng giảm số lượng
        updateCartQuantity(state, action) {
            const { id, quantity } = action.payload;
            const item = state.cartItems.find((item: any) => item.id === id);
            if (item) {
                item.quantity = quantity;
                if(item.quantity < 1) item.quantity = 1;
            }
            localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
        },
        // Xóa sạch giỏ (khi đặt hàng thành công)
        clearCart(state) {
            state.cartItems = [];
            localStorage.removeItem('cartItems');
        }
    },
});

export const { addToCart, removeFromCart, updateCartQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;