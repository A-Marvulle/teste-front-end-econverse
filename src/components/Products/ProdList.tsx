import ProdCard from "./ProdCard";
import "./Product.scss";

const products = [
  {
    id: 1,
    name: "Notebook Dell Inspiron",
    image: "https://via.placeholder.com/200",
    priceOg: "R$ 4.299,90",
    priceDesc: "R$ 3.799,90",
    priceQuota: "ou 10x de R$ 379,99",
    transport: "Frete grátis",
  },
  {
    id: 2,
    name: "Mouse Gamer Logitech",
    image: "https://via.placeholder.com/200",
    priceOg: "R$ 299,90",
    priceDesc: "R$ 199,90",
    priceQuota: "ou 5x de R$ 39,98",
    transport: "Frete grátis",
  },
  {
    id: 3,
    name: "Teclado Mecânico Redragon",
    image: "https://via.placeholder.com/200",
    priceOg: "R$ 399,90",
    priceDesc: "R$ 299,90",
    priceQuota: "ou 6x de R$ 49,98",
    transport: "Frete grátis",
  },
];

const ProdList = () => {
  return (
    <div className="card__prod-list">
      {products.map((product) => (
        <ProdCard key={product.id} product={product} />
      ))}

    </div>
  );
};

export default ProdList;
