import './App.css';
import Footer from './components/Footer';
import RecipeList from './components/RecipeList';
import RecipeSection from './components/RecipeSection';
import { ingredients } from './constants';

function App() {
  return (
    <main className='container'>
      <article className='recipe'>
        <header className='recipe__header'>
          <img
            src='image-omelette.jpeg'
            alt='Image of Omelette'
            className='recipe__image'
          />
          <h1 className='recipe__title'>Simple Omelette Recipe</h1>
          <p className='recipe__caption'>
            An easy and quick dish, perfect for any meal. This classic omelette
            combines beaten eggs cooked to perfection, optionally filled with
            your choice of cheese, vegetables, or meats.
          </p>
        </header>
        <section className='recipe__preparation'>
          <h3>Preparation time</h3>
          <ul>
            <li>
              <strong>Total</strong>: Approximately 10 minutes
            </li>
            <li>
              <strong>Preparation</strong>: 5 minutes
            </li>
            <li>
              <strong>Cooking</strong>: 5 minutes
            </li>
          </ul>
        </section>
        <RecipeSection header='Ingredients'>
          <RecipeList listType='unordered'>
            {ingredients.map((ingredient) => (
              <li key={ingredient}>{ingredient}</li>
            ))}
          </RecipeList>
        </RecipeSection>
        <hr className='separator' />
        <RecipeSection header='Instructions'>
          <RecipeList listType='ordered'>
            <li>
              <strong>Beat the eggs</strong>: In a bowl, beat the eggs with a
              pinch of salt and pepper until they are well mixed. You can add a
              tablespoon of water or milk for a fluffier texture.
            </li>
            <li>
              <strong>Heat the pan</strong>: Place a non-stick frying pan over
              medium heat and add butter or oil.
            </li>
            <li>
              <strong>Cook the omelette</strong>: Once the butter is melted and
              bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly
              coat the surface.
            </li>
            <li>
              <strong>Add fillings (optional)</strong>: When the eggs begin to
              set at the edges but are still slightly runny in the middle,
              sprinkle your chosen fillings over one half of the omelette.
            </li>
            <li>
              <strong>Fold and serve</strong>: As the omelette continues to
              cook, carefully lift one edge and fold it over the fillings. Let
              it cook for another minute, then slide it onto a plate.
            </li>
            <li>
              <strong>Enjoy</strong>: Serve hot, with additional salt and pepper
              if needed.
            </li>
          </RecipeList>
        </RecipeSection>
        <hr className='separator' />
        <RecipeSection header='Nutrition'>
          <p className='typography-4'>
            The table below shows nutritional values per serving without the
            additional fillings.
          </p>
          <table>
            <tbody className='recipe__nutrition'>
              <tr>
                <td className='typography-4'>Calories</td>
                <td className='typography-4-bold'>277kcal</td>
              </tr>
              <tr>
                <td className='typography-4'>Carbs</td>
                <td className='typography-4-bold'>0g</td>
              </tr>
              <tr>
                <td className='typography-4'>Protein</td>
                <td className='typography-4-bold'>20g</td>
              </tr>
              <tr>
                <td className='typography-4'>Fat</td>
                <td className='typography-4-bold'>22g</td>
              </tr>
            </tbody>
          </table>
        </RecipeSection>
      </article>
      <Footer />
    </main>
  );
}

export default App;
