import { useEffect, useState } from "react";
import { AddCategory, GiftGrid, GetRandomCategory } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState([]);
  const [randomCategory, setRandomCategory] = useState(true);

  const onAddCategory = (newCategory) => {
    if (
      categories.some(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    )
      return;

    setCategories([newCategory, ...categories]);
  };

  const onShowRandomCategory = () => {
    setRandomCategory(!randomCategory);
  };

  return (
    <>
      <h2 className="ttulo-h2">GiftExpertApp</h2>

      <AddCategory onNewValue={onAddCategory} />

      <hr />

      <button className="search-button" onClick={() => setCategories([])}>
        Clear
      </button>

      {categories.map((categorias) => (
        <GiftGrid key={categorias} category={categorias} />
      ))}
      {randomCategory && <GetRandomCategory />}
    </>
  );
};

export default GiftExpertApp;
