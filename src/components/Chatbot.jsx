import React, { useState, useEffect, useRef } from "react";
import './style.css'

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 I'm your AI assistant!", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  const [isOpen, setIsOpen] = useState(false); // ✅ NEW STATE

  const chatRef = useRef();

  // Auto scroll
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  // Toggle chatbot
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const clearChat = () => {
    setMessages([
      { text: "Hi 👋 I'm your AI assistant!", sender: "bot" }
    ]);
  };

  const deleteMessage = (index) => {
    setMessages(messages.filter((_, i) => i !== index));
  };

  const sendMessage = () => {
    if (!input) return;

    const userMsg = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMsg]);

    const msg = input.toLowerCase();
    let botReply = "";

    if (msg.includes("hi") || msg.includes("hello")) {
      botReply = "Hello 👋 Nice to meet you!";
    } else if (msg.includes("project")) {
      botReply = "Check my projects 🚀";
    } else if (msg.includes("skills")) {
      botReply = "Python, SQL, ML 📊";
    } else {
      botReply = "Ask about projects, skills or contact 😊";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="chatbot">

      {/* ✅ TOGGLE BUTTON */}
      <button className="chatbot-toggle" onClick={toggleChat}>
        {isOpen ? "❌ Close" : "💬 Chat"}
      </button>

      {/* ✅ CONDITIONAL RENDER */}
      {isOpen && (
        <div className={`chatbot-content ${isOpen ? "open" : ""}`}>

          <h3>💬 Chat with me</h3>

          <button onClick={clearChat} className="clear-btn">
            🗑 Clear Chat
          </button>

          <div className="chat-box" ref={chatRef}>
            {messages.map((msg, i) => (
              <div key={i} className={msg.sender}>
                {msg.text}

                {msg.sender === "user" && (
                  <span
                    onClick={() => deleteMessage(i)}
                    style={{ marginLeft: "10px", cursor: "pointer" }}
                  >
                    ❌
                  </span>
                )}
              </div>
            ))}
          </div>

          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask something..."
          />

          <button onClick={sendMessage}>Send</button>
        </div>
      )}

    </div>
  );
}


























// import React, { useState, useEffect, useRef } from "react";

// import './style.css'

// export default function Chatbot() {
//   const [messages, setMessages] = useState([
//     { text: "Hi 👋 I'm your AI assistant!", sender: "bot" }
//   ]);
//   const [input, setInput] = useState("");

//   const chatRef = useRef();

//   // Auto scroll
//   useEffect(() => {
//     chatRef.current.scrollTop = chatRef.current.scrollHeight;
//   }, [messages]);

//   // ✅ CLEAR CHAT (INSIDE COMPONENT)
//   const clearChat = () => {
//     setMessages([
//       { text: "Hi 👋 I'm your AI assistant!", sender: "bot" }
//     ]);
//   };

//   // ✅ DELETE SINGLE MESSAGE
//   const deleteMessage = (index) => {
//     setMessages(messages.filter((_, i) => i !== index));
//   };

//   const sendMessage = () => {
//     if (!input) return;

//     const userMsg = { text: input, sender: "user" };
//     setMessages(prev => [...prev, userMsg]);

//     const msg = input.toLowerCase();
//     let botReply = "";

//     if (msg.includes("hi") || msg.includes("hello")) {
//       botReply = "Hello 👋 Nice to meet you!";
//     } else if (msg.includes("project")) {
//       botReply = "Check my projects 🚀";
//     } else if (msg.includes("skills")) {
//       botReply = "Python, SQL, ML 📊";
//     } else {
//       botReply = "Ask about projects, skills or contact 😊";
//     }

//     setTimeout(() => {
//       setMessages(prev => [...prev, { text: botReply, sender: "bot" }]);
//     }, 3000);

//     setInput("");
//   };

//   return (
//     <div className="chatbot">
//       <button className="chatbot-toggle">
//         test
//       </button>
//       <div className="chatbot-content">

//         <h3>💬 Chat with me</h3>

//         {/* ✅ Clear Button */}
//         <button onClick={clearChat} className="clear-btn">
//           🗑 Clear Chat
//         </button>

//         <div className="chat-box" ref={chatRef}>
//           {messages.map((msg, i) => (
//             <div key={i} className={msg.sender}>
//               {msg.text}

//               {/* Show delete only for user messages */}
//               {msg.sender === "user" && (
//                 <span
//                   onClick={() => deleteMessage(i)}
//                   style={{ marginLeft: "10px", cursor: "pointer" }}
//                 >
//                   ❌
//                 </span>
//               )}
//             </div>
//           ))}
//         </div>

//         <input
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Ask something..."
//         />

//         <button onClick={sendMessage}>Send</button>
//       </div>
//     </div>
//   );
// }