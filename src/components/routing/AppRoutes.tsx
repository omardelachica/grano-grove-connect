import { Routes, Route, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import Auth from '@/pages/Auth';
import Explore from '@/pages/Explore';
import CoffeeDetail from '@/pages/CoffeeDetail';
import RoasterProfile from '@/pages/RoasterProfile';
import RoastersCatalogue from '@/pages/RoastersCatalogue';
import { WelcomeScreen } from '@/components/welcome/WelcomeScreen';

type AppRoutesProps = {
  hasVisitedWelcome: boolean;
  onWelcomeComplete: () => void;
};

const ProtectedRoute = ({ 
  children, 
  hasVisitedWelcome 
}: { 
  children: React.ReactNode;
  hasVisitedWelcome: boolean;
}) => {
  if (!hasVisitedWelcome) {
    return <Navigate to="/welcome" replace />;
  }
  return <>{children}</>;
};

export const AppRoutes = ({ hasVisitedWelcome, onWelcomeComplete }: AppRoutesProps) => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={<Navigate to="/welcome" replace />} 
      />
      <Route 
        path="/welcome" 
        element={
          <WelcomeScreen 
            onComplete={onWelcomeComplete} 
          />
        } 
      />
      <Route
        path="/explore"
        element={
          <ProtectedRoute hasVisitedWelcome={hasVisitedWelcome}>
            <Explore />
          </ProtectedRoute>
        }
      />
      <Route
        path="/auth"
        element={
          <ProtectedRoute hasVisitedWelcome={hasVisitedWelcome}>
            <Auth />
          </ProtectedRoute>
        }
      />
      <Route
        path="/coffee/:id"
        element={
          <ProtectedRoute hasVisitedWelcome={hasVisitedWelcome}>
            <CoffeeDetail />
          </ProtectedRoute>
        }
      />
      <Route
        path="/roaster/:roasterId"
        element={
          <ProtectedRoute hasVisitedWelcome={hasVisitedWelcome}>
            <RoasterProfile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/roasters"
        element={
          <ProtectedRoute hasVisitedWelcome={hasVisitedWelcome}>
            <RoastersCatalogue />
          </ProtectedRoute>
        }
      />
      <Route path="*" element={<Navigate to="/welcome" replace />} />
    </Routes>
  );
};