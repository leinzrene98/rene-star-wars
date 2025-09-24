import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchAllPeople, fetchAllPlanets, fetchAllVehicles } from "../lib/fetch";
import { CharacterCardList } from "../components/CharacterCardList";
import { PlanetCardList } from "../components/PlanetCardList";
import { VehicleCardList } from "../components/VehicleCardList";

export const StarWarsLandingPage = () => {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    fetchAllPeople(dispatch);
    fetchAllPlanets(dispatch);
    fetchAllVehicles(dispatch);
  }, []);

  return (
    <div className="row my-5">
      <div className="col-1"></div>
      <div className="col-10">
        <h1>Characters</h1>
        <CharacterCardList allpeople={store.allPeople} dispatch={dispatch} favorites={store.favorites} />

        <h1 className="mt-5">Planets</h1>
        <PlanetCardList allplanets={store.allPlanets} dispatch={dispatch} favorites={store.favorites} />

        <h1 className="mt-5">Vehicles</h1>
        <VehicleCardList allvehicles={store.allVehicles} dispatch={dispatch} favorites={store.favorites} />
      </div>
      <div className="col-1"></div>
    </div>
  );
};

