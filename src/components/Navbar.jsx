// import { Link } from "react-router-dom";
// import useGlobalReducer from "../hooks/useGlobalReducer";

// export const Navbar = () => {
// 	const { store, dispatch } = useGlobalReducer ();

// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">Star Wars Reading Blog</span>
// 				</Link>
// 				<div className="dropdown ml-auto">
// 					<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
// 						Favorites
// 					</button>
// 					<button onClick={()=>console.log(store)}>Log</button>
// 					<ul className="dropdown-menu">
// 						{
// 							store.favorites?.map(favorite => {
// 								if(favorite.name)
// 								return (
// 									<li key={`${favorite.uid}-${favorite.name}`}>
// 										<Link key={favorite.uid} className="dropdown-item" to={`/profile-page/people/${favorite.uid}`}>
// 											{favorite.name}
// 										</Link>
// 									</li>
// 								);
// 							})
// 						}						
// 					</ul>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };

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

        <div className="dropdown ml-auto">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favorites
          </button>
          <button onClick={() => console.log(store)}>Log</button>
          <ul className="dropdown-menu">
            {store.favorites?.map((favorite) => {
              if (!favorite.name) return null;
              return (
                <li
                  key={`${favorite.uid}-${favorite.name}`}
                  className="d-flex justify-content-between align-items-center px-2"
                >
                  <Link
                    className="dropdown-item"
                    to={`/profile-page/people/${favorite.uid}`}
                  >
                    {favorite.name}
                  </Link>
                  {/* Trashcan icon */}
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() =>
                      dispatch({
                        type: "removeFavorite",
                        payload: { uid: favorite.uid, name: favorite.name },
                      })
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-trash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5.5 5.5A.5.5 0 0 1 6 5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zm-1 1A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm3 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
                      <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1 0-2h3.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1H14a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3h11v1h-11V3z" />
                    </svg>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
