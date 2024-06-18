import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://www.thecocktaildb.com/api/json/v1/1"
// "https://www.thecocktaildb.com/api/json/v1/1/random.php"

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/", async (req, res) => {
    const response = await axios.get(API_URL + "/random.php")
    const cocktail = response.data
    const content = {
        alchohol : cocktail.drinks[0].strAlcoholic,
        instruction: cocktail.drinks[0].strInstructions,
        name: cocktail.drinks[0].strDrink,
        image: cocktail.drinks[0].strDrinkThumb,
        category: cocktail.drinks[0].strCategory,
        ingredient1: cocktail.drinks[0].strIngredient1,
        ingredient2: cocktail.drinks[0].strIngredient2,
        ingredient3: cocktail.drinks[0].strIngredient3,
    }
    console.log(cocktail)
    console.log(content)
    res.render("index.ejs", {data: content});
})

app.post("/submit", async (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

