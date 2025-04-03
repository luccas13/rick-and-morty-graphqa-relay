import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import relayEnvironment from "./graphql/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";
import "./main.css";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </RelayEnvironmentProvider>
  </StrictMode>
);
