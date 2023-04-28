import React from "react";
import ReactDOM from "react-dom/client";
import { TraqueoApp } from "./TraqueoApp";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TraqueoApp />
  </React.StrictMode>
);
