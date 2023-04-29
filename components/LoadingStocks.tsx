import React from "react";

const LoadingStocks = (props: { states: number }) => {
  const { states = 5 } = props;

  return (
    <div className="mt-8 animate-pulse rounded-md border-2 py-8 px-4 pt-4 text-left">
      {Array(states)
        .fill(0)
        .map(() => (
          <div className="py-1" key={Math.random()}>
            <div className=" my-2 h-4 rounded bg-slate-500" />
            <div className=" my-2 h-3 rounded bg-slate-500" />
          </div>
        ))}
    </div>
  );
};

export default LoadingStocks;
