import { CharacterCard } from "./CharacterCard";

export const CharacterCardList = ({ allpeople, dispatch, favorites }) => (
  <div className="row d-flex flex-nowrap overflow-auto">
    {allpeople.map(person => (
      <CharacterCard key={person.uid} uid={person.uid} name={person.name} dispatch={dispatch} favorites={favorites} />
    ))}
  </div>
);
