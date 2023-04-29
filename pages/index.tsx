import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import LoadingStocks from "../components/LoadingStocks";
import Stock from "./stock";
import { useAPI } from "../hooks";

const STOCKS_DATA_URL = "/api/stocks-data";

const Home: NextPage = () => {
  const { data, isLoading } = useAPI({ url: STOCKS_DATA_URL });

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

        <div className="w-96">
          {!isLoading ? (
            <div className="mt-8 rounded-md border-2 py-8 px-4 pt-4 text-left">
              {data?.map((stock) => (
                <Stock {...stock} />
              ))}
            </div>
          ) : (
            <LoadingStocks states={5} />
          )}
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

export default Home;
