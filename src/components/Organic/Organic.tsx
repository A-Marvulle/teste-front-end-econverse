import { useState } from "react";
import ProdList from "../Products/ProdList";
import "./Organic.scss";

const tabs = [
  "Celular",
  "Acessórios",
  "Tablets",
  "Notebooks",
  "TVs",
  "Ver todos",
];

const Organic = () => {
  const [activeTab, setActiveTab] = useState("Celular");

  return (
    <section className="organic container">
      <div className="organic__related-title">
        <h2>Produtos relacionados</h2>
      </div>

      <div className="organic__tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`organic__tab ${
              activeTab === tab ? "organic__tab--active" : ""
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="organic__content">
        {activeTab === "Celular" && <ProdList />}

        {activeTab !== "Celular" && (
          <div className="organic__empty">Em breve</div>
        )}
      </div>
    </section>
  );
};

export default Organic;
