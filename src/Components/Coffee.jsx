import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const Coffee = () => {
  const coffee = useLoaderData();
  return (
    <div className="grid grid-cols-3 gap-6 mb-10">
      {coffee.map((card) => (
        <Card card={card} key={card.id}></Card>
      ))}
    </div>
  );
};

export default Coffee;
