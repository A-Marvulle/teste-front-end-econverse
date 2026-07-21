import './Menu.scss'

type MenuLink = {
  label: string;
  href: string;
};

type MenuProps = {
  menu: {
    title?: string;
    links: MenuLink[];
  };
  orientation?: "vertical" | "horizontal";
};

const Menu = ({ menu, orientation = "vertical" }: MenuProps) => {
  return (
    <nav className={`menu menu__${orientation}`}>
      <h3 className="menu__title">{menu.title}</h3>

      <ul className="menu__list">
        {menu.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} title={link.label}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
