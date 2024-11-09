import { useEffect, useState } from "react";
import ReuseText from "./ReuseText";
import { allLikeCoffee } from "../Utilis";
import Card from "./Card";

const Dashboard = () => {
  const [coffee, setCoffee] = useState([]);
  useEffect(() => {
    const likeCoffee = allLikeCoffee();
    setCoffee(likeCoffee);
  }, []);
  return (
    <div>
      <ReuseText
        title="Welcome to our Coffee Cafe Dashboard"
        paragraph="my react router coffee project. this is dynamic coffee shop cafe page."
      ></ReuseText>
      <div className="grid grid-cols-3 gap-6 mb-8">
        {coffee.map((card) => (
          <Card card={card} key={card.id}></Card>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
