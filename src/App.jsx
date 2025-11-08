import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Steps from './components/Steps';
import Resources from './components/Resources';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <About />
      <Steps />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;

