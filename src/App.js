import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

import Security from "./pages/Security.js";
import Footer from "./components/Footer";
import Terms from "./pages/Terms"
import Admin from "./pages/Admin";
import ProtectedRoute from "./components/ProtectedRoute"; // Import the ProtectedRoute component
import Home from "./pages/Home"; // Add this import


export default function App() {
  const [showTerms, setShowTerms] = useState(() => {
    return localStorage.getItem("acceptedTerms") !== "true";
  });
  const handleAcceptTerms = () => {
    localStorage.setItem("acceptedTerms", "true");
    setShowTerms(false);
  };
  const handleDeclineTerms = () => {
    window.location.href = "https://www.google.com";
  };
  useEffect(() => {
    if (showTerms) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [showTerms]);

  return (
    <>
      {/* Terms & Conditions Popup */}
      {showTerms && (
        <div
          style={{
            position: "fixed",
            zIndex: 3000,
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 8px",
            overflowX: "hidden" // Prevent horizontal scroll on popup
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: "16px",
              maxWidth: 380,
              width: "100%",
              padding: "1.5rem 1rem 1.2rem 1rem",
              boxSizing: "border-box", // Ensure padding doesn't overflow
              boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
              textAlign: "center",
              position: "relative",
              margin: "0 auto",
              overflowX: "hidden" // Prevent horizontal scroll on modal
            }}
          >
            <h2 style={{ marginBottom: 14, color: "#222", fontSize: "1.25rem", lineHeight: 1.2 }}>Terms & Conditions</h2>
            <p style={{ color: "#444", fontSize: "1rem", marginBottom: 16, lineHeight: 1.5 }}>
              You must be at least <b>18 years old</b> to enter this site.<br />
              By clicking "I Accept", you confirm that you are an adult and agree to our terms and conditions.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, justifyContent: "center", marginTop: 18 }}>
              <button
                onClick={handleAcceptTerms}
                style={{
                  background: "linear-gradient(90deg, #2196f3 60%, #25d366 100%)",
                  color: "#fff",
                  border: "none",
                  borderRadius: "20px",
                  padding: "0.7rem 0",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                  letterSpacing: "0.5px",
                  width: "100%",
                  minWidth: 0,
                }}
              >
                I Accept
              </button>
              <button
                onClick={handleDeclineTerms}
                style={{
                  background: "#eee",
                  color: "#222",
                  border: "none",
                  borderRadius: "20px",
                  padding: "0.7rem 0",
                  fontWeight: 600,
                  fontSize: "1.05rem",
                  cursor: "pointer",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
                  letterSpacing: "0.5px",
                  width: "100%",
                  minWidth: 0,
                }}
              >
                I Decline
              </button>
            </div>
            <div style={{ marginTop: 14, fontSize: "0.95rem", color: "#888" }}>
              <a href="/terms" style={{ color: "#2196f3", textDecoration: "underline", wordBreak: "break-word" }}>
                Read full Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Navbar outside everything */}
      <div style={{
        width: "100vw",
        maxWidth: "100vw",
        overflowX: "hidden",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 100,
        boxShadow: "0 1px 8px rgba(0,0,0,0.04)"
      }}>
        <Navbar />
      </div>

      <div
        className="page-container"
        style={{
          maxWidth: '100%',
          width: "100vw",
          minWidth: 0,
          margin: "auto",
          padding: "0 0.5rem",
          minHeight: "100vh",
          background: "#fafbfc",
          boxSizing: "border-box",
          overflowX: "hidden" // Prevent horizontal scroll on main content
        }}
      >
        <div
          className="main-content"
          style={{
            // Remove paddingBottom so footer doesn't float above bottom
            overflowX: "hidden"
          }}
        >
          <Routes>
            <Route path="/" element={<Security />} /> {/* Change to Home */}
            <Route path="/security" element={<Security />} />
            <Route path="/terms" element={<Terms />} />
            <Route
  path="/admin"
  element={
    <ProtectedRoute isAllowed={Boolean(localStorage.getItem('token')) && localStorage.getItem('role') === 'admin'}>
      <Admin />
    </ProtectedRoute>
  }
/>
          </Routes>
        </div>
        {/* Sticky footer: only appears at page bottom */}
        <div
          style={{
            width: "100%",
            maxWidth: 480,
            margin: "0 auto",
            position: "sticky",
            bottom: 0,
            left: 0,
            zIndex: 10,
            background: "#fafbfc"
          }}
        >
          <Footer />
        </div>
      </div>
      {/* Prevent horizontal scroll on body */}
      <style>{`
        html, body {
          max-width: 100vw !important;
          overflow-x: hidden !important;
        }
        .page-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1 0 auto;
        }
        /* Footer only at bottom, not floating */
        .page-container > div:last-child {
          flex-shrink: 0;
        }
      `}</style>
    </>
  );
}