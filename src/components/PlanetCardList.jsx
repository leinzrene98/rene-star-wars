// import { PlanetCard } from "./PlanetCard";

// export const PlanetCardList = ({ allPlanets }) => {
//     return (
//         <>
//             <div className="row d-flex flex-nowrap overflow-auto">
//                 {allPlanets.map(planet => (
//                     <PlanetCard
//                         key={planet.uid}
//                         uid={planet.uid}
//                         name={planet.name}
//                     />
//                 ))}
//             </div>
//         </>
//     );
// };

// import { PlanetCard } from "./PlanetCard";

// export const PlanetCardList = ({ allplanet }) => {

//     return (
//         <>
//             <div className="row d-fex flex-nowrap overflow-auto">
//                 {
//                     allplanet.map(planet => {
//                         return (
//                             <CharacterCard
//                                 key={planet.uid}
//                                 uid={planet.uid}
//                                 name={planet.name}
//                             />
//                         );
//                     })
//                 }
//             </div>
//         </>
//     );
// }

import { PlanetCard } from "./PlanetCard";

export const PlanetCardList = ({ allplanets, dispatch }) => {
    return (
        <>
            <div className="row d-flex flex-nowrap overflow-auto">
                {allplanets.map(planet => (
                    <PlanetCard
                        key={planet.uid}
                        uid={planet.uid}
                        name={planet.name}
                        dispatch={dispatch}
                    />
                ))}
            </div>
        </>
    );
};
