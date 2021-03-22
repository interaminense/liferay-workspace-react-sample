import { StrictMode } from "react";

import React from 'react';
import ReactDOM from "react-dom";

import App from "./App.es";

export default function(elementId) {
    const rootElement = document.getElementById(elementId);

	ReactDOM.render(
        <StrictMode>
            <App />
        </StrictMode>,
        rootElement
    );
}