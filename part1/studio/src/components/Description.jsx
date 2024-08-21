import styles from "./Description.module.css";
import React from 'react';

class RecipeDescription extends React.Component {
    render () {
        return (
            <div> 
                <div>
                    <h1>No Bake Strawberry Cheesecake for Two</h1>
                    <p>This No Bake Strawberry Cheesecake is the perfect small batch dessert for Valentine's Day, Galentine's Day, or any day the cheesecake craving hits!</p>
                </div>
                <RecipeAuthor />
                </div>
        );
    }
}

function RecipeAuthor() {
    let authorLink = "https://www.budgetbytes.com/";
    let authorPhoto = "https://www.budgetbytes.com/wp-content/uploads/2022/07/Beth-2022-3-536x536.jpg";
    let authorName = "Beth";

    return (
        <div className= {styles.RecipeAuthorBlock}>
            <img src={authorPhoto} alt="Photo of Beth wearing a yellow apron" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Budget Bytes</a>
            </div>
        </div>
    );
}

export default RecipeDescription;