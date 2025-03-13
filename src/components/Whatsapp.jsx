import React from 'react';

const ContactButtons = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/73102112507', '_blank');
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
    </div>
  );
};

export default ContactButtons;
