
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer";
import { fetchSingleVehicle } from "../lib/fetch";

export const VehicleProfilePage = () => {
  const { store, dispatch } = useGlobalReducer();
  const { uid } = useParams();

  useEffect(() => {
    fetchSingleVehicle(uid, dispatch);
  }, [uid]);

  const vehicle = store.singleVehicle;

  if (!vehicle) return <div>Loading vehicle...</div>;

  return (
    <div className="container my-5">
      <h1>{vehicle.name}</h1>
      <img
        src={`https://github.com/breatheco-de/swapi-images/blob/master/public/images/vehicle/${uid}.jpg?raw=true`}
        alt={vehicle.name}
        style={{ width: "300px" }}
      />
      <ul className="list-group mt-3">
        <li className="list-group-item"><strong>Model:</strong> {vehicle.model}</li>
        <li className="list-group-item"><strong>Vehicle Class:</strong> {vehicle.vehicle_class}</li>
        <li className="list-group-item"><strong>Manufacturer:</strong> {vehicle.manufacturer}</li>
        <li className="list-group-item"><strong>Length:</strong> {vehicle.length}</li>
        <li className="list-group-item"><strong>Cost:</strong> {vehicle.cost_in_credits}</li>
        <li className="list-group-item"><strong>Crew:</strong> {vehicle.crew}</li>
        <li className="list-group-item"><strong>Passengers:</strong> {vehicle.passengers}</li>
      </ul>
    </div>
  );
};
