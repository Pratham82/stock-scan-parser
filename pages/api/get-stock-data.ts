// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { stocksData } from "../../data";
import { StockDataType } from "../../types";

export default function getStocksData(
  req: NextApiRequest,
  res: NextApiResponse<StockDataType>,
) {
  res.status(200).json(stocksData as StockDataType);
}
