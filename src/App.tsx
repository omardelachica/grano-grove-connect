import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/toaster';
import { AppRoutes } from './components/routing/AppRoutes';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">
          <AppRoutes 
            hasVisitedWelcome={false}
            onWelcomeComplete={() => {}}
          />
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;