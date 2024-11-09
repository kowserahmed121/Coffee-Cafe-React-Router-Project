import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import { useState } from "react";

const Coffee = () => {
  const coffee = useLoaderData();
  const [item, setItem] = useState(coffee);

  const handleShort = (short) => {
    if (short == "popularity") {
      const shorted = [...coffee].sort((a, b) => b.popularity - a.popularity);
      setItem(shorted);
    } else if (short == "rating") {
      const shorted = [...coffee].sort((a, b) => b.rating - a.rating);
      setItem(shorted);
    }
  };
  return (
    <div>
      <div className="flex justify-between mt-5">
        <div>
          <p className="text-xl font-semibold">
            Short by price & short by ratting button here
          </p>
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleShort("popularity")}
            className="btn btn-warning"
          >
            Short By Price
          </button>
          <button
            onClick={() => handleShort("rating")}
            className="btn btn-warning"
          >
            Short By Rating
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6 mb-10">
        {item.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Coffee;
