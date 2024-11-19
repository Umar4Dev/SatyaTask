import "./App.scss";
import { AuthProvider } from "./context/Auth";
import AppRouter from "./routes";

import { BrowserRouter as Router } from "react-router-dom";
import { ConfigProvider } from "./context/Config";
import Toaster from "./assets/elements/Toaster";

function App() {
  return (
    <ConfigProvider>
      <AuthProvider>
        <Router>
          <AppRouter />
          <Toaster />
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
