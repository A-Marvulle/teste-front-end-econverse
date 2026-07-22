import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";

import ProdCard from "./ProdCard";
import ProdModal from "./ProdModal";

import "./Product.scss";

import { getProducts } from "../../services/products";
import type { Product } from "../../types/products";

const ProdList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data.products);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <>
      <div className="wrapper-splide">
        <Splide
          aria-label="Products"
          options={{
            perPage: 4,
            perMove: 1,
            gap: "2rem",
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
            <SplideSlide key={product.productName}>
              <ProdCard product={product} onOpenModal={setSelectedProduct} />
            </SplideSlide>
          ))}
        </Splide>
      </div>

      {selectedProduct && (
        <ProdModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
};

export default ProdList;
