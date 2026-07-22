import BrandsCard from "./BrandsCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const BrandsList = () => {
  return (
    <div className="wrapper-splide">
      <Splide
        aria-label="Brands"
        options={{
          perPage: 5,
          width: "100%",
          height: "100%",
          perMove: 1,
          gap: "1rem",
          arrows: false,
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
        {Array.from({ length: 6 }).map((_, index) => (
          <SplideSlide key={index}>
            <BrandsCard />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default BrandsList;
