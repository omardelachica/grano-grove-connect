import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Users, Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="border-b bg-cream">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-playfair text-4xl text-espresso">
            <img 
              src="/lovable-uploads/b8d7326a-7a29-47b6-85f3-e89e65e462dd.png" 
              alt="Granos Logo" 
              className="h-24"
            />
          </Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-espresso" />
            ) : (
              <Menu className="h-6 w-6 text-espresso" />
            )}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/explore">
              <Button variant="ghost" className="hover:bg-cream/80">Explore</Button>
            </Link>
            <Link to="/roasters">
              <Button variant="ghost" className="hover:bg-cream/80">
                <Users className="w-4 h-4 mr-2" />
                Producers
              </Button>
            </Link>
            <Link to="/auth">
              <Button>Sign In</Button>
            </Link>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-2 bg-cream">
            <Link to="/explore" className="block">
              <Button variant="ghost" className="w-full justify-start hover:bg-cream/80">
                Explore
              </Button>
            </Link>
            <Link to="/roasters" className="block">
              <Button variant="ghost" className="w-full justify-start hover:bg-cream/80">
                <Users className="w-4 h-4 mr-2" />
                Producers
              </Button>
            </Link>
            <Link to="/auth" className="block">
              <Button className="w-full justify-start">Sign In</Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}