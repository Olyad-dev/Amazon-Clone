import React from 'react'
import classes from "./category.module.css";
import { CategoryImage } from "./CategoryInfos.js";
import CategoryCard from './CategoryCard';
function Category() {
  return (
    <section className={classes.category_container}>
        {
CategoryImage.map((infos, i) => (
        <CategoryCard key={i} data={infos} />
))}
    </section>
  )
}

export default Category
