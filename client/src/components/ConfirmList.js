import React, { useContext, useEffect, useState } from "react";
import { Context } from "./Context";
import { FinalOrder } from "./FinalOrder";

export const ConfirmList = () => {
  const [data, setData] = useState();
  const [cartsId, setCartsId] = useState();
  const [allCarts, setAllCarts] = useContext(Context);

  useEffect(() => {
    const carts = [];
    allCarts.forEach((item) => {
      if (!carts.includes(item.cartId)) {
        carts.push(item.cartId);
      }
    });
    setCartsId(carts);
    const cartData = {};
    carts.forEach((cart) => {
      const productsData = [];
      allCarts.forEach((item) => {
        if (item.cartId === cart && item.select) {
          const productsDataItem = {
            userName: item.userName,
            finalPrice: item.reducedPrice,
            productName: item.productName,
          };
          productsData.push(productsDataItem);
        }
      });
      cartData[cart] = productsData;

    });
    setData(cartData);
    return () => setAllCarts([]);
  }, []);

  return (
    <div className="confirmListWrap">
      <div className="confirmListContent">
        <h2>Congratulations, your order is done!</h2>

        {data && (
          <>
            {cartsId.map((item, index) => {
              if (data[item].length) {
                return <FinalOrder cartId={item} data={data} key={index} />;
              }
            })}
          </>
        )}
      </div>
    </div>
  );
};
