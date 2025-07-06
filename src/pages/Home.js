import React, { useEffect, useRef } from "react";

export default function Home() {
  const contentRef = useRef(null);

  useEffect(() => {
    const emojiRegex = /\p{Emoji}/gu;
    const el = contentRef.current;
    if (!el) return;
    el.innerHTML = el.textContent.replace(emojiRegex, () => {
      return '<span class="blue-tick"></span>';
    });
  }, []);

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <style>{`
        .blue-tick {
          display: inline-block;
          width: 20px;
          height: 20px;
          position: relative;
        }
        .blue-tick::before {
          content: '';
          position: absolute;
          width: 10px;
          height: 20px;
          border-right: 3px solid dodgerblue;
          border-bottom: 3px solid dodgerblue;
          transform: rotate(45deg) scale(0);
          animation: tick-draw 0.4s ease-out forwards;
          top: 0;
          left: 4px;
        }
        @keyframes tick-draw {
          to {
            transform: rotate(45deg) scale(1);
          }
        }
      `}</style>
      <div
        id="content"
        ref={contentRef}
        style={{ fontSize: "1.2rem", maxWidth: 500, margin: "0 auto" }}
      >
        Hello 👋, welcome to our platform 😄! You’ve got updates 📬.
      </div>
    </div>
  );
}
