import './App.css';
import Index from './components/public/Index';
import Footer from './components/public/Footer';
import Navbar from './components/public/Navbar';
import Anonces from './components/pages/Anonces';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Index />
      <Anonces/>
    </div>
  );
}
export default App;
