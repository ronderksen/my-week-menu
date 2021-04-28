import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Long` scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  Time: any;
};








export type Ingredient = {
  __typename?: 'Ingredient';
  recipe?: Maybe<Recipe>;
  /** The document's ID. */
  _id: Scalars['ID'];
  amount: Scalars['Int'];
  unit: Unit;
  product?: Maybe<Product>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};

/** 'Ingredient' input values */
export type IngredientInput = {
  product?: Maybe<IngredientProductRelation>;
  recipe?: Maybe<IngredientRecipeRelation>;
  amount: Scalars['Int'];
  unit: Unit;
};

/** The pagination object for elements of type 'Ingredient'. */
export type IngredientPage = {
  __typename?: 'IngredientPage';
  /** The elements of type 'Ingredient' in this page. */
  data: Array<Maybe<Ingredient>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'Ingredient' and 'Product' using the field 'Ingredient.product'. */
export type IngredientProductRelation = {
  /** Create a document of type 'Product' and associate it with the current document. */
  create?: Maybe<ProductInput>;
  /** Connect a document of type 'Product' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Product' */
  disconnect?: Maybe<Scalars['Boolean']>;
};

/** Allow manipulating the relationship between the types 'Ingredient' and 'Recipe' using the field 'Ingredient.recipe'. */
export type IngredientRecipeRelation = {
  /** Create a document of type 'Recipe' and associate it with the current document. */
  create?: Maybe<RecipeInput>;
  /** Connect a document of type 'Recipe' with the current document using its ID. */
  connect?: Maybe<Scalars['ID']>;
  /** If true, disconnects this document from 'Recipe' */
  disconnect?: Maybe<Scalars['Boolean']>;
};


export type Mutation = {
  __typename?: 'Mutation';
  /** Delete an existing document in the collection of 'Recipe' */
  deleteRecipe?: Maybe<Recipe>;
  /** Update an existing document in the collection of 'Recipe' */
  updateRecipe?: Maybe<Recipe>;
  /** Update an existing document in the collection of 'Ingredient' */
  updateIngredient?: Maybe<Ingredient>;
  /** Create a new document in the collection of 'Ingredient' */
  createIngredient: Ingredient;
  /** Delete an existing document in the collection of 'Ingredient' */
  deleteIngredient?: Maybe<Ingredient>;
  /** Create a new document in the collection of 'Product' */
  createProduct: Product;
  /** Update an existing document in the collection of 'Product' */
  updateProduct?: Maybe<Product>;
  /** Delete an existing document in the collection of 'Product' */
  deleteProduct?: Maybe<Product>;
  /** Create a new document in the collection of 'Recipe' */
  createRecipe: Recipe;
};


export type MutationDeleteRecipeArgs = {
  id: Scalars['ID'];
};


export type MutationUpdateRecipeArgs = {
  id: Scalars['ID'];
  data: RecipeInput;
};


export type MutationUpdateIngredientArgs = {
  id: Scalars['ID'];
  data: IngredientInput;
};


export type MutationCreateIngredientArgs = {
  data: IngredientInput;
};


export type MutationDeleteIngredientArgs = {
  id: Scalars['ID'];
};


export type MutationCreateProductArgs = {
  data: ProductInput;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data: ProductInput;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationCreateRecipeArgs = {
  data: RecipeInput;
};

export type Product = {
  __typename?: 'Product';
  /** The document's ID. */
  _id: Scalars['ID'];
  /** The document's timestamp. */
  _ts: Scalars['Long'];
  name: Scalars['String'];
};

/** 'Product' input values */
export type ProductInput = {
  name: Scalars['String'];
};

/** The pagination object for elements of type 'Product'. */
export type ProductPage = {
  __typename?: 'ProductPage';
  /** The elements of type 'Product' in this page. */
  data: Array<Maybe<Product>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  /** Find a document from the collection of 'Product' by its id. */
  findProductByID?: Maybe<Product>;
  findProductByName: QueryFindProductByNamePage;
  /** Find a document from the collection of 'Ingredient' by its id. */
  findIngredientByID?: Maybe<Ingredient>;
  findRecipeByName: QueryFindRecipeByNamePage;
  allProducts: ProductPage;
  allRecipes: RecipePage;
  /** Find a document from the collection of 'Recipe' by its id. */
  findRecipeByID?: Maybe<Recipe>;
};


export type QueryFindProductByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindProductByNameArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  term: Scalars['String'];
};


export type QueryFindIngredientByIdArgs = {
  id: Scalars['ID'];
};


export type QueryFindRecipeByNameArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
  term: Scalars['String'];
};


export type QueryAllProductsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryAllRecipesArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};


export type QueryFindRecipeByIdArgs = {
  id: Scalars['ID'];
};

/** The pagination object for elements of type 'Product'. */
export type QueryFindProductByNamePage = {
  __typename?: 'QueryFindProductByNamePage';
  /** The elements of type 'Product' in this page. */
  data: Array<Maybe<Product>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

/** The pagination object for elements of type 'Recipe'. */
export type QueryFindRecipeByNamePage = {
  __typename?: 'QueryFindRecipeByNamePage';
  /** The elements of type 'Recipe' in this page. */
  data: Array<Maybe<Recipe>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};

export type Recipe = {
  __typename?: 'Recipe';
  name: Scalars['String'];
  /** The document's ID. */
  _id: Scalars['ID'];
  ingredients: IngredientPage;
  steps: Array<Scalars['String']>;
  /** The document's timestamp. */
  _ts: Scalars['Long'];
};


export type RecipeIngredientsArgs = {
  _size?: Maybe<Scalars['Int']>;
  _cursor?: Maybe<Scalars['String']>;
};

/** Allow manipulating the relationship between the types 'Recipe' and 'Ingredient'. */
export type RecipeIngredientsRelation = {
  /** Create one or more documents of type 'Ingredient' and associate them with the current document. */
  create?: Maybe<Array<Maybe<IngredientInput>>>;
  /** Connect one or more documents of type 'Ingredient' with the current document using their IDs. */
  connect?: Maybe<Array<Maybe<Scalars['ID']>>>;
  /** Disconnect the given documents of type 'Ingredient' from the current document using their IDs. */
  disconnect?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

/** 'Recipe' input values */
export type RecipeInput = {
  name: Scalars['String'];
  ingredients?: Maybe<RecipeIngredientsRelation>;
  steps: Array<Scalars['String']>;
};

/** The pagination object for elements of type 'Recipe'. */
export type RecipePage = {
  __typename?: 'RecipePage';
  /** The elements of type 'Recipe' in this page. */
  data: Array<Maybe<Recipe>>;
  /** A cursor for elements coming after the current page. */
  after?: Maybe<Scalars['String']>;
  /** A cursor for elements coming before the current page. */
  before?: Maybe<Scalars['String']>;
};


export enum Unit {
  Piece = 'Piece',
  Pack = 'Pack',
  Milliliter = 'Milliliter',
  Gram = 'Gram'
}

export type CreateRecipeMutationVariables = Exact<{
  data: RecipeInput;
}>;


export type CreateRecipeMutation = (
  { __typename?: 'Mutation' }
  & { createRecipe: (
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'name' | 'steps'>
    & { ingredients: (
      { __typename?: 'IngredientPage' }
      & { data: Array<Maybe<(
        { __typename?: 'Ingredient' }
        & Pick<Ingredient, 'amount' | 'unit'>
        & { product?: Maybe<(
          { __typename?: 'Product' }
          & Pick<Product, 'name'>
        )> }
      )>> }
    ) }
  ) }
);

export type GetProductQueryVariables = Exact<{
  term: Scalars['String'];
}>;


export type GetProductQuery = (
  { __typename?: 'Query' }
  & { findProductByName: (
    { __typename?: 'QueryFindProductByNamePage' }
    & { data: Array<Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, '_id' | 'name'>
    )>> }
  ) }
);

export type GetProductsQueryVariables = Exact<{
  size?: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetProductsQuery = (
  { __typename?: 'Query' }
  & { allProducts: (
    { __typename?: 'ProductPage' }
    & { data: Array<Maybe<(
      { __typename?: 'Product' }
      & Pick<Product, '_id' | 'name'>
    )>> }
  ) }
);

export type GetRecipeQueryVariables = Exact<{
  term: Scalars['String'];
}>;


export type GetRecipeQuery = (
  { __typename?: 'Query' }
  & { findRecipeByName: (
    { __typename?: 'QueryFindRecipeByNamePage' }
    & { data: Array<Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, 'name' | 'steps'>
      & { ingredients: (
        { __typename?: 'IngredientPage' }
        & { data: Array<Maybe<(
          { __typename?: 'Ingredient' }
          & Pick<Ingredient, 'unit' | 'amount'>
          & { product?: Maybe<(
            { __typename?: 'Product' }
            & Pick<Product, 'name'>
          )> }
        )>> }
      ) }
    )>> }
  ) }
);

export type GetRecipesQueryVariables = Exact<{
  size?: Scalars['Int'];
  cursor?: Maybe<Scalars['String']>;
}>;


export type GetRecipesQuery = (
  { __typename?: 'Query' }
  & { allRecipes: (
    { __typename?: 'RecipePage' }
    & { data: Array<Maybe<(
      { __typename?: 'Recipe' }
      & Pick<Recipe, '_id' | 'name' | 'steps'>
      & { ingredients: (
        { __typename?: 'IngredientPage' }
        & { data: Array<Maybe<(
          { __typename?: 'Ingredient' }
          & Pick<Ingredient, 'amount' | 'unit'>
          & { product?: Maybe<(
            { __typename?: 'Product' }
            & Pick<Product, 'name'>
          )> }
        )>> }
      ) }
    )>> }
  ) }
);

import { IntrospectionQuery } from 'graphql';
export default {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Ingredient",
        "fields": [
          {
            "name": "recipe",
            "type": {
              "kind": "OBJECT",
              "name": "Recipe"
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "amount",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "unit",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "product",
            "type": {
              "kind": "OBJECT",
              "name": "Product"
            },
            "args": []
          },
          {
            "name": "_ts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "IngredientPage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Ingredient"
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "deleteRecipe",
            "type": {
              "kind": "OBJECT",
              "name": "Recipe"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateRecipe",
            "type": {
              "kind": "OBJECT",
              "name": "Recipe"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateIngredient",
            "type": {
              "kind": "OBJECT",
              "name": "Ingredient"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createIngredient",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Ingredient"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteIngredient",
            "type": {
              "kind": "OBJECT",
              "name": "Ingredient"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createProduct",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Product"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "updateProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              },
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "deleteProduct",
            "type": {
              "kind": "OBJECT",
              "name": "Product"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "createRecipe",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Recipe"
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Product",
        "fields": [
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_ts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "ProductPage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Product"
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "findProductByID",
            "type": {
              "kind": "OBJECT",
              "name": "Product"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findProductByName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "QueryFindProductByNamePage"
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "term",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findIngredientByID",
            "type": {
              "kind": "OBJECT",
              "name": "Ingredient"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "findRecipeByName",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "QueryFindRecipeByNamePage"
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "term",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          },
          {
            "name": "allProducts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "ProductPage"
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "allRecipes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "RecipePage"
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "findRecipeByID",
            "type": {
              "kind": "OBJECT",
              "name": "Recipe"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "QueryFindProductByNamePage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Product"
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "QueryFindRecipeByNamePage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Recipe"
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "Recipe",
        "fields": [
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          },
          {
            "name": "ingredients",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "IngredientPage"
              }
            },
            "args": [
              {
                "name": "_size",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              },
              {
                "name": "_cursor",
                "type": {
                  "kind": "SCALAR",
                  "name": "Any"
                }
              }
            ]
          },
          {
            "name": "steps",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Any"
                  }
                }
              }
            },
            "args": []
          },
          {
            "name": "_ts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Any"
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "RecipePage",
        "fields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "OBJECT",
                  "name": "Recipe"
                }
              }
            },
            "args": []
          },
          {
            "name": "after",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          },
          {
            "name": "before",
            "type": {
              "kind": "SCALAR",
              "name": "Any"
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Any"
      }
    ],
    "directives": []
  }
} as unknown as IntrospectionQuery;

export const CreateRecipeDocument = gql`
    mutation createRecipe($data: RecipeInput!) {
  createRecipe(data: $data) {
    name
    ingredients {
      data {
        product {
          name
        }
        amount
        unit
      }
    }
    steps
  }
}
    `;

export function useCreateRecipeMutation() {
  return Urql.useMutation<CreateRecipeMutation, CreateRecipeMutationVariables>(CreateRecipeDocument);
};
export const GetProductDocument = gql`
    query GetProduct($term: String!) {
  findProductByName(term: $term) {
    data {
      _id
      name
    }
  }
}
    `;

export function useGetProductQuery(options: Omit<Urql.UseQueryArgs<GetProductQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetProductQuery>({ query: GetProductDocument, ...options });
};
export const GetProductsDocument = gql`
    query GetProducts($size: Int! = 10, $cursor: String) {
  allProducts(_size: $size, _cursor: $cursor) {
    data {
      _id
      name
    }
  }
}
    `;

export function useGetProductsQuery(options: Omit<Urql.UseQueryArgs<GetProductsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetProductsQuery>({ query: GetProductsDocument, ...options });
};
export const GetRecipeDocument = gql`
    query GetRecipe($term: String!) {
  findRecipeByName(term: $term) {
    data {
      name
      ingredients {
        data {
          product {
            name
          }
          unit
          amount
        }
      }
      steps
    }
  }
}
    `;

export function useGetRecipeQuery(options: Omit<Urql.UseQueryArgs<GetRecipeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRecipeQuery>({ query: GetRecipeDocument, ...options });
};
export const GetRecipesDocument = gql`
    query GetRecipes($size: Int! = 10, $cursor: String) {
  allRecipes(_size: $size, _cursor: $cursor) {
    data {
      _id
      name
      ingredients {
        data {
          amount
          unit
          product {
            name
          }
        }
      }
      steps
    }
  }
}
    `;

export function useGetRecipesQuery(options: Omit<Urql.UseQueryArgs<GetRecipesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRecipesQuery>({ query: GetRecipesDocument, ...options });
};