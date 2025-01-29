import { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaWhatsapp, FaPrint, } from 'react-icons/fa';

const SocialBar = () => {
  const [currentUrl, setCurrentUrl] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href); 
    }
  }, []);

  const share = (platform: 'facebook' | 'twitter' | 'whatsapp' | 'print') => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
      whatsapp: `https://api.whatsapp.com/send?text=${currentUrl}`,
    };

    if (platform === 'print') {
      window.print();
    } else if (currentUrl) {
      window.open(urls[platform], '_blank');
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-2">
      
      <button
        onClick={() => share('facebook')}
        className="bg-blue-600 text-white flex items-center justify-center w-64 h-12 hover:bg-blue-700"
      >
        <FaFacebook size={24} />
      </button>

      <button
        onClick={() => share('twitter')}
        className="bg-blue-400 text-white flex items-center justify-center w-64 h-12 hover:bg-blue-500"
      >
        <FaTwitter size={24} />
      </button>

      <button
        onClick={() => share('whatsapp')}
        className="bg-green-500 text-white flex items-center justify-center w-64 h-12 hover:bg-green-600"
      >
        <FaWhatsapp size={24} />
      </button>

      <button
        onClick={() => share('print')}
        className="bg-yellow-400 text-white flex items-center justify-center w-64 h-12 hover:bg-gray-700"
      >
        <FaPrint size={24} />
      </button>
    </div>
  );
};

export default SocialBar;
