import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Freatures from "./components/Features";
import Story from "./components/Story";

const App = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Freatures />
      <Story />
    </main>
  );
};

export default App;
