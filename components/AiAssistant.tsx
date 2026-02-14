
import React, { useState, useRef, useEffect } from 'react';
import { getPlumbingAdvice } from '../services/geminiService';
import { ChatMessage } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I am the PlumbPro Assistant. Describe your plumbing issue, and I will help you diagnose it or get you to a pro.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await getPlumbingAdvice(userMsg, messages);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    } catch (error) {
      console.error("Chat UI Error:", error);
      setMessages(prev => [...prev, { 
        role: 'model', 
        text: "I'm having trouble connecting to my service. Please try again or call (208) 555-0123 for immediate assistance." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white w-[350px] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          <div className="bg-primary p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <span className="font-bold">PlumbPro AI Helper</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:rotate-90 transition-transform">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50/50">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                  msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-white text-secondary border border-gray-100 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-gray-100 flex gap-1">
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="p-4 bg-white border-t border-gray-100 flex gap-2">
            <input 
              className="flex-grow border-gray-200 rounded-xl focus:ring-primary focus:border-primary px-4 py-2 text-sm"
              placeholder="Ask about a leak, clog, or noise..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="bg-primary text-white p-2 rounded-xl hover:bg-blue-700 disabled:opacity-50 transition-colors shadow-sm"
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-primary text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
        >
          <span className="material-symbols-outlined text-3xl">chat</span>
          <span className="absolute -top-1 -right-1 flex h-5 w-5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
            <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500 border-2 border-white"></span>
          </span>
        </button>
      )}
    </div>
  );
};

export default AiAssistant;
