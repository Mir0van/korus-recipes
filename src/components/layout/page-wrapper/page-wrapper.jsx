import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import MainPage from "../../pages/main-page/main-page";
import { Wrapper } from "./styled";

export default function PageWrapper() {
  const [recipes, setRecipes] = useState(null);
  // const [isloadRecipes, setIsloadRecipes] = useState(false);

  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes')
      .then(response => {
        setRecipes(response.data.recipes);
        // setIsloadRecipes(true)
      })
      .catch(error => console.error('Ошибка при получении данных:', error));
  }, []);
  return(
    <>
      <Wrapper>
        <Header />
        <main>
          <MainPage recipes={recipes}/>
        </main>
      </Wrapper>
    </>
  );
}