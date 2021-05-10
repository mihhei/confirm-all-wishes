import React, { useCallback, useContext, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { Items } from './Items';
import { Context } from './Context';

export const List = ({ cart, userName }) => {
  const { request } = useHttp();
  const [fetchedList, setFetchedList] = useState();
  const [allCarts] = useContext(Context);
  const [summa, setSumma] = useState(0);

  const fetchingCart = useCallback(async () => {
    try {
      const fetch = await request('/api/cart/postcart', 'POST', {
        userId: cart.userId,
        date: Date.now(),
        products: cart.products,
      });
      setFetchedList(fetch);
    } catch (e) {
      console.log(e);
    }
  }, [request, cart]);

  useEffect(() => {
    fetchingCart();
  }, [fetchingCart]);

  useEffect(() => {
    let sum = 0;
    allCarts.forEach((item) => {
      if (item.userId === cart.userId && item.select === true) {
        sum += item.reducedPrice;
      }
    });
    setSumma(sum);
  }, [allCarts, cart.userId]);

  return (
    <>
      {!fetchedList && (
        <div className="loader">
          <i className="fas fa-gift"></i>
        </div>
      )}
      {fetchedList && (
        <div className="list">
          {fetchedList.products.map((item, index) => {
            return (
              <Items
                id={item.productId}
                cart={cart}
                userName={userName}
                key={index}
              />
            );
          })}
        </div>
      )}
      {summa !== 0 && (
        <div className="font600">{'Total ' + Math.round(summa * 100) / 100 + ' euro'}</div>
      )}
      {summa === 0 && <div className="font600">Select any wishes!</div>}
    </>
  );
};
