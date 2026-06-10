import {Link} from "react-router-dom";

export function Navbar() {
    return (
        <nav className="navbar">
            <h2>Cook Book</h2>

            <div>
                <Link to="/">Home</Link>
                <Link to="/recipes">Recipes</Link>
                <Link to="/favorites">Favorites</Link>
            </div>
        </nav>
    )
}