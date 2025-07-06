const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// defining path for build ---  

// Example User schema
const userSchema = new mongoose.Schema({
  username: String,
  role: { type: String, default: 'user' },
});
const User = mongoose.model('User', userSchema);


// Security Settings Schema
const securitySchema = new mongoose.Schema({
  mobile: String,
  joiningDate: String,
  refundDate: String,
  serviceId: String,
  amount: String,
  qr: String, // Base64 image data
  upi: String,
  id_verified: String
}, { timestamps: true });

const Security = mongoose.model('Security', securitySchema);

// Routes for Security Settings
app.get('/api/security', async (req, res) => {
  try {
    const settings = await Security.findOne().sort({ createdAt: -1 });
    res.json(settings || {});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/api/security', async (req, res) => {
  try {
    const data = req.body;
    let doc = await Security.findOne();
    if (doc) {
      Object.assign(doc, data);
      await doc.save();
    } else {
      doc = await Security.create(data);
    }
    res.json(doc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// API route to get all users
app.get('/api/users', async (req, res) => {
  const users = await User.find();
  res.json(users);
});

// API route to update a user's role
app.put('/api/users/:id/role', async (req, res) => {
  const { role } = req.body;
  const user = await User.findByIdAndUpdate(req.params.id, { role }, { new: true });
  res.json(user);
});

// Serve static files from the React app (after all API routes)
const path = require('path');
app.use(express.static(path.join(__dirname, '../build')));
app.get(/^((?!\/api\/).)*$/, (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));