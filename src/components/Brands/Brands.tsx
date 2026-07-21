import "./Brands.scss";
import BrandsList from "./BrandsList";

const Brands = () => {
  return (
    <section className="brands container">
      <h2 className="brands__title">Navegue por marcas</h2>
      <BrandsList />
    </section>
  );
};

export default Brands;
