import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Auth from './pages/Auth';
import Explore from './pages/Explore';
import CoffeeDetail from './pages/CoffeeDetail';
import RoasterProfile from './pages/RoasterProfile';
import RoastersCatalogue from './pages/RoastersCatalogue';
import { WelcomeScreen } from './components/welcome/WelcomeScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/welcome" element={<WelcomeScreen />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/coffee/:id" element={<CoffeeDetail />} />
            <Route path="/roaster/:roasterId" element={<RoasterProfile />} />
            <Route path="/roasters" element={<RoastersCatalogue />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;