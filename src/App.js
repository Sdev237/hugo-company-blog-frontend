import './App.css';
import Index from './components/public/Index';
import Footer from './components/public/Footer';
import Navbar from './components/public/Navbar';
import Anonces from './components/pages/Anonces';
import Blog from './components/pages/Blog';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Index />
      <Anonces/>
      <Blog/>
    </div>
  );
}
export default App;
