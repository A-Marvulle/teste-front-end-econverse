import type { CategoryType } from "../../types/category";
import "./Category.scss";

interface CategoryCardProps {
  cat: CategoryType;
}

const CategoryCard = ({ cat }: CategoryCardProps) => {
  return (
    <div
      className={`card__category ${cat.active ? "card__category-active" : ""}`}
    >
      <div className="card__category-content">
        <div className="card__category-content-icon">
          <img src={cat.icon} alt={cat.label} title={cat.label} />
        </div>
        <h2 className="card__category-content-title">{cat.label}</h2>
      </div>
    </div>
  );
};

export default CategoryCard;
