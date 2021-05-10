import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Context } from "./Context";
import { useHttp } from "../hooks/http.hook";

export const AlertConfirm = () => {
  const [allCarts] = useContext(Context);
  const { request } = useHttp();

  const updateCarts = () => {
    const carts = [];
    allCarts.forEach((item) => {
      if (!carts.includes(item.cartId)) {
        carts.push(item.cartId);
      }
    });
    carts.forEach(async (cart) => {
      const products = [];
      let user = null;
      allCarts.forEach((item) => {
        if (item.cartId === cart && item.select) {
          const updatedProduct = {
            productId: item.productId,
            quantity: 1,
          };
          products.push(updatedProduct);
          user = item.userId;
        }
      });
      try {
        const fetch = await request(`/api/cart/update/${cart}`, "PUT", {
          userId: user,
          date: Date.now(),
          products,
        });
        console.log(fetch);
      } catch (e) {
        console.log(e);
      }
    });
  };
  return (
    <div className="alertConfirmWrap">
      <div className="alertConfirm alignCenter">
        <div className="alertMessage">
          Confirm to proceed all selected wishes to order!
        </div>
        <NavLink className="button" to="/confirm" onClick={updateCarts}>
          Confirm!
        </NavLink>
      </div>
    </div>
  );
};
