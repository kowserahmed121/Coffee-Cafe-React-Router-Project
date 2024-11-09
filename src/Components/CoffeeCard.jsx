import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";

const CoffeeCard = () => {
  const cards = useLoaderData();
  const { category } = useParams();
  const navigate = useNavigate();
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    if (category) {
      const filterCoffee = [...cards].filter(
        (coffees) => coffees.category === category
      );
      setCoffee(filterCoffee);
    } else {
      setCoffee(cards.slice(0, 6));
    }
  }, [category, cards]);
  return (
    <>
      <div className="grid grid-cols-3 gap-6">
        {coffee.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </div>
      <button
        className="btn btn-warning mt-10"
        onClick={() => navigate("/coffees")}
      >
        View All Coffee
      </button>
    </>
  );
};

export default CoffeeCard;
