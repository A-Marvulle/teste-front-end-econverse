import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";
import ProdRelated from "./components/Products/ProdRelated";
import News from "./components/News/News";
import Brands from "./components/Brands/Brands";
import Partners from "./components/Partners/Partners";
import Category from "./components/Category/Category";
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Organic from "./components/Organic/Organic";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <main>
      <Hero />
      <Category />
      <Organic />
      <Partners />
      <Brands />
      <News />
      <ProdRelated />
    </main>
    <Footer />
  </StrictMode>,
);
