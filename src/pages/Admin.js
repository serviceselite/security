import React, { useState } from "react";

export default function Admin() {
  const [form, setForm] = useState({
    mobile: localStorage.getItem("admin_mobile") || "",
    joiningDate: localStorage.getItem("admin_joiningDate") || "",
    refundDate: localStorage.getItem("admin_refundDate") || "",
    serviceId: localStorage.getItem("admin_serviceId") || "",
    amount: localStorage.getItem("admin_amount") || "18500",
    qr: localStorage.getItem("admin_qr") || "",
    upi: localStorage.getItem("admin_upi") || "",
    id_verified: localStorage.getItem("admin_id_verified") === "true" ? "true" : "false",
    password: "",
  });

  const [msg, setMsg] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleLogin = e => {
    e.preventDefault();
    if (form.password === "P0kew0rd") {
      setLoggedIn(true);
      setMsg("");
    } else {
      setMsg("Wrong password");
    }
  };

  const handleSave = async e => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/security', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mobile: form.mobile,
          joiningDate: form.joiningDate,
          refundDate: form.refundDate,
          serviceId: form.serviceId,
          amount: form.amount,
          qr: form.qr,
          upi: form.upi,
          id_verified: form.id_verified,
        })
      });
      if (res.ok) {
        setMsg("Saved to database!");
      } else {
        setMsg("Error saving to database.");
      }
    } catch (err) {
      setMsg("Network error.");
    }
  };

  if (!loggedIn) {
    return (
      <form onSubmit={handleLogin}>
        <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Admin Password" />
        <button type="submit">Login</button>
        <div style={{ color: "red" }}>{msg}</div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSave}>
      <input name="mobile" value={form.mobile} onChange={handleChange} placeholder="Mobile" />
      <input name="joiningDate" value={form.joiningDate} onChange={handleChange} placeholder="Joining Date" />
      <input name="refundDate" value={form.refundDate} onChange={handleChange} placeholder="Refund Date" />
      <input name="serviceId" value={form.serviceId} onChange={handleChange} placeholder="Service ID" />
      <input name="amount" value={form.amount} onChange={handleChange} placeholder="Amount" />
      <div style={{ margin: '10px 0' }}>
  <label>QR Image Upload:</label><br />
  <input
    type="file"
    accept="image/*"
    onChange={e => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setForm(f => ({ ...f, qr: reader.result }));
          localStorage.setItem("admin_qr", reader.result);
        };
        reader.readAsDataURL(file);
      }
    }}
  />
  {form.qr && (
    <img src={form.qr} alt="QR Preview" style={{ marginTop: 8, maxWidth: 120, border: '1px solid #ccc', borderRadius: 6 }} />
  )}
</div>
      <input name="upi" value={form.upi} onChange={handleChange} placeholder="UPI ID" />
      <label>
        ID Verification Status:
        <select name="id_verified" value={form.id_verified} onChange={handleChange}>
          <option value="true">Completed</option>
          <option value="false">Not Completed</option>
        </select>
      </label>
      <button type="submit">Save</button>
      <div style={{ color: "green" }}>{msg}</div>
    </form>
  );
}