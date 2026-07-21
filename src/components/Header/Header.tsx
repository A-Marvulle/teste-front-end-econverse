import Menu from "../Menu/Menu";
import "./Header.scss";
import HeaderMiddle from "./HeaderMiddle";
import shield from "../../assets/icons/shield.svg";
import truck from "../../assets/icons/truck.svg";
import credit from "../../assets/icons/credit-card.svg";
import crown from "../../assets/icons/crown.svg";

const mainMenu = {
  links: [
    { label: "Todas Categorias", href: "#" },
    { label: "Supermercado", href: "#" },
    { label: "Livros", href: "#" },
    { label: "Moda", href: "#" },
    { label: "Lançamentos", href: "#" },
    { label: "Ofertas do dia", href: "#", active: true },
    { label: "Assinatura", href: "#", icon: crown },
  ],
};

const Header = () => {
  return (
    <header className="container header">
      <div className="header__dif">
        <p>
          <img src={shield} alt="Shield Icon" title="Shield Icon" aria-hidden />
          <span>
            100% segura <strong>Compra</strong>
          </span>
        </p>

        <p>
          <img src={truck} alt="Truck Icon" title="Truck Icon" aria-hidden />
          <span>
            <strong>Frete grátis</strong> acima de R$ 200
          </span>
        </p>

        <p>
          <img
            src={credit}
            alt="Credit Card Icon"
            title="Credit Card Icon"
            aria-hidden
          />
          <span>
            <strong>Parcele</strong> suas compras
          </span>
        </p>
      </div>
      <div>
        <HeaderMiddle />
      </div>
      <div className="header__menu">
        <Menu menu={mainMenu} orientation="horizontal" collapsible />
      </div>
    </header>
  );
};

export default Header;
