import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";
import ProdRelated from "./components/Products/ProdRelated";
import News from "./components/News/News";
import Brands from "./components/Brands/Brands";
import Partners from "./components/Partners/Partners";

// TODO: Conect to API and create type for product; Install Splide; Add splide to BRANDS

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <ProdRelated />
      <Partners />
      <Brands />
      <News />
      <ProdRelated />
    </main>
    <Footer />
  </StrictMode>,
);
