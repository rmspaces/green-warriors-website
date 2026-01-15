import { Facebook, Mail, MapPin, Phone } from 'lucide-react';
import logoImage from 'figma:asset/ba098326f8ed7604a293a5075f59e3e8f67a72d8.png';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Eco Sustainability Foundation" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="font-bold">Eco Sustainability Foundation</h3>
                <p className="text-sm text-[#A8B869]">Green Warriors Program</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming lives from underserved communities into skilled hospitality and sustainability professionals.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="text-[#A8B869] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">info@ecosustainabilityfoundation.org</p>
                  <p className="text-sm text-gray-500">For inquiries and partnerships</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="text-[#A8B869] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">+63 XXX XXX XXXX</p>
                  <p className="text-sm text-gray-500">Update in Footer.tsx</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-[#A8B869] flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-gray-400">Philippines</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social & Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <a
                href="#"
                className="flex items-center gap-3 text-gray-400 hover:text-[#A8B869] transition-colors"
              >
                <Facebook size={20} />
                <span>Follow us on Facebook</span>
              </a>
              <div className="pt-4 border-t border-gray-800">
                <h4 className="font-semibold mb-3">Quick Links</h4>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      const element = document.getElementById('about');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-[#A8B869] transition-colors"
                  >
                    About the Program
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('program');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-[#A8B869] transition-colors"
                  >
                    Program Details
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('impact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-[#A8B869] transition-colors"
                  >
                    Our Impact
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('donate');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="block text-gray-400 hover:text-[#A8B869] transition-colors"
                  >
                    Donate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Eco Sustainability Foundation. All rights reserved.</p>
          <p className="text-sm mt-2">
            Building pathways to life-changing opportunities, one Green Warrior at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}