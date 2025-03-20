import { useState } from "react";
import { Send, MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";

const Input = ({ value, onChange, placeholder }) => (
  <input 
    type="text" 
    value={value} 
    onChange={onChange} 
    placeholder={placeholder} 
    className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 bg-gray-100"
  />
);

const Button = ({ onClick, children, className = "" }) => (
  <button 
    onClick={onClick} 
    className={`p-3 bg-purple-500 text-white rounded-xl hover:bg-purple-600 transition-all duration-300 ${className}`}
  >
    {children}
  </button>
);

const AIHealthAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm ZenHer, your women's health assistant. How can I assist you today?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;
    
    const newMessages = [...messages, { text: input, sender: "user" }];
    setMessages(newMessages);
    setInput("");
    
    // Simulated AI response (Replace with actual API integration)
    setTimeout(() => {
      setMessages([...newMessages, { text: "Thank you for your query. For personalized guidance, please consult a healthcare provider.", sender: "bot" }]);
    }, 1200);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 flex flex-col items-end z-50">
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="w-80 sm:w-96 bg-white shadow-2xl rounded-xl border border-gray-200"
        >
          {/* Header with Title & Close Button */}
          <div className="flex justify-between items-center px-4 py-3 bg-purple-500 text-white rounded-t-xl">
            <h3 className="text-lg font-semibold">ZenHer AI Assistant</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-full hover:bg-purple-600 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-4 h-72 overflow-y-auto flex flex-col gap-3">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`p-3 rounded-xl max-w-[75%] sm:max-w-[80%] ${msg.sender === "user" ? "bg-purple-500 text-white self-end" : "bg-gray-200 text-gray-800 self-start"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input & Send Button */}
          <div className="p-4 flex items-center gap-2 sm:gap-3 border-t border-gray-200">
            <Input 
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about women's health..." 
            />
            <Button onClick={sendMessage}>
              <Send className="w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      )}

      {/* Chat Open Button */}
      <Button 
        onClick={() => setIsOpen(!isOpen)} 
        className="rounded-full p-4 shadow-lg bg-purple-500 hover:bg-purple-600 text-white flex items-center justify-center"
      >
        <MessageCircle className="w-7 h-7" />
      </Button>
    </div>
  );
};

export default AIHealthAssistant;
