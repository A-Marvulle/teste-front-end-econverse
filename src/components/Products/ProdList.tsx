import ProdCard from "./ProdCard";
import "./Product.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
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
  {
    id: 4,
    name: "Teclado Mecânico Redragon",
    image: "https://via.placeholder.com/200",
    priceOg: "R$ 399,90",
    priceDesc: "R$ 299,90",
    priceQuota: "ou 6x de R$ 49,98",
    transport: "Frete grátis",
  },
  {
    id: 5,
    name: "Teclado Mecânico Redragon",
    image: "https://via.placeholder.com/200",
    priceOg: "R$ 399,90",
    priceDesc: "R$ 299,90",
    priceQuota: "ou 6x de R$ 49,98",
    transport: "Frete grátis",
  },
  {
    id: 6,
    name: "Teclado Mecânico Redragon",
    image: "https://via.placeholder.com/200",
    priceOg: "R$ 399,90",
    priceDesc: "R$ 299,90",
    priceQuota: "ou 6x de R$ 49,98",
    transport: "Frete grátis",
  },
  {
    id: 7,
    name: "Teclado Mecânico Redragon",
    image: "https://via.placeholder.com/200",
    priceOg: "R$ 399,90",
    priceDesc: "R$ 299,90",
    priceQuota: "ou 6x de R$ 49,98",
    transport: "Frete grátis",
  },
  {
    id: 8,
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
    <div className="wrapper-splide">
      <Splide
        aria-label="Product"
        options={{
          perPage: 4,
          perMove: 1,
          gap: "2rem",
          width: "100%",
          height: "100%",
          arrows: true,
          pagination: false,
          breakpoints: {
            768: {
              perPage: 2,
            },
            425: {
              perPage: 1,
            },
          },
        }}
      >
        {products.map((product) => (
          <SplideSlide key={product.id}>
            <ProdCard product={product} />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default ProdList;
