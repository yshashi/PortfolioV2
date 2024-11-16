import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Projects } from './components';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';

const HomePage = () => {
  return (
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Projects />
      <Contact />
    </div>
  );
};

const App = () => {
  return (
    <Router future={{
      v7_relativeSplatPath: true,
    }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
