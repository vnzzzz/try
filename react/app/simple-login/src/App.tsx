import React from "react";
import { CookiesProvider } from "react-cookie";

import { AppRoutes } from "./components/routes/AppRoutes";
import { AppProviders } from "./components/providers/AppProviders";

function App(): JSX.Element {
  return (
    <CookiesProvider>
      <AppProviders>
        <AppRoutes />
      </AppProviders>
    </CookiesProvider>
  );
}

export default App;
