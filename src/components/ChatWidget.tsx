import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MessageCircle, X, Send, User, Bot, ChevronDown, ChevronUp } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatWidget = () => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isQuickQuestionsVisible, setIsQuickQuestionsVisible] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: t('chat.greeting'),
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const quickReplies = [
    t('chat.quick.check'),
    t('chat.quick.amenities'),
    t('chat.quick.location'),
    t('chat.quick.booking'),
    t('chat.quick.contact')
  ];

  const botResponses: { [key: string]: string } = {
    [t('chat.quick.check').toLowerCase()]: t('chat.response.check'),
    [t('chat.quick.amenities').toLowerCase()]: t('chat.response.amenities'),
    [t('chat.quick.location').toLowerCase()]: t('chat.response.location'),
    [t('chat.quick.booking').toLowerCase()]: t('chat.response.booking'),
    [t('chat.quick.contact').toLowerCase()]: t('chat.response.contact')
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Simple bot response logic
    setTimeout(() => {
      const lowerInput = inputMessage.toLowerCase();
  let botResponse = t('chat.response.default');

      // Check for keywords in user message
      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerInput.includes(key.toLowerCase())) {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputMessage('');
  };

  const handleQuickReply = (reply: string) => {
    setInputMessage(reply);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString(
      t('chat.time.locale'),
      { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: true 
      }
    );
  };

  // WhatsApp chat link and pre-filled message
  const waNumber = '919971714172'; // Already correct, but ensure it's consistent with the new contact number
  const waMessage = encodeURIComponent(t('chat.wa.prefill'));
  const waLink = `https://wa.me/${waNumber}?text=${waMessage}`;

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center ${
          isOpen 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-emerald-600 hover:bg-emerald-700 animate-pulse'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 sm:bottom-24 right-2 sm:right-6 z-50 w-[95vw] max-w-sm sm:w-80 h-80 sm:h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center space-x-3">
            <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <div className="font-semibold">Rovers Suites</div>
              <div className="text-xs opacity-90">Usually replies instantly</div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.sender === 'user' 
                      ? 'bg-emerald-100 text-emerald-600' 
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {message.sender === 'user' ? (
                      <User className="h-3 w-3" />
                    ) : (
                      <Bot className="h-3 w-3" />
                    )}
                  </div>
                  <div>
                    <div className={`px-3 py-2 rounded-2xl text-sm ${
                      message.sender === 'user'
                        ? 'bg-emerald-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {message.text.split('\n').map((line, index) => {
                        // Detect Google Maps link and render as anchor
                        const mapsRegex = /(https:\/\/maps\.google\.com\/?\?q=[^\s]+)/;
                        const match = line.match(mapsRegex);
                        if (match) {
                          return (
                            <div key={index}>
                              <a
                                href={match[1]}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-700 underline break-all hover:text-emerald-900"
                              >
                                {match[1]}
                              </a>
                            </div>
                          );
                        }
                        return <div key={index}>{line}</div>;
                      })}
                    </div>
                    <div className="text-xs text-gray-500 mt-1 px-1">
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length <= 2 && (
            <div className="px-4 pb-2 border-t border-gray-100">
              <div className="flex items-center justify-between py-2">
                <div className="text-xs text-gray-500">{t('chat.quick.label')}</div>
                <button
                  onClick={() => setIsQuickQuestionsVisible(!isQuickQuestionsVisible)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  title={isQuickQuestionsVisible ? "Minimize quick questions" : "Show quick questions"}
                >
                  {isQuickQuestionsVisible ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>
              </div>
              {isQuickQuestionsVisible && (
                <div className="flex flex-wrap gap-1 pb-2">
                  {quickReplies.slice(0, 3).map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder={t('chat.input.placeholder')}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            {/* WhatsApp Button */}
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-full transition-colors text-sm shadow"
              style={{ textDecoration: 'none' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.366.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.288.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045c0-5.455 4.436-9.891 9.892-9.891 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.455-4.439 9.891-9.893 9.891zm8.413-18.304A11.815 11.815 0 0011.993 0C5.373 0 0 5.373 0 12.045c0 2.124.553 4.199 1.601 6.032L.057 23.925a1 1 0 001.225 1.225l5.93-1.545a11.93 11.93 0 005.78 1.474h.005c6.62 0 11.993-5.373 11.993-12.045a11.89 11.89 0 00-3.504-8.474z"/></svg>
              {t('chat.wa.button')}
            </a>

          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;