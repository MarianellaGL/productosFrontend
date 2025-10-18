import "./App.css";
import { Layout } from "./components/pagesComponents/Layout";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <Layout title="Inventario" subtitle="Lista de productos disponibles">
      <Home />
    </Layout>
  );
}

export default App;
