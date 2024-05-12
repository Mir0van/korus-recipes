import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "../../styled/index";
import iconCircle from "../../../assets/img/icon-circle.svg"
import { Button, Result } from 'antd';
import { NavLink } from "react-router-dom"
import NotFoundPage from "../404/404";
import 
  {
   Wrapper,
   Column,
   SectionTitle,
   TextContainer,
   TextWrapper,
   TextWrapperSecondary,
   Section,
   AntdTitle as Title,
   AntdText as Text,
   AntdTextSecondary as TextSecondary,
   StyledTimeline,
   StyledImage,
   ImageWrapper,
   ColumnSecondary,
   ButtonsWrapper
  } from "./styled";

export default function RecipePage({recipes, setHeaderTitle}) {
  const { id } = useParams();
  const recipeData = recipes && recipes.length && recipes.find((recipe) => recipe.id.toString() === id)

  useEffect(() => {
    if (recipeData) {
      setHeaderTitle(recipeData.name);
    }
  }, [recipeData, setHeaderTitle]);


  // console.log('recipeData', recipeData)
  // console.log('+id', +id)

  return recipeData ? (
    <Section>
      <SectionTitle level={2}>Описание рецепта</SectionTitle>
      <Container>
        <Wrapper>

          <Column>
            <TextContainer>
              <TextWrapper>
                <Title level={3}>Кухня</Title>
              </TextWrapper>
              <TextWrapperSecondary>
                <Text>{recipeData && recipeData.cuisine}</Text>
              </TextWrapperSecondary>
            </TextContainer>
            <TextContainer>
              <TextWrapper>
                <Title level={3}>Теги</Title>
              </TextWrapper>
              <TextWrapperSecondary>
                <TextSecondary type="secondary">{recipeData && recipeData.tags.map(tag => `#${tag}`).join(', ')}</TextSecondary>
              </TextWrapperSecondary>
            </TextContainer>
            <TextContainer>
              <TextWrapper>
                <Title level={3}>Калорийность</Title>
              </TextWrapper>
              <TextWrapperSecondary>
                <Text>{recipeData && recipeData.caloriesPerServing + ' ккал'}</Text>
                <TextSecondary type="secondary">100 грамм</TextSecondary>
              </TextWrapperSecondary>
            </TextContainer>
            <TextContainer>
              <TextWrapper>
                <Title level={3}>Количество порций</Title>
              </TextWrapper>
              <TextWrapperSecondary>
                <Text style={{fontWeight: 700, fontSize: 20, lineHeight: 1.2}}>{recipeData && recipeData.servings}</Text>
              </TextWrapperSecondary>
            </TextContainer>
            <TextContainer style={{flexGrow: 1}}>
              <TextWrapper>
                <Title level={3}>Описание</Title>
              </TextWrapper>
              <TextWrapperSecondary style={{minHeight: 208}}>
                <TextSecondary type="secondary" style={{fontSize: 14, lineHeight: 1.15}}>{recipeData && recipeData.instructions.join(' ')}</TextSecondary>
              </TextWrapperSecondary>
            </TextContainer>
          </Column>

          <Column>
            <TextContainer>
              <TextWrapper>
                <Title level={3}>Общее время приготовления</Title>
              </TextWrapper>
              <TextWrapperSecondary>
                <Text>{recipeData && recipeData.cookTimeMinutes + ' минут'}</Text>
              </TextWrapperSecondary>
            </TextContainer>
            <TextContainer style={{flexGrow: 1}}>
              <TextWrapper>
                <Title level={3}>Инструкции по приготовлению</Title>
              </TextWrapper>
              <TextWrapperSecondary>
                <StyledTimeline
                  items={recipeData && recipeData.instructions.map(item => ({ children: item, dot: <img src={iconCircle} width="10" height="10" alt="" /> }))}
                />
              </TextWrapperSecondary>
            </TextContainer>
          </Column>

          <ColumnSecondary>
            <ImageWrapper>
              <StyledImage
                src={recipeData && recipeData.image}
              />
            </ImageWrapper>
            <ButtonsWrapper>
              <NavLink to={`/recipe/${+id <= 1 ? recipes && recipes.length : +id - 1}`}>
                <Button style={{padding: '4px 11px'}}>
                  <svg style={{display: 'block'}} width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.33962 2.06621V1.03094C7.33962 0.941211 7.2365 0.891658 7.16685 0.946568L1.12935 5.66219C1.07805 5.70209 1.03655 5.75317 1.00799 5.81154C0.979442 5.86992 0.9646 5.93404 0.9646 5.99902C0.9646 6.06401 0.979442 6.12813 1.00799 6.18651C1.03655 6.24488 1.07805 6.29596 1.12935 6.33585L7.16685 11.0515C7.23783 11.1064 7.33962 11.0568 7.33962 10.9671V9.93184C7.33962 9.86621 7.30882 9.80327 7.25792 9.76309L2.43649 5.99969L7.25792 2.23496C7.30882 2.19478 7.33962 2.13184 7.33962 2.06621Z"/>
                  </svg>
                </Button>
              </NavLink>
              {/* проверяет есть ли массив рецептов, если нет то null. потом смотрит "+id > recipes.length - 1" если да то на 1ую стр если нет то листает дальше */}
              <NavLink to={`/recipe/${recipes && recipes.length ? +id > recipes.length - 1 ? 1 : +id + 1 : null}`}>
                <Button style={{padding: '4px 11px'}}>
                  <svg style={{display: 'block'}} width="8" height="12" viewBox="0 0 8 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.89777 5.66281L0.860269 0.947189C0.844493 0.934768 0.825533 0.92705 0.805568 0.924919C0.785603 0.922788 0.765441 0.926332 0.747399 0.935143C0.729357 0.943955 0.714166 0.957676 0.703571 0.974732C0.692976 0.991787 0.687406 1.01149 0.687501 1.03156V2.06683C0.687501 2.13246 0.718305 2.1954 0.769198 2.23558L5.59063 6.00031L0.769198 9.76505C0.716966 9.80522 0.687501 9.86817 0.687501 9.9338V10.9691C0.687501 11.0588 0.790626 11.1083 0.860269 11.0534L6.89777 6.33781C6.94908 6.29779 6.9906 6.24658 7.01915 6.1881C7.0477 6.12962 7.06254 6.06539 7.06254 6.00031C7.06254 5.93523 7.0477 5.87101 7.01915 5.81253C6.9906 5.75404 6.94908 5.70284 6.89777 5.66281Z"/>
                  </svg>
                </Button>
              </NavLink>
            </ButtonsWrapper>
          </ColumnSecondary>

        </Wrapper>
      </Container>
    </Section>
  ) : (
    <NotFoundPage/>
  )
}