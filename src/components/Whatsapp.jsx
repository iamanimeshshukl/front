import React from 'react';

const ContactButtons = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/9839175313', '_blank');
  };

  const handleCallClick = () => {
    window.location.href = 'tel:+919839175313';
  };

  return (
    <div className="fixed bottom-5 right-5 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-colors"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </button>

      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        <img
          src="https://i.pinimg.com/564x/87/b1/2a/87b12a1e8a11f6c1264a237c5f08c195.jpg"
          alt="Call"
          className="w-10 h-10"
        />
      </button>
    </div>
  );
};

export default ContactButtons;
