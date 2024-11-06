import Hero from "./Hero";
import ReuseText from "./ReuseText";

const Home = () => {
  return (
    <div className="py-6">
      {/* hero container */}
      <Hero></Hero>
      {/* reuse container */}
      <ReuseText title="Welcome to our Coffee" paragraph="my react router coffee project. this is dynamic coffee shop cafe page."></ReuseText>
    </div>
  );
};

export default Home;
