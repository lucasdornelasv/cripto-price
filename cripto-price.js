class CriptoPrice {
  constructor() {
    this.URL =
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";
  }

  getInfo(symbol) {
    symbol = symbol?.toUpperCase();
    return fetch(`${this.URL}?symbol=${symbol}`, {
      headers: {
        "X-CMC_PRO_API_KEY": "88ecca9e-3db3-4995-bc38-1e9f6c10ed44",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status.error_message) {
          throw new Error(res.status.error_message);
        }

        return res.data[symbol]?.[0];
      });
  }

  getQuote(symbol) {
    return this.getInfo(symbol).then((res) => {
      return res.quote.USD;
    });
  }

  async getPrice(symbol) {
    try {
      const quote = await this.getQuote(symbol);
      const price = Number(quote.price);
      return price;
    } catch (e) {
      throw e;
    }
  }

  async get24hPrice(symbol) {
    try {
      const quote = await this.getQuote(symbol);
      const price = Number(quote.percent_change_24h);
      return price;
    } catch (e) {
      throw e;
    }
  }
}

exports.criptoPrice = new CriptoPrice();
