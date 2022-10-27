import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationPath from "./routes/NavigationPath";
import Footer from "./components/Footer";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {NavigationPath.map((el) => (
          <Route path={el.path} element={<el.component />} key={el.path} />
        ))}
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
