import React from "react";
import App from "./App";
import FormProvider from "./store/FormContext";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <FormProvider>
            <App />
        </FormProvider>
    </React.StrictMode>
);
