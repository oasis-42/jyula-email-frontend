
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./layouts/Layout";
import CreateTemplates from "./pages/createTemplates";
import CreateCampaign from "./pages/createCampaign";
import Segments from "./pages/segments";
import Audience from "./pages/audiences";
import Sent from "./pages/sent";
import Favorites from "./pages/favorites";
import Reports from "./pages/reports";
import SendCampaign from './pages/sendCampaign';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/criar-campanha" element={<CreateCampaign/>} />
          <Route path="/criar-campanha/enviar-campanha" element={<SendCampaign/>} />
          <Route path="/criar-templates" element={<CreateTemplates/>} />
          <Route path="/segmentos" element={<Segments/>} />
          <Route path="/audiencia" element={<Audience/>} />
          <Route path="/enviados" element={<Sent/>} />
          <Route path="/favoritos" element={<Favorites/>} />
          <Route path="/relatorios" element={<Reports/>} />
        </Routes>
      </Layout>
    </Router>
  );
}
