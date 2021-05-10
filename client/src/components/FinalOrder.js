import React, { useEffect, useState } from 'react';

export const FinalOrder = ({ cartId, data }) => {
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    let summa = 0;
    data[cartId].forEach((item) => {
      summa += item.finalPrice;
    });
    setSubTotal(summa);
  }, [cartId, data]);

  return (
    <>
      <div className="finalListFor">
        <div className="finalListHeader">
          {'Confirmed gifts for ' + data[cartId][0].userName}
        </div>
        <div>
          {data[cartId].map((item, index) => {
            return (
              <div className="finalListItem" key={index}>
                <div>{item.productName}</div>
                <div>{item.finalPrice}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="finalListItem">
        <div></div>
        <div className="subTotal">{Math.round(subTotal * 100) / 100}</div>
      </div>
    </>
  );
};
