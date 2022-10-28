import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationPath from "./routes/NavigationPath";
import LayoutWrapper from "./components/LayoutWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {NavigationPath.map((el) => (
          <Route path={el.path} element={<LayoutWrapper><el.component /></LayoutWrapper>} key={el.path} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
