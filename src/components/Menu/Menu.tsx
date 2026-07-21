import { useState } from "react";
import "./Menu.scss";

type MenuLink = {
  label: string;
  href: string;
  active?: boolean;
  icon?: string;
};

type MenuProps = {
  menu: {
    title?: string;
    links: MenuLink[];
  };
  title?: string;
  orientation?: "vertical" | "horizontal";
  collapsible?: boolean;
};

const Menu = ({
  menu,
  orientation = "vertical",
  collapsible = false,
}: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`menu menu__${orientation}`}>
      {menu.title && <h3 className="menu__title">{menu.title}</h3>}

      {collapsible && (
        <button
          className={`menu__toggle ${isOpen ? "open" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      )}

      <ul
        className={`menu__list ${
          collapsible ? "menu__collapsible" : ""
        } ${isOpen ? "open" : ""}`}
      >
        {menu.links.map((link) => (
          <li key={link.label}>
            {link.icon && (
              <img src={link.icon} title={link.label} alt={link.label} />
            )}

            <a
              href={link.href}
              title={link.label}
              className={link.active ? "active" : ""}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
