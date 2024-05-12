import { Section, SectionWrapper, ContentWrapper, SelectWrapper, HiddenTitle, SelectText, ResetButton, LuckyWrapper, LuckyText, DescriptionWrapper, StyledSelect, StyledRadioButton } from "./styled"
import { Radio, Form, Button } from 'antd';
import introImage from "../../../assets/img/intro.jpg"
import selectIcon from "../../../assets/img/icon-arrow-bottom.svg"
import { Typography } from 'antd';
import { useState } from "react";


export default function Intro({initRecipes, recipes, setFiltredRecipes}) {
  const { Text } = Typography;
  const [form] = Form.useForm();

  const [selectedCuisine, setSelectedCuisine] = useState("All");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedDifficulty, setSelectedDifficulty] = useState("All");

  console.log('recipes', recipes)

  const filterRecipes = (data, difficultyStatus, cusineStatus, typeStatus) => {
    return data.filter((recipe) => {
      const difficultyCheck = difficultyStatus === 'All' ? true : recipe.difficulty === difficultyStatus;
      const cuisineCheck = cusineStatus === 'All' ? true : recipe.cuisine === cusineStatus;
      const typeCheck = typeStatus === 'All' ? true : recipe.mealType.includes(typeStatus);

      return difficultyCheck && cuisineCheck && typeCheck;
    });
  }

  const onReset = () => {
    form.resetFields();
    setSelectedCuisine("All");
    setSelectedType("All");
    setSelectedDifficulty("All");
    setFiltredRecipes(initRecipes)
  };

  const onCusineChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedCuisine(value);

    const filteredRecipes = filterRecipes(initRecipes, selectedDifficulty, value, selectedType)
  
    setFiltredRecipes(filteredRecipes);
  };

  const onTypeChange = (value) => {
    console.log(`selected ${value}`);
    setSelectedType(value);

    const filteredRecipes = filterRecipes(initRecipes, selectedDifficulty, selectedCuisine, value)
  
    setFiltredRecipes(filteredRecipes);
  };

  const onDifficultyChange = (evt) => {
    console.log(`radio checked:${evt.target.value}`);
    setSelectedDifficulty(evt.target.value);

    const filteredRecipes = filterRecipes(initRecipes, evt.target.value, selectedCuisine, selectedType)
  
    setFiltredRecipes(filteredRecipes);
  };  

  return(
    <>
      <Section>
        <HiddenTitle level={2}>Фильтр рецептов</HiddenTitle>
        <SectionWrapper>
          <DescriptionWrapper>
            <img src={introImage} width={369} height={160} alt="Сборник рецептов" />
            <ContentWrapper>
              <Text>
                В нашей жизни, когда время становится все более ценным ресурсом, задача планирования приема пищи становится все более сложной.
              </Text>
              <Text>
                Часто мы сталкиваемся с дилеммой: что приготовить на завтрак, обед или ужин? Каким образом мы можем легко и быстро определиться с выбором блюда и не тратить много времени на принятие этого решения?
              </Text>
              <Text>
                Наш сервис поможет: выбирайте параметры - и вперед!
              </Text>
            </ContentWrapper>
          </DescriptionWrapper>
          <Form
            form={form}
            name="recipes-filter"
          >
            <Form.Item 
              name="cusine"
              style={{margin: 0}}
            >
              <SelectWrapper>
                <SelectText>Кухня:</SelectText>
                <StyledSelect
                  defaultValue="All"
                  onChange={onCusineChange}
                  suffixIcon={<img src={selectIcon} width={10} height={11} alt="" aria-hidden="true" />}
                  options={[
                    { value: 'All', label: 'Все страны и регионы' },
                    { value: 'Italian', label: 'Итальянская' },
                    { value: 'Asian', label: 'Азиатская' },
                    { value: 'American', label: 'Американская' },
                    { value: 'Mediterranean', label: 'Средиземноморская' },
                    { value: 'Pakistani', label: 'Пакистанская' },
                    { value: 'Japanese', label: 'Японская' },
                    { value: 'Moroccan', label: 'Марокканская' },
                    { value: 'Korean', label: 'Корейская' },
                    { value: 'Greek', label: 'Греческая' },
                    { value: 'Thai', label: 'Тайская' },
                    { value: 'Indian', label: 'Индийская' },
                    { value: 'Turkish', label: 'Турецкая' },
                    { value: 'Russian', label: 'Русская' },
                    { value: 'Lebanese', label: 'Ливанская' },
                    { value: 'Brazilian', label: 'Бразильская' },
                    { value: 'Smoothie', label: 'Смузи' },
                  ]}
                />
              </SelectWrapper>
            </Form.Item>
            <Form.Item
              name="type"
              style={{margin: 0}}
            >
              <SelectWrapper>
                <SelectText>Тип блюда:</SelectText>
                <StyledSelect
                  defaultValue="All"
                  onChange={onTypeChange}
                  suffixIcon={<img src={selectIcon} width={10} height={11} alt="" aria-hidden="true" />}
                  options={[
                    { value: 'All', label: 'Все типы' },
                    { value: 'Breakfast', label: 'Завтрак' },
                    { value: 'Lunch', label: 'Обед' },
                    { value: 'Dinner', label: 'Ужин' },
                    { value: 'Side Dish', label: 'Гарнир' },
                    { value: 'Dessert', label: 'Десерт' },
                    { value: 'Snack', label: 'Закуска' },
                    { value: 'Appetizer', label: 'Аперитив' },
                    { value: 'Snacks', label: 'Закуски' },
                    { value: 'Beverage', label: 'Напиток' },
                  ]}
                />
              </SelectWrapper>
            </Form.Item>
            <Form.Item
              name="difficulty"
              style={{margin: 0}}
            >
              <SelectWrapper>
                <SelectText>Сложность приготовления:</SelectText>
                <Radio.Group onChange={onDifficultyChange} defaultValue="All" buttonStyle="solid" style={{display: 'flex'}}>
                  <StyledRadioButton value="All" >Любая</StyledRadioButton>
                  <StyledRadioButton value="Easy">Низкая</StyledRadioButton>
                  <StyledRadioButton value="Medium">Средняя</StyledRadioButton>
                  <StyledRadioButton value="Hard" style={{}} disabled>Высокая</StyledRadioButton>
                </Radio.Group>
              </SelectWrapper>
            </Form.Item>
            <ResetButton 
              htmlType="reset" 
              type="link" 
              onClick={onReset}
              disabled={selectedCuisine === "All" && selectedType === "All" && selectedDifficulty === "All"}
            >
              Сбросить все фильтры
            </ResetButton>
          </Form>
          <LuckyWrapper>
            <LuckyText>А еще можно попробовать на вкус удачу</LuckyText>
            <Button style={{opacity: 0.5}}>Мне повезет!</Button>
          </LuckyWrapper>
        </SectionWrapper>
      </Section>
    </>
  )
}