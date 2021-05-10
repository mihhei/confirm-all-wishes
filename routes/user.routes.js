const { Router } = require('express');
const router = Router();
const axios = require('axios');

router.get('/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/users/${userId}`
    );
    console.log(response.data);
    res.json(response.data);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Something goes wrong!' });
  }
});

module.exports = router;
