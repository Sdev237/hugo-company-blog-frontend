import './App.css';
import Index from './components/public/Index';
import Navbar from './components/public/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogList from './components/pages/blog/BlogList';
import Blog from './components/pages/blog/Blog';
import BlogDetail from './components/pages/blog/BlogDetail';
import Login from './components/pages/login/Login';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/indexBlog' element={<Blog/>}></Route>
          <Route path='/blog' element={<BlogList/>}></Route>
          <Route path='/detail-Posts' element={<BlogDetail/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
