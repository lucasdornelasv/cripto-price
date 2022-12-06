const express = require("express");

const { criptoPrice } = require("./cripto-price");

const port = 8080;
const app = express();

app.get("/", (req, res) => {
  res.send("Listening!");
});

app.get("/price", (req, res) => {
  criptoPrice
    .getPrice(req.query?.symbol)
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
});

app.get("/24h", (req, res) => {
  criptoPrice
    .getPrice(req.query?.symbol)
    .then((price) => {
      res.json(price);
    })
    .catch((err) => {
      res.status(400);
      res.json(err);
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
