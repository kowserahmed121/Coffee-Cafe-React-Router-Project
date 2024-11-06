import { Link } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <Link to="/" className="tab text-xl" key={category.id}>
            {category.category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
