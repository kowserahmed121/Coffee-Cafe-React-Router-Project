import { Outlet, useLoaderData } from "react-router-dom";
import Hero from "./Hero";
import ReuseText from "./ReuseText";
import Category from "./Category";


const Home = () => {
  const categories = useLoaderData();
  return (
    <div className="py-6">
      {/* hero container */}
      <Hero></Hero>
      {/* reuse container */}
      <ReuseText
        title="Welcome to our Coffee Cafe"
        paragraph="my react router coffee project. this is dynamic coffee shop cafe page."
      ></ReuseText>
      {/* tabs */}
      <Category categories={categories}></Category>
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
