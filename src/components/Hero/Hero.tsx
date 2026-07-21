import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__content">
        <h2 className="hero__content-title">
          Venha conhecer nossas <span>promoções</span>
        </h2>
        <p className="hero__content-desc">
          <strong>50% Off</strong> nos produtos{" "}
        </p>
        <button className="btn__yellow" title="Ver Produtos">Ver produtos</button>
      </div>
    </section>
  );
};

export default Hero;
