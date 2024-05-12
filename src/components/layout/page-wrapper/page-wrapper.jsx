import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import MainPage from "../../pages/main-page/main-page";
import RecipePage from "../../pages/recipe-page/recipe-page";
import NotFoundPage from "../../pages/404/404";
import { Wrapper } from "./styled";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Button, Result } from "antd";

export default function PageWrapper() {
  const [recipes, setRecipes] = useState(null);
  const [headerTitle, setHeaderTitle] = useState('');

  useEffect(() => {
    axios
      .get('https://dummyjson.com/recipes')
      .then(response => {
        setRecipes(response.data.recipes);
      })
      .catch(error => console.error('Ошибка при получении данных:', error));
  }, []);

  return(
    <>
      <Wrapper>
        <BrowserRouter>
          <Routes>
            <Route
              index 
              path="/"
              element={
                <>
                  <Header>Сборник рецептов из разных стран мира</Header>
                  <main>
                    <MainPage recipes={recipes}/>
                  </main>
                </>
              }
            />
            <Route path="recipe">
              <Route 
                path=":id"
                element={
                  <>
                    <Header isBackLinkActive setHeaderTitle={setHeaderTitle}>{headerTitle}</Header>
                    <main>
                      <RecipePage recipes={recipes} setHeaderTitle={setHeaderTitle}/>
                    </main>
                  </>
                }
              />
            </Route>
            <Route 
              path="*" 
              element={<NotFoundPage/>} 
            />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </>
  );
}