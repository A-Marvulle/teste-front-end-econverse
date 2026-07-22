import type { Product } from "../../types/products";
import fallbackImg from "../../assets/images/fallback-cover.png";
import "./Product.scss";

interface ProdCardProps {
  product: Product;
}

const ProdCard = ({ product }: ProdCardProps) => {
  const discount = 0.15;
  const priceDesc = product.price - product.price * discount;
  const portion = 6;
  const quota = priceDesc / portion;

  return (
    <div className="card__prod">
      <div className="card__prod-img">
        <img
          src={product.photo || fallbackImg}
          alt={product.productName}
          title={product.productName}
          onError={(e) => {
            e.currentTarget.src = fallbackImg;
          }}
        />
      </div>

      <div className="card__prod-content">
        <h2 className="card__prod-content-name">{product.productName}</h2>

        <p className="card__prod-content-priceOg">
          {product.price.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p className="card__prod-content-priceDesc">
          {priceDesc.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <p className="card__prod-content-priceQuota">
          Ou em até {portion}x de{" "}
          {quota.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>

        <p className="card__prod-content-transport">Frete Grátis!</p>

        {/*<h2>{product.name}</h2>
        <p>{product.priceOg}</p>
        <p>{product.priceDesc}</p>

        */}

        <button className="btn__blue">Comprar</button>
      </div>
    </div>
  );
};

export default ProdCard;
