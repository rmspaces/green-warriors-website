import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Textarea } from '@/app/components/ui/textarea';
import { Heart, DollarSign, Users, Building } from 'lucide-react';
import { toast } from 'sonner';

export function DonateSection() {
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donorName, setDonorName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const suggestedAmounts = [
    { value: '5000', label: '₱5,000', description: 'Training supplies' },
    { value: '15000', label: '₱15,000', description: 'Meals & allowance' },
    { value: '30000', label: '₱30,000', description: '6-month sponsorship' },
    { value: '50000', label: '₱50,000', description: 'Multiple warriors' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const finalAmount = customAmount || amount;
    
    if (!finalAmount || !donorName || !email) {
      toast.error('Please fill in all required fields');
      return;
    }

    // This is a prototype - in production, this would integrate with a payment gateway
    toast.success('Thank you for your interest! This is a prototype. Payment gateway integration coming soon.');
    
    // Reset form
    setAmount('');
    setCustomAmount('');
    setDonorName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="donate" className="py-16 md:py-24 bg-gradient-to-br from-emerald-700 via-emerald-800 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
            <Heart className="text-white" size={40} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Support a Green Warrior
          </h2>
          <div className="w-24 h-1 bg-white/50 mx-auto mb-6"></div>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Your donation creates life-changing opportunities and lifts entire families out of poverty.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Donation Form */}
          <Card className="p-8 md:p-10 bg-white text-gray-900">
            <h3 className="text-2xl font-bold mb-6">Make Your Donation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div>
                <Label className="text-lg mb-4 block">Select Amount</Label>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  {suggestedAmounts.map((suggested) => (
                    <button
                      key={suggested.value}
                      type="button"
                      onClick={() => {
                        setAmount(suggested.value);
                        setCustomAmount('');
                      }}
                      className={`p-4 rounded-lg border-2 transition-all ${
                        amount === suggested.value && !customAmount
                          ? 'border-emerald-700 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}
                    >
                      <p className="text-2xl font-bold text-emerald-700">{suggested.label}</p>
                      <p className="text-sm text-gray-600">{suggested.description}</p>
                    </button>
                  ))}
                </div>
                <div>
                  <Label htmlFor="customAmount">Or enter custom amount</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="customAmount"
                      type="number"
                      placeholder="Enter amount"
                      value={customAmount}
                      onChange={(e) => {
                        setCustomAmount(e.target.value);
                        setAmount('');
                      }}
                      className="pl-10"
                    />
                  </div>
                </div>
              </div>

              {/* Donor Information */}
              <div>
                <Label htmlFor="donorName">Full Name *</Label>
                <Input
                  id="donorName"
                  type="text"
                  placeholder="Your name"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="message">Message (Optional)</Label>
                <Textarea
                  id="message"
                  placeholder="Share a message of support..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-6 text-lg"
              >
                <Heart className="mr-2" size={20} />
                Complete Donation
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Secure payment processing • Tax-deductible donation
              </p>
            </form>
          </Card>

          {/* Impact Info */}
          <div className="space-y-6">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <h3 className="text-2xl font-bold mb-6">Your Impact</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">₱5,000</p>
                    <p className="text-emerald-100">Provides training materials and supplies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Users size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">₱15,000</p>
                    <p className="text-emerald-100">Covers meals and allowance for one warrior</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Building size={24} />
                  </div>
                  <div>
                    <p className="font-bold text-lg mb-1">₱30,000</p>
                    <p className="text-emerald-100">Full sponsorship of one Green Warrior through the entire 6-month program</p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border-white/20 text-white">
              <h3 className="text-xl font-bold mb-4">Other Ways to Partner</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-300">•</span>
                  <span>Corporate sponsorships and partnerships</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-300">•</span>
                  <span>In-kind donations (equipment, supplies)</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-300">•</span>
                  <span>Volunteer expertise and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-300">•</span>
                  <span>Employment opportunities for graduates</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}