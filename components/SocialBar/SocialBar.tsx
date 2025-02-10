"use client";
import { useEffect, useState } from "react";
import { FaFacebook, FaTwitter, FaWhatsapp, FaPrint } from "react-icons/fa";

const socialButtons: {
  platform: "facebook" | "twitter" | "whatsapp" | "print";
  Icon: any;
  color: string;
  hoverColor: string;
}[] = [
  {
    platform: "facebook",
    Icon: FaFacebook,
    color: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    platform: "twitter",
    Icon: FaTwitter,
    color: "bg-blue-400",
    hoverColor: "hover:bg-blue-500",
  },
  {
    platform: "whatsapp",
    Icon: FaWhatsapp,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
  },
  {
    platform: "print",
    Icon: FaPrint,
    color: "bg-yellow-400",
    hoverColor: "hover:bg-gray-700",
  },
];

const SocialBar = () => {
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  const share = (platform: "facebook" | "twitter" | "whatsapp" | "print") => {
    const urls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
      twitter: `https://twitter.com/intent/tweet?url=${currentUrl}`,
      whatsapp: `https://api.whatsapp.com/send?text=${currentUrl}`,
    };

    if (platform === "print") {
      window.print();
    } else if (currentUrl) {
      window.open(urls[platform], "_blank");
    }
  };

  return (
    <div className="flex items-center justify-center space-x-2 py-2">
      {socialButtons.map(({ platform, Icon, color, hoverColor }) => (
        <button
          key={platform}
          onClick={() => share(platform)}
          className={`${color} ${hoverColor} text-white flex items-center justify-center w-64 h-12`}
        >
          <Icon size={24} />
        </button>
      ))}
    </div>
  );
};

export default SocialBar;
