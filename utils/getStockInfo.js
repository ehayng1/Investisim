import options from "../config";

// fetch a single symbol
export const getStockInfo = (symbol) => {
  console.log("Symbol: ", symbol);

  return new Promise((resolve, reject) => {
    fetch(
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes?region=US&symbols=" +
        symbol,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log("Res: ", response);
        let data = response.quoteResponse.result;
        let tempData = [];
        data.forEach((el) => {
          tempData.push({
            symbol: el.symbol,
            price: el.regularMarketPrice,
            percent: el.regularMarketChangePercent.toFixed(2),
            prevClose: el.regularMarketPreviousClose,
            dayLow: el.regularMarketDayLow,
            dayHigh: el.regularMarketDayHigh,
            openPrice: el.regularMarketOpen,
            volume: el.regularMarketVolume,
            mktCap: el.marketCap,
            shortName: el.shortName,
          });
        });

        console.log("StockData: ", tempData);
        resolve(tempData); // Resolve the Promise with the stock data
      })
      .catch((err) => {
        console.error("ERROR: ", err);
        reject(err); // Reject the Promise with the error
      });
  });
};
