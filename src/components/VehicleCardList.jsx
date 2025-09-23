// import { VehicleCard } from "./VehicleCard";

// export const VehicleCardList = ({ allVehicles, dispatch }) => {
//     return (
//         <>
//             <div className="row d-flex flex-nowrap overflow-auto">
//                 {allVehicles?.map(vehicle => (
//                     <VehicleCard
//                         key={vehicle.uid}
//                         uid={vehicle.uid}
//                         name={vehicle.name}
//                         dispatch={dispatch}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

import { VehicleCard } from "./VehicleCard";

export const VehicleCardList = ({ allvehicles, dispatch }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {allvehicles.map(vehicle => (
                    <VehicleCard
                        key={vehicle.uid}
                        uid={vehicle.uid}
                        name={vehicle.name}
                        dispatch={dispatch}
                    />
                ))}
            </div>
        </>
    );
};