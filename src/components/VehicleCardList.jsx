import { VehicleCard } from "./VehicleCard";

export const VehicleCardList = ({ allvehicles, dispatch, favorites }) => (
  <div className="row d-flex flex-nowrap overflow-auto">
    {allvehicles.map(vehicle => (
      <VehicleCard key={vehicle.uid} uid={vehicle.uid} name={vehicle.name} dispatch={dispatch} favorites={favorites} />
    ))}
  </div>
);
