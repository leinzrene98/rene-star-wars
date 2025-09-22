import { VehicleCard } from "./VehicleCard";

export const VehicleCardList = ({ allVehicles }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {allVehicles.map(vehicle => (
                    <VehicleCard
                        key={vehicle.uid}
                        uid={vehicle.uid}
                        name={vehicle.name}
                    />
                ))}
            </div>
        </>
    );
};
