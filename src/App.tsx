import About from './components/About';
import Catalogue from './components/Catalogue';
import Hero from './components/Hero';
import Operas from './components/Operas';

function App() {
  return (
    <div className="app-container">
      <Hero />
      <About />
      <Catalogue />
      <Operas />
    </div>
  );
}

export default App;
