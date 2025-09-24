import { PlanetCard } from "./PlanetCard";

export const PlanetCardList = ({ allplanets, dispatch, favorites }) => (
  <div className="row d-flex flex-nowrap overflow-auto">
    {allplanets.map(planet => (
      <PlanetCard key={planet.uid} uid={planet.uid} name={planet.name} dispatch={dispatch} favorites={favorites} />
    ))}
  </div>
);
