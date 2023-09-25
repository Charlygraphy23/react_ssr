import React from "react";
import App from "./app.js";
import { createRoot, hydrateRoot } from "react-dom";

hydrateRoot(document.getElementById("root"), <App />);
