import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Card = ({ card }) => {
  const { name, image, category, origin, rating, popularity, id } = card || {};
  return (
    <div className="mt-6">
      <div className="card bg-base-100 border-2">
        <figure className="w-full h-48 overflow-hidden">
          <img src={image} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Coffee Name: {name}</h2>
          <p>Type : {category}</p>
          <p>Origin : {origin}</p>
          <p>Ratting : {rating}</p>
          <p>Price : {popularity}</p>
          <div className="card-actions justify-end">
            <Link to={`/coffee/${id}`} className="btn btn-warning">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
