import "./News.scss";
import NewsForm from "./NewsForm";

const News = () => {
  return (
    <section className="news">
      <div className="container news__container">
        <div>
          <h2 className="news__title">Inscreva-se na nossa newsletter</h2>
          <p className="news__text">
            Assine a nossa newsletter e receba as novidades e conteúdos
            exclusivos da Econverse.
          </p>
        </div>
        <div>
          <NewsForm />
        </div>
      </div>
    </section>
  );
};

export default News;
