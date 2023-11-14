import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";

export default function App() {
  return (
    <>
      <main className="bg-[#ECF0F1] h-screen">
        <Header />
        <section className="flex">
          <Dashboard />
          <h2>Content</h2>
        </section>
      </main>
    </>
  );
}
