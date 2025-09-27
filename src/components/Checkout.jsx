import React from "react";
import { useCart } from "../context/CartContext";
import "./Checkout.css";
import PropTypes from "prop-types"; 

const Checkout = () => {
  const { cartItems, getTotal, clearCart } = useCart();

  return (
    <div className="checkout-container">
      <h2>Resumen de Compra</h2>
      {cartItems.length === 0 ? (
        <p>No tienes productos en el carrito.</p>
      ) : (
        <>
          <ul className="checkout-list">
            {cartItems.map((item) => (
              <li key={item.id} className="checkout-item">
                <span>{item.nombre} x{item.cantidad}</span>
                <span>${item.precio * item.cantidad}</span>
              </li>
            ))}
          </ul>
          <div className="checkout-total">
            <span>Total a pagar:</span>
            <strong>${getTotal()}</strong>
          </div>
          <button className="finish-btn" onClick={() => {
            clearCart();
            alert("¡Compra finalizada! Gracias por tu pedido.");
          }}>
            Finalizar compra
          </button>
        </>
      )}
    </div>
  );
};

Checkout.propTypes = {};

export default Checkout;