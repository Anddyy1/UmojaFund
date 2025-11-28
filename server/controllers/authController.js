const User = require('../models/User');
const jwt = require('jsonwebtoken');

// --- Generate JWT Token ---
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '30d' }
  );
};

// --- @desc Register new user ---
// --- POST /api/auth/register ---
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  console.log('Register request body:', req.body);

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      console.log('Registration failed: Email already exists:', email);
      return res.status(400).json({ message: 'Email already exists' });
    }

    const user = await User.create({ name, email, password });
    console.log('User created successfully:', user._id);

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000
    });

    res.status(201).json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    console.error('Register error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// --- @desc Login user ---
// --- POST /api/auth/login ---
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log('Login request body:', req.body);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      console.log('Login failed: User not found', email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      console.log('Login failed: Password mismatch for', email);
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = generateToken(user);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000
    });

    res.json({
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      }
    });

  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// --- @desc Get current logged-in user ---
// --- GET /api/auth/me ---
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      console.log('GetMe failed: User not found', req.user.id);
      return res.status(404).json({ message: 'User not found' });
    }

    res.json({ user });

  } catch (err) {
    console.error('GetMe error:', err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { registerUser, loginUser, getMe };
