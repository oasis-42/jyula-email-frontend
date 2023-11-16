
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./layouts/Layout";
import NewTemplate from "./pages/Criar-templates";
import CriarCampanha from "./pages/Criar-campanha";
import Segmentos from "./pages/Segmentos";
import Audiencia from "./pages/Audiencia";
import Enviados from "./pages/Enviados";
import Favoritos from "./pages/Favoritos";
import Relatorios from "./pages/Relatorios";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/criar-campanha" element={<CriarCampanha />} />
          <Route path="/criar-templates" element={<NewTemplate />} />
          <Route path="/segmentos" element={<Segmentos />} />
          <Route path="/audiencia" element={<Audiencia />} />
          <Route path="/enviados" element={<Enviados />} />
          <Route path="/favoritos" element={<Favoritos />} />
          <Route path="/relatorios" element={<Relatorios />} />
        </Routes>
      </Layout>
    </Router>
  );
}
