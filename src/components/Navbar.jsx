import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";

export const Navbar = () => {
	const { store, dispatch } = useGlobalReducer ();

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Star Wars Reading Blog</span>
				</Link>
				<div className="dropdown ml-auto">
					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
						Favorites
					</button>
					<ul className="dropdown-menu">
						{
							store.favorites.map(favorite => {
								return (
									<li key={favorite.uid}>
										<Link className="dropdown-item" to={`/profile-page/people/${favorite.uid}`}>
											{favorite.name}
										</Link>
									</li>
								);
							})
						}



						
					</ul>
				</div>
			</div>
		</nav>
	);
};