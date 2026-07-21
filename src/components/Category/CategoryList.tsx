import CategoryCard from "./CategoryCard";
import type { CategoryType } from "../../types/category";
import tecnologia from "../../assets/icons/category/tecnologia.svg";
import supermercado from "../../assets/icons/category/supermercado.svg";
import bebidas from "../../assets/icons/category/bebidas.svg";
import ferramentas from "../../assets/icons/category/ferramentas.svg";
import saude from "../../assets/icons/category/saude.svg";
import esportes from "../../assets/icons/category/esportes.svg";
import moda from "../../assets/icons/category/moda.svg";
import "./Category.scss";

const categs: CategoryType[] = [
  { label: "Tecnologia", icon: tecnologia , active: true},
  { label: "Supermercado", icon: supermercado },
  { label: "Bebidas", icon: bebidas },
  { label: "Ferramentas", icon: ferramentas },
  { label: "Saúde", icon: saude },
  { label: "Esportes e Fitness", icon: esportes },
  { label: "Moda", icon: moda },
];

const CategoryList = () => {
  return (
    <div className="card__category-list">
      {categs.map((cat) => (
        <CategoryCard key={cat.label} cat={cat} />
      ))}
    </div>
  );
};

export default CategoryList;
