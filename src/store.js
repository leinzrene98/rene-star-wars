// export const initialStore = () => {
//   return {
//     allPeople: [],
//     allPlanets: [],
//     allVehicles: [],
//     singlePerson: [],
//     singlePlanet: [],
//     singleVehicle: [],
//     favorites: []
//   };
// };

// export default function storeReducer(store, action = {}) {
//   switch (action.type) {

//     case 'fetchedAllPeople': {
//       const peopleArray = action.payload;
//       return {
//         ...store,
//         allPeople: [...peopleArray]
//       };
//     }

//     case 'fetchedAllPlanets': {
//       const planetsArray = action.payload;
//       return {
//         ...store,
//         allPlanets: [...planetsArray]
//       };
//     }

//     case 'fetchedAllVehicles': {
//       const vehiclesArray = action.payload;
//       return {
//         ...store,
//         allVehicles: [...vehiclesArray]
//       };
//     }

//     case 'favedCharacter': {
//       const favedChar = action.payload;
//       console.log(`Added ${favedChar.name} with id of ${favedChar.uid}`);
//       return {
//         ...store,
//         favorites: [...store.favorites, { uid: favedChar.uid, name: favedChar.name }]
//       };
//     }

//     case 'favedPlanet': {
//       const favedPlanet = action.payload;
//       console.log(`Added ${favedPlanet.name} with id of ${favedPlanet.uid}`);
//       return {
//         ...store,
//         favorites: [...store.favorites, { uid: favedPlanet.uid, name: favedPlanet.name }]
//       };
//     }

//     case 'favedVehicle': {
//       const favedVehicle = action.payload;
//       console.log(`Added ${favedVehicle.name} with id of ${favedVehicle.uid}`);
//       return {
//         ...store,
//         favorites: [...store.favorites, { uid: favedVehicle.uid, name: favedVehicle.name }]
//       };
//     }

//     default:
//       throw Error('Unknown action.');
//   }
// }

export const initialStore = () => {
  return {
    allPeople: [],
    allPlanets: [],
    allVehicles: [],
    singlePerson: [],
    singlePlanet: [],
    singleVehicle: [],
    favorites: []
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    case 'fetchedAllPeople': {
      const peopleArray = action.payload;
      return {
        ...store,
        allPeople: [...peopleArray]
      };
    }

    case 'fetchedAllPlanets': {
      const planetsArray = action.payload;
      return {
        ...store,
        allPlanets: [...planetsArray]
      };
    }

    case 'fetchedAllVehicles': {
      const vehiclesArray = action.payload;
      return {
        ...store,
        allVehicles: [...vehiclesArray]
      };
    }

    case 'favedCharacter': {
      const favedChar = action.payload;
      console.log(`Added ${favedChar.name} with id of ${favedChar.uid}`);
      return {
        ...store,
        favorites: [...store.favorites, { uid: favedChar.uid, name: favedChar.name }]
      };
    }

    case 'favedPlanet': {
      const favedPlanet = action.payload;
      console.log(`Added ${favedPlanet.name} with id of ${favedPlanet.uid}`);
      return {
        ...store,
        favorites: [...store.favorites, { uid: favedPlanet.uid, name: favedPlanet.name }]
      };
    }

    case 'favedVehicle': {
      const favedVehicle = action.payload;
      console.log(`Added ${favedVehicle.name} with id of ${favedVehicle.uid}`);
      return {
        ...store,
        favorites: [...store.favorites, { uid: favedVehicle.uid, name: favedVehicle.name }]
      };
    }

    case 'removeFavorite': {
      const { uid } = action.payload;
      return {
        ...store,
        favorites: store.favorites.filter(fav => fav.uid !== uid)
      };
    }

    default:
      throw Error('Unknown action.');
  }
}
