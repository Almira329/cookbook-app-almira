import {Link} from "react-router-dom";

export function HomePage() {
    return (
        <div className="page">
            <div className="hero-simple">
                <div>
                    <p className="hero-label">Smart Recipe Management</p>

                    <h1>Organize Your Recipes Easily</h1>

                    <p>
                        Cook Book helps users keep recipes, ingredients, and cooking
                        instructions organized in one simple place.
                    </p>

                    <Link className="primary-btn" to="/recipes">
                        Explore Recipes
                    </Link>
                </div>

                <div className="hero-info">
                    <h2>Cook Book</h2>
                    <p>Save recipes, search them quickly, and manage your collection.</p>
                </div>
            </div>

            <div className="home-features">
                <div>
                    <h3>Organized</h3>
                    <p>Keep recipes in a clean list.</p>
                </div>

                <div>
                    <h3>Simple</h3>
                    <p>Add, edit, and delete recipes easily.</p>
                </div>

                <div>
                    <h3>Practical</h3>
                    <p>View ingredients and instructions.</p>
                </div>
            </div>

            <div className="quote-section">
                <h2>“Better recipes start with better organization.”</h2>
            </div>
        </div>
    )
}