import fallbackImg from "../../assets/images/fallback-cover.png";
import "./Product.scss";

interface ProdCardProps {
  product: any;
}

const ProdCard = ({ product }: ProdCardProps) => {
  return (
    <div className="card__prod">
      <div className="card__prod-img">
        <img
          src={product.image || fallbackImg}
          alt={product.name}
          title={product.name}
          onError={(e) => {
            e.currentTarget.src = fallbackImg;
          }}
        />
      </div>

      <div className="card__prod-content">
        <h2 className="card__prod-content-name">{product.name}</h2>
        <p className="card__prod-content-priceOg">{product.priceOg}</p>
        <p className="card__prod-content-priceDesc">{product.priceDesc}</p>
        <p className="card__prod-content-priceQuota">{product.priceQuota}</p>
        <p className="card__prod-content-transport">{product.transport}</p>

        <button className="btn__blue" title="Comprar">
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProdCard;
