import "./App.css";
import Navbar from "./features/Navbar/components/Navbar";
import Card from "./components/Card";
import Hero from "./features/Hero/components/Hero";
import Technologies from "./features/Technologies/components/Technologies";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Hero />
        <Technologies />
        <div className="cards grid gap-6 mx-10 mt-[100vh]">
          {[...Array(15)].map((_, i) => (
            <Card
              key={Date.now()}
              className="bg-white h-80 my-20 rounded-xl shadow-xl flex justify-center items-center"
            >
              <h1 className="text-black text-[36px]">Proyecto {i}</h1>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
