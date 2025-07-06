import React, { useEffect, useState } from "react";
import {
  PhoneCall,
  MessageCircle,
  Send,
  Mail as MailIcon,
} from "lucide-react";
import "./../App.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      const visibleHeight = window.innerHeight;
      const totalHeight = document.body.scrollHeight;
      if (scrollY + visibleHeight >= totalHeight - 120) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="transparent-footer-spacer" />
      <footer
        className="footer-contact visible"
        style={{
          opacity: showFooter ? 1 : 0,
          transition: "opacity 0.7s",
          pointerEvents: showFooter ? "auto" : "none",
          position: "fixed",
          left: 0,
          bottom: 0,
          width: "100vw",
          zIndex: 1002,
        }}
      >
        <div className="footer-label">Support and Contact</div>
        <div className="footer-actions">
          <a href="tel:8905769276" className="footer-action call" title="Call">
            <PhoneCall size={22} />
          </a>
          <a
            href="https://wa.me/8905769276"
            className="footer-action whatsapp"
            target="_blank"
            rel="noopener noreferrer"
            title="WhatsApp"
          >
            <MessageCircle size={22} />
          </a>
          <a
            href="https://t.me/@sharma_1manisha"
            className="footer-action telegram"
            target="_blank"
            rel="noopener noreferrer"
            title="Telegram"
          >
            <Send size={22} />
          </a>
          <a
            href="mailto:escortserviceelite@gmail.com"
            className="footer-action mail"
            title="Mail"
          >
            <MailIcon size={22} />
          </a>
        </div>
        <div style={{ marginTop: "1rem", color: "#888", fontSize: "0.97rem", textAlign: "center" }}>
          &copy; {new Date().getFullYear()} Elite Escort Service. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
