import { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

interface PayPalButtonProps {
  amount: string;
  donorName: string;
  email: string;
  message?: string;
  onSuccess: () => void;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

export function PayPalButton({ amount, donorName, email, message, onSuccess }: PayPalButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if PayPal SDK is loaded
    const checkPayPal = () => {
      if (window.paypal) {
        setIsLoaded(true);
      } else {
        setTimeout(checkPayPal, 100);
      }
    };
    checkPayPal();
  }, []);

  useEffect(() => {
    if (!isLoaded || !paypalRef.current || !amount) return;

    // Clear any existing buttons
    paypalRef.current.innerHTML = '';

    // Render PayPal buttons
    window.paypal
      .Buttons({
        style: {
          layout: 'vertical',
          color: 'gold',
          shape: 'rect',
          label: 'donate',
        },
        createOrder: (data: any, actions: any) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: 'PHP',
                  value: amount,
                },
                description: `Donation to Green Warriors Program from ${donorName}`,
                custom_id: JSON.stringify({
                  donorName,
                  email,
                  message: message || '',
                }),
              },
            ],
            application_context: {
              shipping_preference: 'NO_SHIPPING',
            },
          });
        },
        onApprove: async (data: any, actions: any) => {
          const order = await actions.order.capture();
          console.log('Payment successful:', order);
          
          toast.success(
            `Thank you, ${donorName}! Your donation of ₱${parseFloat(amount).toLocaleString()} has been received.`,
            {
              duration: 5000,
            }
          );
          
          // In production, you would send this data to your backend/Supabase
          // to record the donation
          
          onSuccess();
        },
        onError: (err: any) => {
          console.error('PayPal error:', err);
          toast.error('Payment failed. Please try again or contact support.');
        },
        onCancel: () => {
          toast.info('Payment cancelled. You can try again whenever you\'re ready.');
        },
      })
      .render(paypalRef.current);
  }, [isLoaded, amount, donorName, email, message, onSuccess]);

  if (!isLoaded) {
    return (
      <div className="w-full py-6 text-center text-gray-500">
        Loading PayPal...
      </div>
    );
  }

  return <div ref={paypalRef} className="w-full" />;
}
