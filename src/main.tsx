import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main></main>
    <Footer />
  </StrictMode>,
);
