const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/getcarts', (req, res) => {
  const getRndInteger = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const carts = [];
  while (carts.length < 5) {
    const randomCart = getRndInteger(20, 100);
    if (!carts.includes(randomCart)) {
      carts.push(randomCart);
    }
  }
  const users = [];
  while (users.length < 5) {
    const randomUser = getRndInteger(1, 10);
    if (!users.includes(randomUser)) {
      users.push(randomUser);
    }
  }
  const cartsAndUsers = [];
  carts.map((item, index) => {
    const numberOfWishes = getRndInteger(2, 5);
    const wishes = [];
    while (wishes.length < numberOfWishes) {
      const randomProduct = getRndInteger(1, 20);
      if (!wishes.includes(randomProduct)) {
        wishes.push(randomProduct);
      }
    }
    const wishList = [];
    wishes.map((item) => {
      const wishItem = { productId: item, quantity: 1 };
      wishList.push(wishItem);
    });
    cartsAndUsers.push({
      cartId: item,
      userId: users[index],
      products: wishList,
    });
  });

  res.json(cartsAndUsers);
});

router.post('/postcart', async (req, res) => {
  try {
    const response = await axios.post(
      'https://fakestoreapi.com/carts',
      req.body
    );
    console.log(response.data);
    res.json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Something goes wrong!' });
  }
});

router.put('/update/:id', async (req, res) => {
  const cartId = req.params.id;
  try {
    const response = await axios.put(
      `https://fakestoreapi.com/carts/${cartId}`,
      req.body
    );
    console.log(response.data);
    res.json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Something goes wrong!' });
  }
});

router.get('/product/:id', async (req, res) => {
  const productId = req.params.id;
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${productId}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Something goes wrong!' });
  }
});

module.exports = router;
