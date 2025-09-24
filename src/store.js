export const initialStore = () => ({
  allPeople: [],
  allPlanets: [],
  allVehicles: [],
  singlePerson: null,
  singlePlanet: null,
  singleVehicle: null,
  favorites: []
});

export default function storeReducer(store, action = {}) {
  switch (action.type) {

    // --- FETCH ALL ---
    case "fetchedAllPeople":
      return { ...store, allPeople: [...action.payload] };

    case "fetchedAllPlanets":
      return { ...store, allPlanets: [...action.payload] };

    case "fetchedAllVehicles":
      return { ...store, allVehicles: [...action.payload] };

    // --- FETCH SINGLE ---
    case "fetchedSinglePerson":
      return { ...store, singlePerson: action.payload };

    case "fetchedSinglePlanet":
      return { ...store, singlePlanet: action.payload };

    case "fetchedSingleVehicle":
      return { ...store, singleVehicle: action.payload };

    // --- FAVORITES ---
    case "favedCharacter":
      return {
        ...store,
        favorites: [...store.favorites, { ...action.payload, category: "people" }]
      };

    case "favedPlanet":
      return {
        ...store,
        favorites: [...store.favorites, { ...action.payload, category: "planets" }]
      };

    case "favedVehicle":
      return {
        ...store,
        favorites: [...store.favorites, { ...action.payload, category: "vehicles" }]
      };

    case "removeFavorite":
      return {
        ...store,
        favorites: store.favorites.filter(
          fav => !(fav.uid === action.payload.uid && fav.category === action.payload.category)
        )
      };

    default:
      throw Error("Unknown action.");
  }
}
