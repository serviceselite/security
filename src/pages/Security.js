import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { CheckCircle, Info, IndianRupee, QrCode, Smartphone } from "lucide-react";
import "./def.css";

const bgUrl = "https://cdn.discordapp.com/attachments/861844344822431754/1384191805624418334/bg.jpg?ex=68518893&is=68503713&hm=3d693189fa7f4c06223f7d86bd5bfb741694fe787905eef7bfd02069f97145e7&";

// Helper to ensure date is in YYYY-MM-DD format
function formatDate(dateStr, fallback) {
  if (!dateStr) return fallback;
  // If already in YYYY-MM-DD, return as is
  if (/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return dateStr;
  // Try to parse and format
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return fallback;
  return d.toISOString().slice(0, 10);
}

export default function RefundPage() {
  const [form, setForm] = useState({
    serviceId: localStorage.getItem("admin_serviceId") || "000-000",
    mobile: localStorage.getItem("admin_mobile") || "Not Entered",
    joiningDate: formatDate(localStorage.getItem("admin_joiningDate"), "2025-01-01"),
    refundDate: formatDate(localStorage.getItem("admin_refundDate"), "2025-01-01"),
    amount: localStorage.getItem("admin_amount") || "8,500",
    upi: localStorage.getItem("admin_upi") || "your-upi-id@upi"
  });
  const [submitted, setSubmitted] = useState(false);
  const [showUPIApps, setShowUPIApps] = useState(false);
  const [showFullQR, setShowFullQR] = useState(false);
  const [upiAppList] = useState([
    {
      name: "Google Pay",
      url: (upiId, payeeName, amount) =>
        `intent://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`,
      logo: "/images/gpay.png"
    },
    {
      name: "PhonePe",
      url: (upiId, payeeName, amount) =>
        `intent://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR#Intent;scheme=upi;package=com.phonepe.app;end`,
      logo: "/images/ppay.png"
    },
    {
      name: "Paytm",
      url: (upiId, payeeName, amount) =>
        `intent://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&am=${amount}&cu=INR#Intent;scheme=upi;package=net.one97.paytm;end`,
      logo: "/images/paytm.png"
    },
   
  ]);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend
    alert("Refund request submitted!\nWe will contact you soon.");
    // Optionally navigate or reset form
    // navigate("/"); 
  };

  // Footer fade-in logic
  const [showFooter, setShowFooter] = useState(false);
  const pageContainerRef = useRef(null);

  // Admin control: set this to true/false to show completed/not completed box
  const [idVerified, setIdVerified] = useState(
    localStorage.getItem("admin_id_verified") === "true"
  );

  useEffect(() => {
    function handleScroll() {
      const container = pageContainerRef.current;
      if (!container) return;
      const scrollY = container.scrollTop;
      
      const totalHeight = container.scrollHeight;
      if (scrollY  >= totalHeight - 120) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    }
    const container = pageContainerRef.current;
    if (container) {
      container.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        width: "100vw",
        background: "transparent",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Blurred Background Image */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          backgroundImage: `url(${bgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          opacity: 0.9,
          zIndex: 1001,
          pointerEvents: "none"
        }}
      />
      <div
        className="page-container"
        ref={pageContainerRef}
        style={{
          position: "relative",
          top: 0,
          left: 0,
          zIndex: 2,
          width: "100vw",
          minHeight: "100vh",
          maxWidth: "100vw",
          maxHeight: "none",
          minWidth: "100vw",
          padding: "0",
          alignContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          boxSizing: "border-box",
          overflowY: "auto",
          overflowX: "hidden",
          background: "transparent"
        }}
      >
        <h1 className="page-title" style={{ fontSize: "clamp(1.3rem, 5vw, 2.5rem)", margin: "0" }}>Security Submission</h1>
        {/* ID Verification Status Box */}
        {idVerified ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(1rem, 2.5vw, 1.13rem)",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(67,233,123,0.13)",
              padding: "clamp(0.7rem, 2vw, 1rem) clamp(1rem, 4vw, 1.5rem)",
              margin: "0 auto",
              maxWidth: 350,
              letterSpacing: "0.5px",
              animation: "id-verified-pulse 1.5s infinite alternate"
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#fff",
                marginRight: 12,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                animation: "id-verified-bounce 1.1s infinite alternate"
              }}
            >
              <CheckCircle color="#43e97b" size={22} />
            </span>
            ID verification completed
          </div>
        ) : (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(90deg, #ffb347 0%, #ffcc80 100%)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "clamp(1rem, 2.5vw, 1.13rem)",
              borderRadius: "16px",
              boxShadow: "0 2px 12px rgba(255,183,77,0.13)",
              padding: "clamp(0.7rem, 2vw, 1rem) clamp(1rem, 4vw, 1.5rem)",
              margin: "0 auto",
              marginBottom: 5,
              maxWidth: 350,
              letterSpacing: "0.5px",
              animation: "id-verified-pulse 1.5s infinite alternate"
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "#fff",
                marginRight: 12,
                marginBottom: 5,
                boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                animation: "id-verified-bounce 1.1s infinite alternate"
              }}
            >
              <Info color="#ff9800" size={22} />
            </span>
            ID verification not completed
          </div>
        )}
        <style>
          {`
            @keyframes id-verified-pulse {
              0% { box-shadow: 0 0 0 0 #43e97b33, 0 2px 12px rgba(67,233,123,0.13);}
              100% { box-shadow: 0 0 24px 8px #38f9d755, 0 2px 12px rgba(67,233,123,0.13);}
            }
            @keyframes id-verified-bounce {
              0% { transform: scale(1) rotate(-6deg);}
              50% { transform: scale(1.13) rotate(6deg);}
              100% { transform: scale(1) rotate(-6deg);}
            }
            @media (max-width: 900px) {
              .refund-main-box {
                max-width: 98vw !important;
                margin-left: 0 !important;
                padding: 2vw !important;
              }
            }
            @media (max-width: 600px) {
              .refund-flex-row {
                flex-direction: column !important;
                gap: 18px !important;
              }
              .refund-method-box {
                min-width: 0 !important;
                width: 100% !important;
                padding: 0.8rem 0.5rem !important;
                max-width: 100vw !important;
              }
              .refund-modal-qr {
                width: 90vw !important;
                height: 90vw !important;
                max-width: 340px !important;
                max-height: 340px !important;
                min-width: 180px !important;
                min-height: 180px !important;
              }
              .refund-main-box {
                max-width: 100vw !important;
                margin-left: 0 !important;
                padding: 2vw !important;
              }
            }
          `}
        </style>
        <div
          className="refund-main-box"
          style={{
            maxWidth: 800,
            width: "100%",
            margin: "0 auto",
            background: "#fff",
            borderRadius: "clamp(10px, 2vw, 16px)",
            boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            padding: "clamp(1rem, 4vw, 32px)",
            boxSizing: "border-box",
            overflowX: "auto"
          }}>
          <p style={{ color: "#555", marginBottom: 24, fontSize: "clamp(1rem, 2vw, 1.1rem)" }}>
            Our team will review your request and get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            
            
            <label>
              Mobile Number
              <input
                type="tel"
                name="mobile"
                value={form.mobile}
                readOnly
                disabled
                style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4, background: "#f5f5f5" }}
                placeholder="10-digit mobile number"
              />
            </label>
            <label>
              Joining Date
              <input
                type="date"
                name="joiningDate"
                value={form.joiningDate}
                readOnly
                disabled
                style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4, background: "#f5f5f5" }}
              />
            </label>
            <label>
              Refund Date
              <input
                type="date"
                name="refundDate"
                value={form.refundDate}
                readOnly
                disabled
                style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4, background: "#f5f5f5" }}
              />
            </label>
            <label>
              Service ID
              <input
                type="text"
                name="serviceId"
                value={form.serviceId}
                onChange={e => setForm({ ...form, serviceId: e.target.value || "000-000" })}
                style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4, background: "#f5f5f5" }}
                placeholder="Service ID"
              />
            </label>
            {/* Admin-editable Amount */}
            <label>
              Amount
              <input
                type="text"
                name="amount"
                value={form.amount}
                onChange={e => setForm({ ...form, amount: e.target.value })}
                style={{ width: "100%", padding: "0.6rem", borderRadius: 8, border: "1px solid #ccc", marginTop: 4 }}
                placeholder="Amount"
              />
            </label>
            {/* Refund Info Box */}
            <div
              style={{
                background: "linear-gradient(90deg, #fffde4 0%, #f7e8ff 100%)",
                color: "#222",
                borderRadius: "14px",
                boxShadow: "0 2px 8px rgba(33,150,243,0.07)",
                padding: "clamp(0.7rem, 2vw, 1.1rem) clamp(1rem, 4vw, 1.3rem)",
                margin: "0 0 0 0",
                fontWeight: 600,
                fontSize: "clamp(1rem, 2vw, 1.08rem)",
                letterSpacing: "0.2px",
                lineHeight: 1.7,
                border: "1px solid #e0e0e0",
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                gap: 0
              }}
            >
              <Info color="#388e3c" size={22} style={{ marginRight: 6 }} />
              <span style={{ display: "inline-block", textAlign: "left" }}>
                Hello Dear,<br />
                Welcome to ROYAL ESCORT<br />
                Your Security amount is <span style={{ color: "#388e3c", fontWeight: 700, fontSize: "clamp(1rem, 2vw, 1.13rem)", display: "inline-flex", alignItems: "center", gap: 2 }}>
                  {form.amount}&nbsp;
                  <IndianRupee size={18} color="#388e3c" />
                </span>.<br />
                Both of your code numbers are not verified.
              </span>
            </div>
            {/* Choose Payment Method */}
            <div style={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: "clamp(1rem, 2vw, 1.08rem)",
              margin: "18px 0 10px 0",
              letterSpacing: "0.2px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8
            }}>
              <Smartphone size={20} color="#007bff" style={{ marginRight: 4 }} />
              Pay using QR Code or UPI App
            </div>
            <div
              className="refund-flex-row"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                gap: 32,
                marginBottom: 18,
                flexWrap: "wrap",
                width: "100%"
              }}
            >
              {/* QR Code Method ONLY */}
              <div className="refund-method-box" style={{
                background: "#fff8e1",
                border: "1px solid #ffe0b2",
                borderRadius: 12,
                padding: "clamp(0.7rem, 2vw, 1.1rem) clamp(1rem, 4vw, 1.3rem)",
                minWidth: 180,
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(255,193,7,0.07)",
                flex: "1 1 220px",
                maxWidth: 320,
                width: "100%",
                margin: "0 auto"
              }}>
                <img
                  src={localStorage.getItem("admin_qr") || "/images/qr.jpeg"}
                  alt="QR Code for Payment"
                  style={{
                    width: "clamp(60px, 20vw, 80px)",
                    height: "clamp(60px, 20vw, 80px)",
                    objectFit: "contain",
                    borderRadius: 8,
                    border: "1px solid #ccc",
                    background: "#fff",
                    marginBottom: 8,
                    cursor: "pointer"
                  }}
                  onClick={() => setShowFullQR(true)}
                  title="Click to enlarge"
                />
                <div style={{ fontWeight: 700, color: "#ff9800", fontSize: "clamp(1rem, 2vw, 1.05rem)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                  <QrCode size={18} color="#ff9800" /> QR Code
                </div>
                <div style={{ fontSize: "clamp(0.9rem, 2vw, 0.98rem)", color: "#444", marginTop: 6 }}>
                  Scan & Pay
                </div>
                <button
                  type="button"
                  style={{
                    marginTop: 10,
                    background: "#fff",
                    color: "#ff9800",
                    border: "2px solid #ff9800",
                    borderRadius: "22px",
                    padding: "0.5rem 1.5rem",
                    fontWeight: 600,
                    fontSize: "clamp(0.95rem, 2vw, 1.02rem)",
                    cursor: "pointer",
                    transition: "background 0.2s, border 0.2s, color 0.2s"
                  }}
                  onClick={() => setShowFullQR(true)}
                >
                  Show Full QR
                </button>
              </div>
              {/* UPI Apps Method */}
              <div className="refund-method-box" style={{
                background: "#e3f2fd",
                border: "1px solid #90caf9",
                borderRadius: 12,
                padding: "clamp(0.7rem, 2vw, 1.1rem) clamp(1rem, 4vw, 1.3rem)",
                minWidth: 180,
                textAlign: "center",
                boxShadow: "0 2px 8px rgba(33,150,243,0.07)",
                flex: "1 1 220px",
                maxWidth: 320,
                width: "100%",
                margin: "0 auto"
              }}>
                <div style={{ fontWeight: 700, color: "#1976d2", fontSize: "clamp(1rem, 2vw, 1.05rem)", marginBottom: 8 }}>
                  Pay via UPI App
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {upiAppList.map(app => (
                    <a
                      key={app.name}
                      href={app.url(form.upi, "Elite Escort Service", form.amount)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        background: "#fff",
                        borderRadius: 8,
                        padding: "6px 10px",
                        textDecoration: "none",
                        color: "#1976d2",
                        fontWeight: 600,
                        border: "1px solid #90caf9",
                        transition: "background 0.2s"
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src={app.logo} alt={app.name} style={{ width: 24, height: 24, borderRadius: 4 }} />
                      {app.name}
                    </a>
                  ))}
                </div>
                <div style={{ fontSize: "clamp(0.9rem, 2vw, 0.98rem)", color: "#444", marginTop: 8 }}>
                  Tap your UPI app to pay
                </div>
              </div>
              {/* Show full QR modal */}
              {showFullQR && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100vw",
                    height: "100vh",
                    background: "rgba(0,0,0,0.7)",
                    zIndex: 4000,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onClick={() => setShowFullQR(false)}
                >
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: 18,
                      padding: "clamp(1rem, 5vw, 2rem)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      position: "relative"
                    }}
                    onClick={e => e.stopPropagation()}
                  >
                    <img
                      src={localStorage.getItem("admin_qr") || "/images/qr.jpeg"}
                      alt="Full QR Code"
                      className="refund-modal-qr"
                      style={{
                        width: "clamp(180px, 70vw, 340px)",
                        height: "clamp(180px, 70vw, 340px)",
                        objectFit: "contain",
                        borderRadius: 16,
                        border: "2px solid #007bff",
                        background: "#fff"
                      }}
                    />
                    <button
                      style={{
                        marginTop: 24,
                        background: "#fff",
                        color: "#007bff",
                        border: "2px solid #007bff",
                        borderRadius: "22px",
                        padding: "0.6rem 2rem",
                        fontWeight: 600,
                        fontSize: "clamp(1rem, 2vw, 1.02rem)",
                        cursor: "pointer",
                        transition: "background 0.2s, border 0.2s, color 0.2s"
                      }}
                      onClick={() => setShowFullQR(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
            <button
              type="submit"
              style={{
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "22px",
                padding: "0.75rem 2.2rem",
                fontWeight: 600,
                fontSize: "clamp(1rem, 2vw, 1.12rem)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.10)",
                cursor: "pointer",
                transition: "background 0.2s, box-shadow 0.2s",
                letterSpacing: "0.5px",
                marginTop: 12
              }}
              disabled={submitted}
            >
              {submitted ? "Submitted" : "Submit Refund Request"}
            </button>
          </form>
        </div>
        {/* 60px blank space below the page container */}
        <div style={{ height: 60 }} />
        {/* Footer with fade-in effect */}
        <div
          style={{
            opacity: showFooter ? 1 : 0,
            transition: "opacity 0.7s",
            position: "relative",
            width: "100%",
            textAlign: "center",
            pointerEvents: showFooter ? "auto" : "none"
          }}
        >
       
            
        </div>
      </div>
    </div>
  );
}