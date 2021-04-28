import { client } from "./urql-client";
import {
  GetProductsDocument,
  GetRecipeDocument,
  GetRecipesDocument,
  GetProductDocument,
} from "../generated/graphql";

export const getRecipes = async () => {
  const {
    data: {
      allRecipes: { data: recipes },
    },
  } = await client.query(GetRecipesDocument, { size: 10 }).toPromise();

  return recipes;
};

export const getRecipeByName = async (term) => {
  const {
    data: { findRecipeByName },
  } = await client.query(GetRecipeDocument, { term }).toPromise();

  if (findRecipeByName.data.length > 0) {
    return findRecipeByName.data[0];
  }
  return null;
};

export const getProducts = async () => {
  const {
    data: {
      allProducts: { data: products },
    },
  } = await client.query(GetProductsDocument, { size: 10 }).toPromise();

  return products;
};

export const getProductByName = async (term) => {
  const {
    data: { findProductByName },
  } = await client.query(GetProductDocument, { term }).toPromise();

  if (findProductByName.data.length > 0) {
    return findProductByName.data[0];
  }
  return null;
};
