import * as React from "react";
import { Provider } from "urql";
import Link from "next/link";
import { client, urqlClientConfig } from "../src/graphql/urql-client";
import "../src/styles/app.css";
import { withUrqlClient } from "next-urql";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider value={client}>
      <header className="py-4 px-8 mb-8 bg-rosyBrown text-white flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href={"/"} passHref>
            <a>My Weekly menu</a>
          </Link>
        </h1>
        <button type="button" className="btn">
          Create my menu
        </button>
      </header>
      <main className="px-8">
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};

export default withUrqlClient(urqlClientConfig)(MyApp);
