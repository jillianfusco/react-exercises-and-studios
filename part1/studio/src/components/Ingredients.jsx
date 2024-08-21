export default function RecipeIngredients() {
    let ingredients = ["1/2 lb. fresh strawberries", "2 Tbsp granulated sugar", "4 oz. cream cheese, room temperature", "1 Tbsp lemon juice", "1 cup heavy whipping cream"];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className = {styles.ingredientList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    );
}

import styles from './Ingredients.module.css';