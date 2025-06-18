import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const faq = [
  {
    q: "What is text.ai?",
    a: "text.ai is an AI in every chat. text.ai <br/> simply joins your existing individual and group chats to help with plans, recommendations, and answers.",
  },
  {
    q: "How much does it cost to use?",
    a: "text.ai is free to use for up to 10 messages every 12 hours.",
  },
  {
    q: "How does text.ai work?",
    a: "Just add text.ai to any chat and get instant help without switching apps. <br/> Including your group chats!",
  },
  {
    q: "What platforms is text.ai available on?",
    a: "Currently text.ai is available on SMS (US & CA), WhatsApp (worldwide), and Telegram (worldwide).",
  },
  {
    q: "How do I try text.ai?",
    a: " Save our contact card: [text.ai contact card] <br/>  Text directly or add to your group chats <br/>  That's it! Works on SMS, WhatsApp & Telegram",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const createMarkup = (html: string) => {
    return { __html: html.replace(/<br\/>/g, '<br />') };
  };

  return (
    <div className="max-w-3xl mx-auto px-4 text-white/60">
      <div className="space-y-1">
        {faq.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="border border-white/10 rounded-lg overflow-hidden"
          >
            <motion.button
              className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
              whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.03)' }}
              whileTap={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
            >
              <h2 className="text-lg font-medium">{item.q}</h2>
              <motion.div
                animate={{ rotate: activeIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  className="w-5 h-5 text-white/20"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </motion.button>
            
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: 'auto',
                    opacity: 1,
                    transition: {
                      height: { duration: 0.3 },
                      opacity: { duration: 0.2, delay: 0.1 }
                    }
                  }}
                  exit={{ 
                    height: 0,
                    opacity: 0,
                    transition: {
                      height: { duration: 0.2 },
                      opacity: { duration: 0.1 }
                    }
                  }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0">
                    <div 
                      className="text-white/80"
                      dangerouslySetInnerHTML={createMarkup(item.a)}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}