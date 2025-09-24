import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSinglePlanet } from "../lib/fetch";

export const PlanetProfilePage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();

  useEffect(() => {
    fetchSinglePlanet(uid, dispatch);
  }, [uid]);

  const planet = store.singlePlanet;

  if (!planet) return <div>Loading planet...</div>;

  return (
    <div className="container my-5">
      <h1>{planet.name}</h1>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/planet/${uid}.jpg?raw=true`}
        alt={planet.name}
        style={{ width: "300px" }}
      />
      <ul className="list-group mt-3">
        <li className="list-group-item"><strong>Climate:</strong> {planet.climate}</li>
        <li className="list-group-item"><strong>Diameter:</strong> {planet.diameter}</li>
        <li className="list-group-item"><strong>Gravity:</strong> {planet.gravity}</li>
        <li className="list-group-item"><strong>Orbital Period:</strong> {planet.orbital_period}</li>
        <li className="list-group-item"><strong>Population:</strong> {planet.population}</li>
        <li className="list-group-item"><strong>Terrain:</strong> {planet.terrain}</li>
      </ul>
    </div>
  );
};
