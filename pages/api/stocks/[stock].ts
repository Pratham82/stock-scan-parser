// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import stocksData from "../data";
import { StockDataType, StockScan } from "../../../types";

export default function allStocksData(
  req: NextApiRequest,
  res: NextApiResponse<StockDataType | StockScan | { message: string }>,
) {
  // for fetching one stock data
  const { stock } = req.query;
  const stockId = Number(stock);
  const isStockPresent = stocksData.map(({ id }) => id).includes(stockId);

  if (isStockPresent) {
    const filteredStock = stocksData.filter(
      (stockData) => stockData.id === stockId,
    );
    return res.status(200).json(filteredStock[0] as StockScan);
  }
  return res.status(404).json({ message: "Stock not present" });
}
