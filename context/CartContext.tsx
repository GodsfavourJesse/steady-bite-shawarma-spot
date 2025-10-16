"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;
    quantity: number;
}

interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    updateQuantity: (id: number, newQuantity: number) => void;
}

const CartContext = createContext<CartContextType | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // ✅ Load cart from localStorage on first render
    useEffect(() => {
        try {
        const savedCart = localStorage.getItem("cart");
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }
        } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        } finally {
        setIsLoaded(true);
        }
    }, []);

    // ✅ Save to localStorage only after initial load
    useEffect(() => {
        if (isLoaded) {
        localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart, isLoaded]);

    // ✅ Add to cart
    const addToCart = (item: CartItem) => {
        setCart((prev) => {
        const existing = prev.find((i) => i.id === item.id);
        if (existing) {
            return prev.map((i) =>
                i.id === item.id
                    ? { ...i, quantity: i.quantity + item.quantity }
                    : i
                );
        }
        return [...prev, { ...item }];
        });
    };

    // ✅ Remove item
    const removeFromCart = (id: number) => {
        setCart((prev) => prev.filter((i) => i.id !== id));
    };

    // ✅ Clear all items
    const clearCart = () => setCart([]);

    // ✅ Update item quantity
    const updateQuantity = (id: number, newQuantity: number) => {
        setCart((prev) =>
        prev
            .map((i) =>
            i.id === id ? { ...i, quantity: Math.max(newQuantity, 0) } : i
            )
            .filter((i) => i.quantity > 0)
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};
