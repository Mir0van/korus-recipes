import { RecipeItem, DescriptionWrapper, ImageWrapper, TitleWrapper, AntdTitle as Title, AntdDescription as TextDescription, AntdText as Text, DefinitionWrapper, DefinitionWrapperClock, DefinitionWrapperStar, StyledLink } from "./styled";
import cardImage from "../../../assets/img/dish.jpg"
import clockImage from "../../../assets/img/icon-clock.svg"
import starImage from "../../../assets/img/icon-star.svg"
import starFilledImage from "../../../assets/img/icon-star-filled.svg"
import { useState } from 'react';

export default function Recipe({recipe}) {
  // console.log(recipe)
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const difficultyLevels = {
    Easy: 1,
    Medium: 2,
    Hard: 3,
  };

  return (
    <>
      <RecipeItem>
        <StyledLink to={`/recipe/${recipe.id}`}>
          <TitleWrapper>
            <Title level={3}>{recipe.name}</Title>
          </TitleWrapper>
          <ImageWrapper>
            {isImageLoaded ? (
              <img
                src={recipe.image}
                width={226}
                height={294}
                alt="Блюдо."
                loading="lazy"
              />
            ) : (
              <img
                src={cardImage}
                width={226}
                height={294}
                alt="Блюдо."
                loading="lazy"
                onLoad={() => setIsImageLoaded(true)}
              />
            )}
          </ImageWrapper>
        </StyledLink>
        <DescriptionWrapper>
          <TextDescription type="secondary">
            {recipe.instructions.join(' ')}
          </TextDescription>
          <DefinitionWrapperClock>
            <img src={clockImage} width="22" height="22" alt="Время." />
            <Text>{recipe.cookTimeMinutes} минут</Text>
          </DefinitionWrapperClock>
          <DefinitionWrapper>
            <Text>Сложность</Text>
            <DefinitionWrapperStar>
              {Array.from({ length: 3 }).map((_, index) => (
                <img
                  key={index}
                  src={index < difficultyLevels[recipe.difficulty] ? starFilledImage : starImage}
                  width="21"
                  height="19"
                  alt="Активная звезда."
                />
              ))}
            </DefinitionWrapperStar>
          </DefinitionWrapper>
          <Text>{recipe.cuisine + ' cuisine'}</Text>
          <Text>{recipe.mealType.join(', ')}</Text>
        </DescriptionWrapper>
      </RecipeItem>
    </>
  )
}