import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from 'react-router-dom';
import DefaultLayout from "./layouts/DefaultLayout";
import ToolBarLayout from "./layouts/ToolBarLayout";
import CreateTemplates from "./pages/createTemplates";
import CreateCampaign from "./pages/createCampaign";
import Segments from "./pages/segments";
import Audience from "./pages/audiences";
import Sent from "./pages/sent";
import Favorites from "./pages/favorites";
import Reports from "./pages/reports";
import Login from "./pages/login";
import Register from "./pages/register";
import { useState } from 'react';

export default function App() {
  const [isAuthenticated, setAuthenticated] = useState(true);

  const handleFakeLogin = () => {
    setAuthenticated(true);
    console.log(isAuthenticated);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/app/criar-campanha" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={<Login onSuccessfulLogin={handleFakeLogin} />} />
        <Route path="/cadastro" element={<Register />} />
        <Route
          path="/app/*"
          element={
            isAuthenticated ? (
              <DefaultLayout>
                <Outlet />
              </DefaultLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route index element={<CreateCampaign />} />
          <Route path="segmentos" element={<Segments />} />
          <Route path="audiencia" element={<Audience />} />
          <Route path="enviados" element={<Sent />} />
          <Route path="favoritos" element={<Favorites />} />
          <Route path="relatorios" element={<Reports />} />
        </Route>

        <Route
          path="/app/criar-templates"
          element={
            isAuthenticated ? (
              <ToolBarLayout>
                <Outlet />
              </ToolBarLayout>
            ) : (
              <Navigate to="/login" />
            )
          }
        >
          <Route index element={<CreateTemplates />} />
        </Route>
      </Routes>
    </Router>
  );
}
