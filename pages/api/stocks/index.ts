// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import stocksData from "../data";
import { StockDataType, StockScan } from "../../../types";

export default function allStocksData(
  req: NextApiRequest,
  res: NextApiResponse<StockDataType | StockScan | { message: string }>,
) {
  // for fetching all stock data w/o any query
  res.status(200).json(stocksData as StockDataType);
}
