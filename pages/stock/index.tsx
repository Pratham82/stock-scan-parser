import { useRouter } from "next/router";
import React from "react";

import { StockScan as StockCardProps } from "../../types";

const Stock = (props: StockCardProps) => {
  const { id = 0, name = "", tag = "", color = "", variant = "" } = props;
  const router = useRouter();

  const handleStockClick = (stockId: number) => {
    if (!variant) {
      router.push(`/stock/${stockId}`);
    }
  };

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        className={`cursor-pointer border py-2 px-4 duration-200 hover:bg-slate-100 ${
          variant === "details" && "bg-blue-400 text-white hover:bg-blue-300"
        }`}
        onClick={() => handleStockClick(id)}
        onKeyDown={() => {}}
      >
        <h2>{name}</h2>
        <p style={{ color }}>{tag}</p>
      </div>
    </div>
  );
};

export default Stock;
