import * as React from "react";
import clx from "clsx";
import { useCombobox } from "downshift";
import { useState } from "react";
import { useGetProductQuery } from "../../generated/graphql";

interface ProductComboBoxProps {
  label: string;
}

export const ProductComboBox: React.FC<ProductComboBoxProps> = ({ label }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const options = {
    variables: { term: searchTerm }
  };
  const [response, refetchQuery] = useGetProductQuery(options);

  const products = response.data?.findProductByName?.data || [];

  const inputItems = products.map(product => product.name);

  const {
    isOpen,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getInputProps,
    getComboboxProps,
    highlightedIndex,
    getItemProps
  } = useCombobox({
    items: inputItems,
    onInputValueChange: ({ inputValue }) => {
      setSearchTerm(inputValue);
    }
  });

  return <div className="flex mb-4">
    <label className="w-1/4 flex-grow" {...getLabelProps()}>{label}</label>
    <div className="w-3/4 flex-grow">
      <div class="relative" {...getComboboxProps()}>
        <input {...getInputProps()}
               className={clx(isOpen && "border-b-0 rounded-b-none", "p-2 w-full border border-darkCyan rounded focus-within:outline-none")} />
        <button
          className="absolute right-2 top-2"
          type="button"
          {...getToggleButtonProps()}
          aria-label="toggle menu"
        >
          &#8595;
        </button>
      </div>
      <ul className={clx(isOpen && "border border-t-0 border-darkCyan rounded-b")} {...getMenuProps()}>
        {isOpen &&
        inputItems.map((item, index) => (
          <li
            className={clx("p-2",
              highlightedIndex === index && "bg-magicMint")
            }
            key={`${item}${index}`}
            {...getItemProps({ item, index })}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>;
};
