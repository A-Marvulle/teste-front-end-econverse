import "./Product.scss";
import ProdList from "./ProdList";

const ProdRelated = () => {
  return (
    <section className="prod__related container">
      <div className="prod__related-title">
        <h2>Produtos relacionados</h2>
        <p>Ver todos</p>
      </div>

      <ProdList />
    </section>
  );
};

export default ProdRelated;
