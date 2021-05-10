import React, { useCallback, useEffect, useState } from 'react';
import { useHttp } from '../hooks/http.hook';
import { Button } from './Button';
import { List } from './List';

export const WishList = ({ cart, checkOpenWishList }) => {
  const { request } = useHttp();
  const [userName, setUserName] = useState();
  const [showList, setShowList] = useState(false);

  const firstLetterToUpperCase = (string) => {
    const newString = string[0].toUpperCase() + string.slice(1);
    return newString;
  };

  const fetchData = useCallback(async () => {
    const fetch = await request(`/api/user/${cart.userId}`, 'GET', null);
    setUserName(
      firstLetterToUpperCase(fetch.name.firstname) +
        ' ' +
        firstLetterToUpperCase(fetch.name.lastname)
    );
  }, [request, cart.userId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const clickHandler = () => {
    setShowList(true);
    checkOpenWishList();
  };

  return (
    <div className="wishList">
      {userName && !showList && (
        <Button text={'Get ' + userName + ' list'} onClick={clickHandler} />
      )}
      {showList && (
        <>
          <h3>{userName}</h3>
          <List cart={cart} userName={userName} />
        </>
      )}
    </div>
  );
};
