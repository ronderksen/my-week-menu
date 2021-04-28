import * as React from "react";
import { Formik, Field } from "formik";
import { Ingredient, useGetProductQuery } from "../../src/generated/graphql";
import { useState } from "react";
import { ProductComboBox } from "../../src/components/ProductComboBox";

interface NewRecipeFormFields {
  name: string;
  ingredients: Ingredient[];
  steps: String[];
}

const NewRecipePage = () => {
  const [searchTerm, updateSearchTerm] = useState("");
  const options = {
    variables: { term: searchTerm }
  };
  const [response, refetchQuery] = useGetProductQuery(options);

  const updateProducts = (event) => {
    const { value } = event.currentTarget;
    updateSearchTerm(value);
  };

  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues: NewRecipeFormFields = {
    name: "",
    ingredients: [],
    steps: [],
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {(formik) => {
        return (
          <form onSubmit={formik.handleSubmit} className="w-1/2">
            <label htmlFor="name" className="flex mb-4">
              <span className="w-1/4 flex-grow">Name</span>
              <Field className="w-3/4 field flex-grow" name="name" />
            </label>
            <ProductComboBox label="Ingredients" />
            <label htmlFor="steps" className="flex mb-4">
              <span className="w-1/4 flex-grow">Steps</span>
              <Field className="w-3/4 h-32 field flex-grow" as="textarea" name="steps" />
            </label>
            <div className="flex mb-4 justify-end">
              <button type="submit" className="btn">
                Submit
              </button>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export default NewRecipePage;
