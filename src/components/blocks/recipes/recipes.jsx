import { Section, SectionTitle, TitleWrapper, CardsWrapper, CardsList} from "./styled"
import { Typography, Pagination, Flex } from 'antd';
import Recipe from "../../ui/recipe/recipe";
import { useState, useEffect } from "react";

export default function Recipes({recipes}) {
  // console.log('Recipes{recipes}', recipes)
  const { Text } = Typography;
  const isLoading = !recipes || !recipes.length;
  
  const [currentPage, setCurrentPage] = useState(1);
  const [isloadRecipes, setIsloadRecipes] = useState(false);

  useEffect(() => {
    // меняет текст при пустом recipes после загрузки данных и их отрисовки
    if (!isLoading) {
      setIsloadRecipes(true)
    }
  }, [isLoading])

  useEffect(() => {
    // Переход на первую страницу при изменении фильтров
    setCurrentPage(1);
  }, [recipes]);

  const pageSize = 6;
  const totalRecipes = recipes ? recipes.length : 0;
  const startRecipesArray = (currentPage - 1) * pageSize;
  const endRecipesArray = Math.min(startRecipesArray + pageSize, totalRecipes);

  const onPaginationChange = (page) => {
    console.log(`page selected ${page}`);
    setCurrentPage(page);
  };

  console.log('isloadRecipes', isloadRecipes)

  return(
    <>
      <Section>
        <TitleWrapper>
          <SectionTitle level={2} >Найденные рецепты</SectionTitle>
          <Text type="secondary">{isLoading ? 0 : recipes.length }</Text>
        </TitleWrapper>
        <CardsWrapper>
          <CardsList>
            {isLoading ? (
              <p>{isloadRecipes ? 'По такому фильтру рецепты не найдены =((' : 'Идет загрузка рецептов...' }</p>
            ) : (
              recipes
                .slice(startRecipesArray, endRecipesArray)
                .map((recipe) => {
                return (
                  <Recipe 
                    key={recipe.id}
                    recipe={recipe}
                  />
                )
              })
            )}
          </CardsList>
          {isLoading ? null : 
            (<Flex justify="center" style={{marginBottom: 12}}>
            <Pagination 
              defaultCurrent={1}
              current={currentPage} 
              showSizeChanger={false}
              defaultPageSize={pageSize}
              pageSize={pageSize} 
              total={totalRecipes}
              onChange={onPaginationChange}
            />
            </Flex>
          )}
        </CardsWrapper>
      </Section>
    </>
  )
}