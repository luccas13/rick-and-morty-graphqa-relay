import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import relayEnvironment from "./graphql/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RelayEnvironmentProvider environment={relayEnvironment}>
      <App />
    </RelayEnvironmentProvider>
  </StrictMode>
);
