"use client";

import React, { useState, useEffect, useRef } from "react";
import { IoChatbubbleEllipsesOutline, IoClose, IoSend } from "react-icons/io5";

export default function RecruiterChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [showDot, setShowDot] = useState(true);
  const [messages, setMessages] = useState([
    {
      sender: "system",
      text: "Hello! I am Gopi's Virtual Assistant. Thanks for visiting his portfolio. Ask me anything about his qualifications, experience, or notice period!"
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef(null);

  const quickReplies = {
    "Are you open to relocation?": "Yes! Gopi is currently based in Andhra Pradesh, India, and is open to relocation for full-time backend or full-stack software engineer roles.",
    "What is Gopi's notice period?": "Gopi can join immediately or within a standard short notice period.",
    "What is Gopi's core tech stack?": "Gopi's primary tech stack is Java (Java 17), Spring Boot, REST APIs, microservices, databases (MySQL, Oracle, PostgreSQL), Kafka message brokers, and React JS for frontends.",
    "What experience does he have?": "Gopi has nearly 2 years of experience at Payswiff Technologies Pvt. Ltd, developing secure portals, reconciliation batch engines, and POS cryptographic key systems."
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
    setShowDot(false);
  };

  const handleSendQuickReply = (question) => {
    const userMsg = { sender: "user", text: question };
    const replyText = quickReplies[question] || "I'm not sure about that. Try sending Gopi a direct message via the contact form below!";
    const systemMsg = { sender: "system", text: replyText };

    setMessages((prev) => [...prev, userMsg, systemMsg]);
  };

  const handleSendText = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { sender: "user", text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");

    setTimeout(() => {
      const systemMsg = {
        sender: "system",
        text: "Thanks for reaching out! Gopi has received your message and will follow up with you via email. You can also fill out the Contact Form on the page to leave a detailed message."
      };
      setMessages((prev) => [...prev, systemMsg]);
    }, 1000);
  };

  return (
    <div className="chat-widget-container">
      {/* Expanded Chat Drawer */}
      {isOpen && (
        <div className="chat-window glass-panel">
          <div className="chat-header">
            <div className="chat-header-title">
              <h3>Recruiter Assistant</h3>
              <span>Online • Assistant</span>
            </div>
            <button className="chat-close-btn" onClick={handleToggle} aria-label="Close chat">
              <IoClose />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`message-bubble ${msg.sender === "system" ? "message-system" : "message-user"}`}
              >
                {msg.text}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies options */}
          <div className="chat-chips">
            {Object.keys(quickReplies).map((question, idx) => (
              <button 
                key={idx}
                className="chat-chip"
                onClick={() => handleSendQuickReply(question)}
              >
                {question}
              </button>
            ))}
          </div>

          {/* User Input Area */}
          <form className="chat-input-area" onSubmit={handleSendText}>
            <input 
              type="text" 
              className="chat-input"
              placeholder="Ask a question..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="chat-send-btn">
              <IoSend />
            </button>
          </form>
        </div>
      )}

      {/* Floating Chat Bubble */}
      <button className="chat-bubble" onClick={handleToggle} aria-label="Open chat assistant">
        <IoChatbubbleEllipsesOutline />
        {showDot && <span className="chat-notification-dot"></span>}
      </button>
    </div>
  );
}
