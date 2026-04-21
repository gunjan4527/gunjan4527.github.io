import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
import "../style.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // success / error / loading

  const sendEmail = (e) => {
    e.preventDefault();

    setStatus("loading");

    emailjs
      .sendForm(
        "service_cbyy59t",     // ✅ SERVICE ID
        "template_59ln5yu",    // ✅ TEMPLATE ID
        form.current,
        "Rl7otzjLpDfChHs2p"       // ✅ PUBLIC KEY
      )
      .then(
        () => {
          setStatus("success");
          form.current.reset();

          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("error");
        }
      );
  };

  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>

      <div className="contact-container">

        {/* INFO */}
        <div className="contact-info glass">
          <h3>Let's Connect 🚀</h3>

          <p><FaEnvelope /> ygunjankumar3@gmail.com</p>
          <p><FaPhone /> +91 9905234090</p>

          <a
            href="https://www.linkedin.com/in/gunjan-kumar-5866042aa"  // ✅ FIXED LINK
            target="_blank"
            rel="noreferrer"
            className="linkedin-btn"
          >
            <FaLinkedin /> LinkedIn
          </a>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form glass">

          <div className="input-group">
            <input type="text" name="user_name" required />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="user_email" required />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" required></textarea>
            <label>Message</label>
          </div>

          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Send Message 🚀"}
          </button>

          {/* STATUS MESSAGES */}
          {status === "success" && (
            <div className="success-popup">✅ Message Sent!</div>
          )}

          {status === "error" && (
            <div className="error-popup">❌ Failed to send</div>
          )}

        </form>

      </div>
    </section>
  );
}

























// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";
// import { FaEnvelope, FaPhone, FaLinkedin } from "react-icons/fa";
// import "./style.css";

// export default function Contact() {
//   const form = useRef();
//   const [success, setSuccess] = useState(false);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "YOUR_SERVICE_ID",
//         "YOUR_TEMPLATE_ID",
//         form.current,
//         "YOUR_PUBLIC_KEY"
//       )
//       .then(
//         () => {
//           setSuccess(true);
//           form.current.reset();

//           setTimeout(() => setSuccess(false), 3000);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <h2 className="contact-title">Contact Me</h2>

//       <div className="contact-container">

//         {/* INFO */}
//         <div className="contact-info glass">
//           <h3>Let's Connect 🚀</h3>
//           <p><FaEnvelope /> ygunjankumar3@gmail.com</p>
//           <p><FaPhone /> +91 9905234090</p>

//           <a
//             href="www.linkedin.com/in/gunjan-kumar-5866042aa"
//             target="_blank"
//             rel="noreferrer"
//             className="linkedin-btn"
//           >
//             <FaLinkedin /> LinkedIn
//           </a>
//         </div>

//         {/* FORM */}
//         <form ref={form} onSubmit={sendEmail} className="contact-form glass">

//           <div className="input-group">
//             <input type="text" name="user_name" required />
//             <label>Name</label>
//           </div>

//           <div className="input-group">
//             <input type="email" name="user_email" required />
//             <label>Email</label>
//           </div>

//           <div className="input-group">
//             <textarea name="message" required></textarea>
//             <label>Message</label>
//           </div>

//           <button type="submit">Send Message 🚀</button>

//           {success && <div className="success-popup">✅ Message Sent!</div>}
//         </form>

//       </div>
//     </section>
//   );
// }