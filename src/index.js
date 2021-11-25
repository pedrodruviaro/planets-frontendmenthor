import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { GlobalStyles } from "./styles.jsx/GlobalStyles";
import { ResetStyles } from "./styles.jsx/ResetStyles";

ReactDOM.render(
    <React.StrictMode>
        <ResetStyles />
        <GlobalStyles />

        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
