import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import { useEffect, useState } from 'react';

function App() {
  const [hasVisitedWelcome, setHasVisitedWelcome] = useState(() => {
    return localStorage.getItem('hasVisitedWelcome') === 'true';
  });

  const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    if (!hasVisitedWelcome) {
      return <Navigate to="/welcome" replace />;
    }
    return <>{children}</>;
  };

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {hasVisitedWelcome && <Navbar />}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                hasVisitedWelcome ? (
                  <Navigate to="/explore" replace />
                ) : (
                  <Navigate to="/welcome" replace />
                )
              } 
            />
            <Route 
              path="/welcome" 
              element={
                <WelcomeScreen 
                  onComplete={() => {
                    localStorage.setItem('hasVisitedWelcome', 'true');
                    setHasVisitedWelcome(true);
                  }} 
                />
              } 
            />
            <Route
              path="/explore"
              element={
                <ProtectedRoute>
                  <Explore />
                </ProtectedRoute>
              }
            />
            <Route
              path="/auth"
              element={
                <ProtectedRoute>
                  <Auth />
                </ProtectedRoute>
              }
            />
            <Route
              path="/coffee/:id"
              element={
                <ProtectedRoute>
                  <CoffeeDetail />
                </ProtectedRoute>
              }
            />
            <Route
              path="/roaster/:roasterId"
              element={
                <ProtectedRoute>
                  <RoasterProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/roasters"
              element={
                <ProtectedRoute>
                  <RoastersCatalogue />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<Navigate to="/welcome" replace />} />
          </Routes>
        </main>
        {hasVisitedWelcome && <Footer />}
      </div>
      <Toaster />
    </Router>
  );
}

export default App;