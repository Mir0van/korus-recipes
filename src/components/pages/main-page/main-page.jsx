// import PropTypes from 'prop-types';
import { Button } from "antd";

// MainPage.propTypes = {
//   recipes: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired
//   })).isRequired
// };

export default function MainPage({recipes}) {
  console.log('props', recipes)
  // const isLoading = !recipes || !recipes.length;

  return (
    <>
      {/* {isLoading ? (
        <p>Идет загрузка рецептов...</p>
      ) : (
        recipes.map((recipe) => {
          return (
            <p key={recipe.id}>{recipe.name}</p>
          )
        })
      )} */}
      <Button type="primary" href="#">Button</Button>
    </>
  );
}