const axios = require("axios");

class Binance {
  constructor() {
    this.URL = "https://api.binance.com/api/v3/ticker";
  }

  getPrice(symbol) {
    return axios.get(`${this.URL}/price?symbol=${symbol}`).then((res) => {
      const price = Number(res.data.price);
      return price;
    });
  }

  get24hPrice(symbol) {
    return axios.get(`${this.URL}/24h?symbol=${symbol}`).then((res) => {
      const price = Number(res.data.price);
      return price;
    });
  }
}

exports.binance = new Binance();
