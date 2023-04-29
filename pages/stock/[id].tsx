import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const StockDetails = () => {
  const router = useRouter();
  const { id } = router.query;

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

        <div className="w-96">
          <div className="mt-8 rounded-md border-2 py-8 px-4 pt-4 text-left">
            <button
              type="button"
              className="text-md my-4 rounded-md bg-slate-500 px-4 py-3 text-white shadow-md hover:shadow-sm active:translate-x-0"
              onClick={handleBackClick}
            >
              <div className="flex">
                <div className="mr-3 w-6">
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.707 14.707a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L5.414 9H17a1 1 0 1 1 0 2H5.414l2.293 2.293a1 1 0 0 1 0 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span>Go Back</span>
              </div>
            </button>

            <h2>Stock Details About {id}</h2>
          </div>
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
