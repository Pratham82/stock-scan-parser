import { useCallback, useEffect, useState } from "react";
import { StockDataType, StockScan } from "../types";

const useAPI = (props: { url: string }) => {
  const { url = "" } = props;

  const [data, setData] = useState<StockDataType | StockScan | []>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchStockData = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const apiData = await res.json();
      setData(apiData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchStockData();
  }, [fetchStockData]);

  return { data, isLoading };
};

export default useAPI;
