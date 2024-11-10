import { Link, useLocation } from "react-router-dom";
import { IoTrashBinOutline } from "react-icons/io5";
/* eslint-disable react/prop-types */
const Card = ({ card, handleRemove }) => {
  const { name, image, category, origin, rating, popularity, id } = card || {};
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className=" relative mt-10">
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
            <Link to={`/coffee/${id}`} className="btn btn-warning">
              View Details
            </Link>
          </div>
        </div>
      </div>
      {pathname === "/dashboard" && (
        <div
          onClick={() => handleRemove(id)}
          className="absolute p-3 bg-warning rounded-full -top-5  -right-5 text-xl font-semibold"
        >
          <IoTrashBinOutline></IoTrashBinOutline>
        </div>
      )}
    </div>
  );
};

export default Card;
