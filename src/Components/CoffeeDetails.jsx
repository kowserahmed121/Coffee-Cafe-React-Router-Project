import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToFavorite, allLikeCoffee } from "../Utilis";

const CoffeeDetails = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [coffee, setCoffee] = useState({});
  const [active, setActive] = useState(false);
  useEffect(() => {
    const singleData = data.find((coffee) => coffee.id == id);
    setCoffee(singleData);
    const loveCoffee = allLikeCoffee();
    const isFind = loveCoffee.find((item) => item.id == singleData.id);
    if (isFind) {
      setActive(true);
    }
  });
  const { description, image, name, rating, popularity, making_process } =
    coffee;

  const handleFavorite = (coffee) => {
    addToFavorite(coffee);
    setActive(true);
  };
  return (
    <div className="mt-14">
      <h2 className="text-2xl font-semibold">Coffee Details {description} </h2>
      <div className="w-full h-[500px] my-10">
        <img className="h-full w-full rounded-lg" src={image} alt="" />
      </div>
      <div className="flex justify-between my-10 items-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">{name}</h2>
          <p>Rating : {rating}</p>
          <p>Price : {popularity}</p>
        </div>
        <div>
          <button
            onClick={() => handleFavorite(coffee)}
            className="btn btn-warning"
            disabled={active}
          >
            Add to Favorite
          </button>
        </div>
      </div>
      <div className="space-y-3 my-10">
        <h2 className="text-2xl font-semibold">Making Process:</h2>
        <p>{making_process}</p>
      </div>
    </div>
  );
};

export default CoffeeDetails;
