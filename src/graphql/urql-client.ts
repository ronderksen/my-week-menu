import { createClient } from "urql";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();

export const urqlClientConfig = () => ({
  url: "https://graphql.fauna.com/graphql",
  fetchOptions: () => {
    const token = publicRuntimeConfig.faunaToken;
    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  },
});

export const client = createClient(urqlClientConfig());
