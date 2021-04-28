import * as React from "react";
import { getRecipeByName } from "../../src/graphql/queries";
import { Recipe } from "../../src/generated/graphql";
import { NextPage, NextPageContext } from "next";

interface RecipePageProps {
  recipe: Recipe;
}

const RecipePage: NextPage<RecipePageProps> = ({ recipe }) => {
  return (
    <article>
      <h2 className="my-4 font-bold text-2xl">{recipe.name}</h2>
      <ul>
        {recipe.ingredients.data.map(({ product, unit, amount }) => (
          <li key={product.name}>
            {amount} {unit} {product.name}
          </li>
        ))}
      </ul>
    </article>
  );
};

export const getServerSideProps = async ({
  query,
  res,
}: NextPageContext): Promise<{ props: RecipePageProps; notFound?: boolean }> => {
  const { name } = query;
  const recipe = await getRecipeByName(name);

  if (recipe === null) {
    res.statusCode = 404;
    return {
      notFound: true,
      props: {
        recipe,
      },
    };
  }

  return {
    props: {
      recipe,
    },
  };
};

export default RecipePage;
