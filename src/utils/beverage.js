export function getIngredients(beverage) {
    const ingredients = [];
    const bever = Object
                    .getOwnPropertyNames(beverage)
                    .filter(item => item.match("strIngredient"));
    for (let i = 0; i < bever.length; i++) {
        const ingredientIndex = bever[i].toString();
        const ingredient = beverage[ingredientIndex];
        if (ingredient) {
            ingredients.push(ingredient);
        }
    }
    return ingredients;
}