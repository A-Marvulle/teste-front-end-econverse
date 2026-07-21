import "./News.scss";

const NewsForm = () => {
  return (
    <form className="news__form">
      <div className="news__form-container">
        <div className="news__form-control">
          <label>Digite seu nome</label>
          <input
            id="nome"
            type="text"
            placeholder="Digite seu nome"
            required
            autoComplete="name"
          ></input>
        </div>

        <div className="news__form-control">
          <label>Digite seu e-mail</label>
          <input
            id="email"
            type="email"
            placeholder="Digite seu e-mail"
            required
            autoComplete="email"
          ></input>
        </div>

        <div className="news__form-control-check">
          <input id="accept-terms" type="checkbox" required></input>
          <label>Aceito os termos e condições</label>
        </div>
      </div>

      <div>
        <button type="submit" className="btn btn__yellow">
          Inscrever
        </button>
      </div>
    </form>
  );
};

export default NewsForm;
