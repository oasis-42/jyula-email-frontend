import { Content } from "./components/Content/Content";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <>
      <main className="bg-[#ECF0F1] h-screen">
        <Header />
        <section className="flex">
          <Dashboard />
          <Content />
        </section>
      </main>
    </>
  );
}
