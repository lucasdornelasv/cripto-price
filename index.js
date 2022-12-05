const express = require("express");

const { binance } = require("./binance");

const port = 8080;
const app = express();

app.get("/price", (req, res) => {
  binance
    .getPrice(req.query?.symbol)
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.get("/24h", (req, res) => {
  binance
    .getPrice(req.query?.symbol)
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      res.send(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
