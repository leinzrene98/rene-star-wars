export const initialStore=()=>{
  return{
    allPeople: [],
    allPlanets: [],
    allVehicles: [],
    singlePerson: [],
    singlePlanet: [],
    singleVehicle: [],
    favorites: []
    
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
   
    case 'fetchedAllPeople':
      const peopleArray = action.payload;
      return {
        ...store, 
        allPeople: [...peopleArray]
      }
    case 'fetchedAllPlanets':
      const planetsArray = action.payload;
      return {
        ...store, 
        allPlanets: [...planetsArray]
      }
    case 'fetchedAllVehicles':
      const vehiclesArray = action.payload;
      return {
        ...store, 
        allVehicles: [...vehiclesArray]
      }
      case 'favedCharacter':
        const { uid , name } = action.payload;
        console.log(`Added ${name} with id of ${uid}`);
        return {
          ...store,
          favorites: [store.favorites, {uid: uid, name: name}]
        }
    default:
      throw Error('Unknown action.');
  }    
}
