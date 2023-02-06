import './App.css';
import Index from './components/public/Index';
import Footer from './components/public/Footer';
import Navbar from './components/public/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/pages/BlogList';
import Blog from './components/pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/blog' element={<BlogList/>}></Route>
          <Route path='/indexBlog' element={<Blog/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
