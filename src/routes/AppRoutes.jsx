import {Route, Routes} from "react-router-dom";
import {HomePage} from "../pages/HomePage.jsx";
import {RecipesPage} from "../pages/RecipesPage.jsx";
import {SingleRecipe} from "../pages/SingleRecipe.jsx";
import {FavoritesPage} from "../pages/FavoritesPage.jsx";
import {RecipesContextProvider} from "../context/recipesContext.jsx";

export function AppRoutes() {
    return (
        <RecipesContextProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/recipes" element={<RecipesPage />} />
                <Route path="/recipes/:id" element={<SingleRecipe />} />
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </RecipesContextProvider>
    )
}