import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open("https://wa.me/233558230525", "_blank");
  };

  return (
            <button
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-hover hover:scale-110 transition-transform duration-300 animate-pulse-glow"
          style={{ animationDuration: "3s" }}  // slower pulse
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

  );
};

export default WhatsAppButton;
