import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-background text-foreground pt-16 pb-6 px-6 border-t border-border mt-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand - Left side */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl font-black mb-4">CHRONO</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium smartwatches crafted for the modern individual. Where technology meets timeless design.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary hover:bg-foreground hover:text-background flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary hover:bg-foreground hover:text-background flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary hover:bg-foreground hover:text-background flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary hover:bg-foreground hover:text-background flex items-center justify-center transition-all">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/products" className="text-sm text-muted-foreground hover:text-foreground transition-colors">All Products</Link></li>
              <li><Link to="/products?category=premium" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Premium Collection</Link></li>
              <li><Link to="/products?category=sport" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Sport Edition</Link></li>
              <li><Link to="/products?category=classic" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Classic Series</Link></li>
              <li><Link to="/wishlist" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Wishlist</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link to="/shipping-returns" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/warranty" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Warranty</Link></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h4 className="text-sm font-bold mb-4 uppercase tracking-wider">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/refund-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Refund Policy</Link></li>
              <li><a href="mailto:support@chrono.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">support@chrono.com</a></li>
              <li><a href="tel:+919876543210" className="text-sm text-muted-foreground hover:text-foreground transition-colors">+91 98765 43210</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Chrono. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms-of-service" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/refund-policy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Refunds
              </Link>
              <Link to="/sitemap" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;