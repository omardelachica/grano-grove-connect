import { Routes, Route } from 'react-router-dom';
import { WelcomeScreen } from '@/components/welcome/WelcomeScreen';

type AppRoutesProps = {
  hasVisitedWelcome: boolean;
  onWelcomeComplete: () => void;
};

export const AppRoutes = ({ hasVisitedWelcome, onWelcomeComplete }: AppRoutesProps) => {
  return (
    <Routes>
      <Route 
        path="/" 
        element={
          <WelcomeScreen 
            onComplete={onWelcomeComplete} 
          />
        } 
      />
    </Routes>
  );
};