import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSinglePerson } from "../lib/fetch";

export const PeopleProfilePage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();

  useEffect(() => {
    fetchSinglePerson(uid, dispatch);
  }, [uid]);

  const person = store.singlePerson;

  if (!person) return <div>Loading character...</div>;

  return (
    <div className="container my-5">
      <h1>{person.name}</h1>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/people/${uid}.jpg?raw=true`}
        alt={person.name}
        style={{ width: "300px" }}
      />
      <ul className="list-group mt-3">
        <li className="list-group-item"><strong>Height:</strong> {person.height}</li>
        <li className="list-group-item"><strong>Mass:</strong> {person.mass}</li>
        <li className="list-group-item"><strong>Hair Color:</strong> {person.hair_color}</li>
        <li className="list-group-item"><strong>Skin Color:</strong> {person.skin_color}</li>
        <li className="list-group-item"><strong>Eye Color:</strong> {person.eye_color}</li>
        <li className="list-group-item"><strong>Birth Year:</strong> {person.birth_year}</li>
        <li className="list-group-item"><strong>Gender:</strong> {person.gender}</li>
      </ul>
    </div>
  );
};
