import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./components/Error";
import AppRouter from "./router/AppRouter";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

const App1 = () => (
  <ErrorBoundary FallbackComponent={Error}>
    <AuthProvider>
      <App />
    </AuthProvider>
  </ErrorBoundary>
);
export default App1;
