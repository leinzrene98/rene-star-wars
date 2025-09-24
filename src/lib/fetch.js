const BASE_URL = "https://www.swapi.tech/api";
const cache = { people: {}, planets: {}, vehicles: {} };

const fetchData = async (url) => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    return data.result?.properties || {};
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
};

// --- Fetch all ---
export const fetchAllPeople = async (dispatch) => {
  const res = await fetch(`${BASE_URL}/people`);
  const data = await res.json();
  const allPeople = data.results.map(p => ({ uid: p.uid, name: p.name }));
  dispatch({ type: "fetchedAllPeople", payload: allPeople });
};

export const fetchAllPlanets = async (dispatch) => {
  const res = await fetch(`${BASE_URL}/planets`);
  const data = await res.json();
  const allPlanets = data.results.map(p => ({ uid: p.uid, name: p.name }));
  dispatch({ type: "fetchedAllPlanets", payload: allPlanets });
};

export const fetchAllVehicles = async (dispatch) => {
  const res = await fetch(`${BASE_URL}/vehicles`);
  const data = await res.json();
  const allVehicles = data.results.map(v => ({ uid: v.uid, name: v.name }));
  dispatch({ type: "fetchedAllVehicles", payload: allVehicles });
};

// --- Fetch single ---
export const fetchSinglePerson = async (uid, dispatch) => {
  if (cache.people[uid]) return dispatch({ type: "fetchedSinglePerson", payload: cache.people[uid] });
  const data = await fetchData(`${BASE_URL}/people/${uid}`);
  if (data) { cache.people[uid] = data; dispatch({ type: "fetchedSinglePerson", payload: data }); }
};

export const fetchSinglePlanet = async (uid, dispatch) => {
  if (cache.planets[uid]) return dispatch({ type: "fetchedSinglePlanet", payload: cache.planets[uid] });
  const data = await fetchData(`${BASE_URL}/planets/${uid}`);
  if (data) { cache.planets[uid] = data; dispatch({ type: "fetchedSinglePlanet", payload: data }); }
};

export const fetchSingleVehicle = async (uid, dispatch) => {
  if (cache.vehicles[uid]) return dispatch({ type: "fetchedSingleVehicle", payload: cache.vehicles[uid] });
  const data = await fetchData(`${BASE_URL}/vehicles/${uid}`);
  if (data) { cache.vehicles[uid] = data; dispatch({ type: "fetchedSingleVehicle", payload: data }); }
};
