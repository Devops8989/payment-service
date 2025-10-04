const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());

app.post('/pay', (req, res) => {
  const { orderId, amount } = req.body;
  res.json({ orderId, status: 'paid', amount });
});

app.listen(5006, () => console.log('Payment Service running on 5006'));
