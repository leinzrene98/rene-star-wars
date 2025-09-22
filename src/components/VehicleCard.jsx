import { Link } from "react-router-dom";

const style = {
    width: "18rem",
};

export const VehicleCard = ({ uid, name }) => {
    return (
        <div className="card" style={style}>
            <img
                src={`https://github.com/breatheco-de/swapi-images/blob/master/assets/starships/${uid}.jpg?raw=true`}
                className="card-img-top"
                alt={name}
                onError={(e) => { e.target.src = "https://via.placeholder.com/300x200?text=No+Image"; }}
            />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <Link to={`/vehicles/${uid}`}>
                    <button className="btn btn-primary">Learn More</button>
                </Link>
            </div>
        </div>
    );
};
