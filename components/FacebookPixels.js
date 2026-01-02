import Script from 'next/script';
import { useEffect } from 'react';

const FacebookPixels = () => {
  useEffect(() => {
    if (!window.fbq) {
      !(function(f,b,e,v,n,t,s){
        if(f.fbq) return;
        n=f.fbq=function(){ n.callMethod ? n.callMethod.apply(n,arguments) : n.queue.push(arguments) };
        if(!f._fbq) f._fbq=n;
        n.push=n;
        n.loaded=!0;
        n.version='2.0';
        n.queue=[];
        t=b.createElement(e); t.async=!0; t.src=v;
        s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

      window.fbq('init', process.env.NEXT_PUBLIC_FB_PIXEL_ID);
      window.fbq('track', 'PageView');

      window.fbTrackBooking = (amount) => {
        window.fbq('track', 'Purchase', { value: amount, currency: 'AUD' });
      };
    }
  }, []);

  return null;
};

export default FacebookPixels;
