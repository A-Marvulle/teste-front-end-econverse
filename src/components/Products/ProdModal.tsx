import { useState } from "react";
import type { Product } from "../../types/products";
import fallbackImg from "../../assets/images/fallback-cover.png";
import "./ProdModal.scss";

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const ProdModal = ({ product, onClose }: ProductModalProps) => {
  const [quantity, setQuantity] = useState(1);

  const discount = 0.15;
  const portion = 6;

  const totalPrice = product.price * quantity;
  const totalDiscount = totalPrice - totalPrice * discount;
  const quota = totalDiscount / portion;

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose}>
          <span></span>
          <span></span>
        </button>

        <div className="modal__image-area">
          <img
            className="modal__image"
            src={product.photo || fallbackImg}
            alt={product.productName}
            title={product.productName}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = fallbackImg;
            }}
          />
        </div>

        <div className="modal__info">
          <h2>{product.productName}</h2>

          <div className="modal__prices">
            <span className="price-old">
              {totalPrice.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </span>

            <strong className="price-discount">
              {totalDiscount.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>

            <p className="installments">
              Ou em até {portion}x de{" "}
              <b>
                {quota.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </b>
            </p>
          </div>

          <p className="modal__description">{product.descriptionShort}</p>

          <div className="modal__actions">
            <div className="quantity">
              <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                -
              </button>

              <span>{quantity}</span>

              <button onClick={() => setQuantity((q) => q + 1)}>+</button>
            </div>

            <button className="btn__yellow">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProdModal;
