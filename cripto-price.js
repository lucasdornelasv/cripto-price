class CriptoPrice {
  constructor() {
    this.URL =
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest";
  }

  getQuote(symbol) {
    symbol = symbol?.toUpperCase();

    return fetch(`${this.URL}?symbol=${symbol}`, {
      headers: {
        "X-CMC_PRO_API_KEY": "88ecca9e-3db3-4995-bc38-1e9f6c10ed44",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);

        if (res.status.error_message || res.status.error_code) {
          throw res.status;
        }

        return res.data[symbol]?.[0]?.quote?.USD;
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  }

  async getPrice(symbol) {
    try {
      const quote = await this.getQuote(symbol);
return 'teste'

      const price = Number(quote.price);
      return price;
    } catch (e) {
      throw 'Não deu';
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
