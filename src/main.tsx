import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main>
      <News />
    </main>
    <Footer />
  </StrictMode>,
);
