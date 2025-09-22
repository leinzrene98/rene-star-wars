const baseURL = 'https://www.swapi.tech/api'


export const fetchAllPeople = async(dispatch) => {
    try {
        const response = await fetch(`${baseURL}/people`);

        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type:'fetchedAllPeople',
            payload: data.results,
        });
        return data ;

    }
    catch (error) {
        console.error("Error get Star Wars people profiles!", error);
    }
}




export const fetchAllPlanets = async(dispatch) => {
    try {
        const response = await fetch(`${baseURL}/planets`);

        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedAllPlanets',
            payload: data.results,
        });
        return data ;

    }
    catch (error) {
        console.error("Error get Star Wars planet profiles!", error);
    }
}


export const fetchAllVehicles = async(dispatch) => {
    try {
        const response = await fetch(`${baseURL}/vehicles`);

        if (!response.ok) {
            throw new Error(response.status);
        }
        const data = await response.json();
        dispatch({
            type: 'fetchedAllVehicles',
            payload: data.results,
        });
        return data ;

    }
    catch (error) {
        console.error("Error get Star Wars vehicle profiles!", error);
    }
}
