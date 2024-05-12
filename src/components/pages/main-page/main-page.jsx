import {Container} from "../../styled/index"
import { MainWrapper } from "./styled";
import Intro from "../../blocks/intro/intro";
import Recipes from "../../blocks/recipes/recipes";
import { useState, useEffect } from "react";

export default function MainPage({recipes}) {
  const [filtredRecipes, setFiltredRecipes] = useState(recipes)

  useEffect(() => {
    if (recipes && recipes.length) {
      setFiltredRecipes(recipes);
    }
  }, [recipes]);

  return (
    <>
      <Container>
        <MainWrapper>
          <Intro initRecipes={recipes} recipes={filtredRecipes} setFiltredRecipes={setFiltredRecipes}></Intro>
          <Recipes recipes={filtredRecipes}></Recipes>
        </MainWrapper>
      </Container>

    </>
  );
}