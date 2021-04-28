import * as React from "react";
import { getProductByName } from "../../src/graphql/queries";
import { Product } from "../../src/generated/graphql";
import { NextPage, NextPageContext } from "next";

interface ProductPageProps {
  product: Product;
}

const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  return (
    <article>
      <h2 className="my-4 font-bold text-2xl">{product.name}</h2>
    </article>
  );
};

export const getServerSideProps = async ({
  query,
  res,
}: NextPageContext): Promise<{ props: ProductPageProps; notFound?: boolean }> => {
  const { name } = query;
  const product = await getProductByName(name);

  if (product === null) {
    res.statusCode = 404;
    return {
      notFound: true,
      props: {
        product,
      },
    };
  }

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
