import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

// import Stock from ".";
import BackButton from "../../components/BackButton";
// import LoadingStocks from "../../components/LoadingStocks";
// import { useAPI } from "../../hooks";
// import { Criteria as CriteriaType, StockScan } from "../../types";

// const STOCK_URL = "/api/stocks";

const StockDetails = () => {
  const router = useRouter();
  // const { id } = router.query;

  const handleBackClick = () => {
    router.back();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Stock Scanner</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Stock
          <a className="ml-4 text-blue-600" href="https://nextjs.org">
            Scanner
          </a>
        </h1>

        <div className="w-96 text-left">
          <BackButton
            actions={{
              onClick: handleBackClick,
            }}
          />
        </div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  );
};

export default StockDetails;
