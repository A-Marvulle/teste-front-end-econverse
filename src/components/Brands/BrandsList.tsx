import BrandsCard from "./BrandsCard";

const BrandsList = () => {
  return (
    <div>
      {Array.from({ length: 6 }).map((_, index) => (
        <BrandsCard key={index} />
      ))}
    </div>
  );
};

export default BrandsList;
