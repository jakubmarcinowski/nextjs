"use client";

import React, { createContext, FC, PropsWithChildren, useContext } from "react";
import { CategorySchema } from "@/models/Blog";

export type Data = {
  categories: CategorySchema[];
};

type CategoriesProvider = Data;
type CategoriesContext = Data;

export const CategoriesContext = createContext<CategoriesContext>({
  categories: [],
});

const CategoriesProvider: FC<PropsWithChildren<Data>> = ({
  children,
  categories,
}) => (
  <CategoriesContext.Provider value={{ categories }}>
    {children}
  </CategoriesContext.Provider>
);

const useCategories = () => {
  const context = useContext(CategoriesContext);

  if (!context) {
    throw new Error("useCategories must be wrapped with CategoriesProvider");
  }

  return context;
};

export { CategoriesProvider, useCategories };
