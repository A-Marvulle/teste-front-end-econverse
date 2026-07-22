import "./Header.scss";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/icons/magnifying-glass.svg";
import box from "../../assets/icons/box.svg";
import heart from "../../assets/icons/heart.svg";
import user from "../../assets/icons/user.svg";
import cart from "../../assets/icons/cart.svg";

type HeaderMiddleProps = {
  isOpen: boolean;
  onToggle: () => void;
};

const HeaderMiddle = ({ isOpen, onToggle }: HeaderMiddleProps) => {
  return (
    <div className="header__middle">
      <div className="header__middle-top">
        <img
          className="header__middle-logo"
          src={logo}
          alt="Logo Econverse"
          title="Logo Econverse"
        />

        <button
          className={`header__toggle ${isOpen ? "open" : ""}`}
          onClick={onToggle}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`header__collapsible ${isOpen ? "open" : ""}`}>
        <form className="header__search">
          <label>O que você está buscando?</label>
          <input placeholder="O que você está buscando?" required></input>
          <button className="btn__icon" type="submit" title="Buscar">
            <span>Buscar</span>
            <img src={search} alt="Search Icon" title="Buscar" aria-hidden />
          </button>
        </form>

        <div className="header__icons">
          <button className="btn__icon" title="Pedidos">
            <span>Pedidos</span>
            <img src={box} alt="Box Icon" title="Pedidos" />
          </button>
          <button className="btn__icon" title="Favoritos">
            <span>Favoritos</span>
            <img src={heart} alt="Heart Icon" title="Favoritos" />
          </button>
          <button className="btn__icon" title="Login">
            <span>Login</span>
            <img src={user} alt="User Icon" title="Login" />
          </button>
          <button className="btn__icon" title="Carrinho">
            <span>Carrinho</span>
            <img src={cart} alt="Cart Icon" title="Carrinho" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderMiddle;
