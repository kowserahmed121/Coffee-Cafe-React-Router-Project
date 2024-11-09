import toast from "react-hot-toast";

const allLikeCoffee = () => {
  const loveCoffee = localStorage.getItem("loveCoffee");
  if (loveCoffee) {
    const allLoveCoffee = JSON.parse(loveCoffee);
    return allLoveCoffee;
  } else {
    return [];
  }
};

const addToFavorite = (coffee) => {
  const loveCoffee = allLikeCoffee();
  const isFind = loveCoffee.find(item => item.id == coffee.id )
  if(isFind) return toast.error('Already Added This Coffee');
  loveCoffee.push(coffee);
  localStorage.setItem("loveCoffee", JSON.stringify(loveCoffee));
  toast.success('Successfully  Added Coffee');
};

export { addToFavorite, allLikeCoffee };
