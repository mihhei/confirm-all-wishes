import React, { useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { WishList } from './WishList';
import { Intro } from './Intro';
import { ConfirmButton } from './ConfirmButton';

export const Container = () => {
  const { request } = useHttp();
  const [carts, setCarts] = useState();
  const [check, setCheck] = useState(0);
  const getUsers = async () => {
    try {
      const fetch = await request('/api/cart/getcarts', 'GET', null);
      setCarts(fetch);
    } catch (e) {
      console.log(e);
    }
  };

  const checkOpenWishList = () => {
    setCheck((prev) => (prev += 1));
  };

  return (
    <>
      {!carts && <Intro buttonClick={getUsers} />}
      {carts && (
        <>
          <div className="wrapper">
            {carts.map((cart, index) => {
              return (
                <WishList
                  cart={cart}
                  key={index}
                  checkOpenWishList={checkOpenWishList}
                />
              );
            })}
          </div>
          <div>{check === carts.length && <ConfirmButton />}</div>
        </>
      )}
    </>
  );
};
