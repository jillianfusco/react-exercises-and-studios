import recipedata from "./recipe.json";

function RecipeImage() {
   return (
    <>
      {recipedata.map((recipe, index) => (
        <div key={index}>
          <img src={recipe.recipeImage} alt={recipe.name} className="recipeImage" />
        </div>
      ))}
    </>
   );
 }
 
 export default RecipeImage;
 
 //import json file for the data
 //apply css for className recipeImage
 