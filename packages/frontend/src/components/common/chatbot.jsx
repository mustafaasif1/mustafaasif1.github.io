import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faPaperPlane, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useChat } from '@ai-sdk/react';
import ReactMarkdown from 'react-markdown';
import './styles/chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const [inputValue, setInputValue] = useState('');
  const { messages, sendMessage, isLoading } = useChat({
    api: '/api/chat',
    initialMessages: [],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;
    
    const message = { role: 'user', content: inputValue };
    setInputValue('');
    await sendMessage(message);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="chat-button"
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faComment} />
      </button>

      {isOpen && (
        <div className="chat-window flex flex-col">
          <div className="p-4 bg-primary text-quaternary rounded-t-lg">
            <h3 className="text-lg font-medium">Chat with me</h3>
          </div>

          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4"
            style={{ backgroundColor: 'var(--background-color)' }}
          >
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-quaternary'
                      : 'bg-quaternary text-primary'
                  }`}
                >
                  <ReactMarkdown 
                    className="prose prose-sm dark:prose-invert max-w-none"
                    components={{
                      p: ({node, ...props}) => <p className="m-0" {...props} />,
                      pre: ({node, ...props}) => (
                        <pre className="bg-gray-800 text-gray-100 rounded p-2 my-2 overflow-x-auto" {...props} />
                      ),
                      code: ({node, inline, ...props}) => (
                        inline 
                          ? <code className="bg-gray-200 dark:bg-gray-700 rounded px-1" {...props} />
                          : <code {...props} />
                      )
                    }}
                  >
                    {message.content}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-quaternary">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                disabled={isLoading}
                className="flex-1 p-2 rounded border border-quaternary"
                style={{ 
                  backgroundColor: 'var(--background-color)',
                  color: 'var(--primary-color)',
                  borderColor: 'var(--quaternary-color)'
                }}
              />
              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="p-2 rounded bg-primary text-quaternary hover:bg-secondary transition-colors duration-300 disabled:opacity-50"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;