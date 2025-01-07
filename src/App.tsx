import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/toaster';
import { useState } from 'react';
import { AppRoutes } from './components/routing/AppRoutes';

function App() {
  const [hasVisitedWelcome, setHasVisitedWelcome] = useState(() => {
    return localStorage.getItem('hasVisitedWelcome') === 'true';
  });

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {hasVisitedWelcome && <Navbar />}
        <main className="flex-grow">
          <AppRoutes 
            hasVisitedWelcome={hasVisitedWelcome}
            onWelcomeComplete={() => {
              localStorage.setItem('hasVisitedWelcome', 'true');
              setHasVisitedWelcome(true);
            }}
          />
        </main>
        {hasVisitedWelcome && <Footer />}
      </div>
      <Toaster />
    </Router>
  );
}

export default App;