import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Context } from './Context';

export const ItemPrice = ({ userId, id, price }) => {
  const [allSelectedItems, setAllSelectedItems] = useState({});
  const [allProductsQuantity, setAllProductsQuantity] = useState({});
  const [allCarts, setAllCarts] = useContext(Context);
  const [select, setSelect] = useState(' select');
  const [discount, setDiscount] = useState(0);
  const [ableDiscount, setAbleDiscount] = useState(0);

  const getAbleDiscount = useCallback(() => {
    if (allProductsQuantity[id] === 1) {
      setAbleDiscount(0);
    } else {
      if (allSelectedItems[id]) {
        setAbleDiscount(discount + 10);
      } else {
        setAbleDiscount('up to ' + discountForItem(allProductsQuantity[id]));
      }
    }
  }, [id, allProductsQuantity, discount, allSelectedItems]);

  useEffect(() => {
    const allProductsQuantity = {};
    const allSelectedProducts = {};
    allCarts.map((item) => {
      if (!allProductsQuantity[item.productId]) {
        allProductsQuantity[item.productId] = 1;
      } else {
        allProductsQuantity[item.productId] += 1;
      }
      if (item.select) {
        if (!allSelectedProducts[item.productId]) {
          allSelectedProducts[item.productId] = 1;
        } else {
          allSelectedProducts[item.productId] += 1;
        }
      }
      return item;
    });
    setAllSelectedItems(allSelectedProducts);
    setAllProductsQuantity(allProductsQuantity);
  }, [allCarts]);

  const discountForItem = (sameProductQuantity) => {
    switch (sameProductQuantity) {
      case 1:
        return 0;
      case 2:
        return 10;
      case 3:
        return 20;
      case 4:
        return 30;
      case 5:
        return 40;
      default:
        return 40;
    }
  };
  const getDiscount = useCallback(() => {
    if (allSelectedItems[id]) {
      setDiscount(discountForItem(allSelectedItems[id]));
    }
  }, [allSelectedItems, id]);

  useEffect(() => {
    getDiscount();
    getAbleDiscount();
  }, [allSelectedItems, getDiscount, getAbleDiscount]);

  useEffect(() => {
    setAllCarts((prev) =>
      prev.map((item) => {
        if (item.userId === userId && item.productId === id) {
          return {
            ...item,
            reducedPrice: Math.round((100 - discount) * price) / 100,
          };
        }
        return item;
      })
    );
  }, [discount]);

  const changeSelect = (selector) => {
    setAllCarts((prev) =>
      prev.map((item) => {
        if (item.userId === userId && item.productId === id) {
          return { ...item, select: selector };
        }
        return item;
      })
    );
  };

  const selectHandler = () => {
    if (select) {
      setSelect('');
      changeSelect(false);
    } else {
      setSelect(' select');
      changeSelect(true);
    }
  };
  return (
    <div
      className={'itemPrice' + select}
      onClick={() => {
        selectHandler();
      }}
    >
      <div className="alignCenter">
        {!select && ableDiscount !== 0 && (
          <div className="priceSpan alignCenter">{'Get extra'}</div>
        )}
        {select && discount !== 0 && <div className="priceSpan alignCenter">Save</div>}
      </div>
      <div className="alignCenter">
        {!select && <div>{price}</div>}
        {select && <div>{Math.round((100 - discount) * price) / 100}</div>}
      </div>
      <div className="alignCenter">
        {!select && ableDiscount !== 0 && (
          <div className="priceSpan alignCenter">{ableDiscount + '%'}</div>
        )}
        {select && discount !== 0 && (
          <div className="priceSpan alignCenter">{discount + '%'}</div>
        )}
      </div>
    </div>
  );
};
