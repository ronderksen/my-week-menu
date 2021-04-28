import * as React from "react";
import { getRecipes, getProducts } from "../src/graphql/queries";
import { Product, Recipe } from "../src/generated/graphql";
import { NextPage } from "next";
import Link from "next/link";

interface MainPageProps {
  recipes: Recipe[];
  products: Product[];
}

const MainPage: NextPage<MainPageProps> = ({ recipes, products }) => {
  return (
    <div className="flex">
      <section className="flex-grow">
        <h2 className="my-4 text-2xl font-bold">Recipes</h2>
        <ul>
          {recipes.map((recipe) => {
            return (
              <li key={recipe._id}>
                <Link href={`/recipes/${recipe.name.toLowerCase()}`}>
                  <a>{recipe.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="flex-grow">
        <h2 className="my-4 text-2xl font-bold">Ingredients</h2>
        <ul>
          {products.map((product) => {
            return (
              <li key={product._id}>
                <Link href={`/ingredients/${product.name.toLowerCase()}`}>
                  <a>{product.name}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export const getServerSideProps = async (): Promise<{ props: MainPageProps }> => {
  try {
    const recipes = await getRecipes();
    const products = await getProducts();

    return {
      props: {
        recipes,
        products,
      },
    };
  } catch (err) {
    return {
      props: {
        recipes: [],
        products: [],
      },
    };
  }
};

export default MainPage;
