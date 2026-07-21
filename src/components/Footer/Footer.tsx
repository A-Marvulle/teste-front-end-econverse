import "./Footer.scss";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import linkedin from "../../assets/icons/linkedin.svg";
import Menu from "../Menu/Menu";

const instMenu = {
  title: "Institucional",
  links: [
    { label: "Sobre Nós", href: "#" },
    { label: "Movimento", href: "#" },
    { label: "Trabalhe conosco", href: "#" },
  ],
};

const helpMenu = {
  title: "Ajuda",
  links: [
    { label: "Suporte", href: "#" },
    { label: "Fale Conosco", href: "#" },
    { label: "Perguntas Frequentes", href: "#" },
  ],
};

const termsMenu = {
  title: "Termos",
  links: [
    { label: "Termos e Condições", href: "#" },
    { label: "Política de Privacidade", href: "#" },
  ],
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <div className="container flex flex-column flex-lg-row">
          <div className="col-12 col-lg-3 border">
            <img
              src={logo}
              alt="Logo Econverse"
              title="Logo Econverse"
              loading="lazy"
            />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer__social">
              <a
                href="https://www.facebook.com/"
                title="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="Logo Facebook"
                  title="Logo Facebook"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="Logo Instagram"
                  title="Logo Instagram"
                  loading="lazy"
                />
              </a>
              <a
                href="https://www.linkedin.com/"
                title="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="Logo LinkedIn"
                  title="Logo LinkedIn"
                  loading="lazy"
                />
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-9">
            <div className="flex flex-column flex-lg-row footer__menu-flex">
              <Menu menu={instMenu} />
              <Menu menu={helpMenu} />
              <Menu menu={termsMenu} />
            </div>
          </div>
        </div>
      </div>

      <section className="copy">
        <p className="text-center">
          Criado por
          <a
            href="https://github.com/A-Marvulle"
            target="_blank"
            rel="noopener noreferrer"
            title="Meu Github"
          >
            A-Marvulle
          </a>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
