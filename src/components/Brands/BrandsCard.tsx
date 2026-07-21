import logo from "../../assets/images/logo.svg";
import './Brands.scss'

const BrandsCard = () => {
  return (
    <div className="brands__card">
      <div>
        <img
          src={logo}
          alt="Logo Econverse"
          title="Logo Econverse"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default BrandsCard;
