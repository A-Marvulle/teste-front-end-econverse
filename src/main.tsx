import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";
import ProdRelated from "./components/Products/ProdRelated";
import News from "./components/News/News";

// TODO: Conect to API and create type for product; Install Splide;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <ProdRelated />
      <News />
      <ProdRelated />
    </main>
    <Footer />
  </StrictMode>,
);
