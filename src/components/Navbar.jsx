import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
  const { store, dispatch } = useGlobalReducer();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Star Wars Reading Blog</span>
        </Link>
        <div className="dropdown ms-auto">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
          </button>
          <ul className="dropdown-menu">
            {store.favorites.map(fav => (
              <li key={`${fav.uid}-${fav.category}`} className="d-flex justify-content-between align-items-center">
                <Link className="dropdown-item" to={`/profile-page/${fav.category}/${fav.uid}`}>
                  {fav.name}
                </Link>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => dispatch({ type: "removeFavorite", payload: { uid: fav.uid, category: fav.category } })}
                >
                  🗑️
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
