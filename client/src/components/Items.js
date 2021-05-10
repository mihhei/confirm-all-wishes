import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from './Context';
import { useHttp } from '../hooks/http.hook';
import { ItemPrice } from './ItemPrice';

export const Items = ({ id, cart, userName }) => {
  const { request } = useHttp();
  const [productInfo, setProductInfo] = useState();

  const [allCarts, setAllCarts] = useContext(Context);

  const fetchingData = useCallback(async () => {
    try {
      const fetch = await request(`/api/cart/product/${id}`, 'GET', null);
      setProductInfo(fetch);
      const newItem = {
        cartId: cart.cartId,
        userId: cart.userId,
        userName,
        price: fetch.price,
        productId: id,
        select: true,
        reducedPrice: fetch.price,
        productName: fetch.title,
      };
      setAllCarts((prev) => [...prev, newItem]);
    } catch (e) {
      console.log(e);
    }
  }, [request, id, setAllCarts, userName, cart]);

  useEffect(() => {
    fetchingData();
  }, [fetchingData]);

  return (
    <>
      {productInfo && (
        <div className="item">
          <div className="itemTitle">{productInfo.title}</div>
          <ItemPrice userId={cart.userId} id={id} price={productInfo.price} />
        </div>
      )}
    </>
  );
};
