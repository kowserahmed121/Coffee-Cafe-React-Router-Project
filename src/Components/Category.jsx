import { NavLink } from "react-router-dom";

const Category = ({ categories }) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {categories.map((category) => (
          <NavLink
            to={`/category/${category.category}`}
            key={category.id}
            role="tab"
            className={({ isActive }) =>
              `tab text-2xl  ${isActive ? "tab-active" : ""}`
            }
          >
            {category.category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Category;
